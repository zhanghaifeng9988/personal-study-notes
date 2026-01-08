
drop table liu_PARTITIONS;
create table liu_PARTITIONS
(
  owner             VARCHAR2(30 BYTE),
  table_name        VARCHAR2(30 BYTE),
  partitioning_type VARCHAR2(7),
  parcol            VARCHAR2(40 BYTE),
  parcol_type       VARCHAR2(30),
  tablespace_name   VARCHAR2(30 BYTE),
  partition_name    varchar2(32),
  high_value        VARCHAR2(100),
  high_value_length INTEGER
)




--为一级分区表加子分区
declare
   v_high_value1 varchar2(100) := '''0''';
   v_high_value2 varchar2(100) := '''0''';
   v_high_mid varchar2(100) := '''0''';
   v_high_mid_length integer := 1;
   v_high_value_length1 integer := 1;
   v_high_value_length2 integer := 1;
   v_par_name1 varchar2(32) := ' ';
   v_par_name2 varchar2(32) := ' ';
   v_mid_name varchar2(32) := ' ';
begin
   for cur_tabs in (
      select tab.owner,
             tab.table_name,
             tab.partitioning_type,
             par.column_name         parcol,
             cols.DATA_TYPE parcol_type,
             tab.def_tablespace_name tablespace_name
        from dba_part_tables tab, dba_part_key_columns par, dba_tab_columns cols
       where tab.owner not in ('SYS', 'SYSTEM')
         and tab.table_name not like 'BIN$%'
         and tab.subpartitioning_type = 'NONE'
         and par.owner = tab.owner
         and par.name = tab.table_name
         and par.owner = cols.OWNER
         and par.name = cols.TABLE_NAME
         and par.column_name = cols.COLUMN_NAME
         and par.object_type = 'TABLE'
         and par.column_name not like '%NO%'
         and par.column_name not like '%DEPT%'
         and par.column_name not in
             ('USER_BUREAU_NAME', 'EQUIP_CATEG', 'PART_KEY')
         and tab.table_name not in ('INDY_AUDITOR_TMP', 'R_UTILITY_DATA_QUALITY', 'ARC_R_AUX_PLAN', 'A_ALIPAY_PAYFLOW')
   )
   loop
      for cur_pars in (
          select partition_name, high_value, high_value_length
            from dba_tab_partitions
           where table_owner = cur_tabs.owner
             and table_name = cur_tabs.table_name)
      loop
          v_high_mid := cur_pars.high_value;
          v_high_mid_length := cur_pars.high_value_length;
          v_mid_name := cur_pars.partition_name;
          if v_high_mid = 'MAXVALUE' then
                insert into liu_partitions 
           values (cur_tabs.owner, cur_tabs.table_name, cur_tabs.partitioning_type, cur_tabs.parcol,  cur_tabs.parcol_type, cur_tabs.tablespace_name, v_mid_name, v_high_mid, v_high_mid_length);   
          end if;
           
          if v_high_mid > v_high_value1 and v_high_mid > v_high_value2 then
             v_high_value2 := v_high_value1;
             v_high_value_length2 := v_high_value_length1;
             v_par_name2 := v_par_name1;
             v_high_value1 := v_high_mid;
             v_high_value_length1 := v_high_mid_length;
             v_par_name1 := v_mid_name;
          end if;
          
          if v_high_mid < v_high_value1 and v_high_mid > v_high_value2 then
             v_high_value2 := v_high_mid;
             v_high_value_length2 := v_high_mid_length;
             v_par_name2 := v_mid_name;
          end if;
              
      end loop;
      
      insert into liu_partitions 
           values (cur_tabs.owner, cur_tabs.table_name, cur_tabs.partitioning_type, cur_tabs.parcol,  cur_tabs.parcol_type, cur_tabs.tablespace_name, v_par_name1, v_high_value1, v_high_value_length1);
      
      insert into liu_partitions 
           values (cur_tabs.owner, cur_tabs.table_name, cur_tabs.partitioning_type, cur_tabs.parcol,  cur_tabs.parcol_type, cur_tabs.tablespace_name, v_par_name2, v_high_value2, v_high_value_length2);
           
      commit;
      v_high_value1  := '''0''';
      v_high_value2  := '''0''';
      v_high_mid := '''0''';
      v_high_mid_length := 1;
      v_high_value_length1 := 1;
      v_high_value_length2 := 1;
      v_par_name1 := ' ';
      v_par_name2 := ' ';
      v_mid_name := ' ';
   end loop;
end;

--LIST
declare
   v_par_no varchar2(32);
begin
   for cur in (
       select owner, table_name, tablespace_name, high_value_length, max(trim('''' from high_value)) high_value
         from liu_partitions
        where  partitioning_type = 'LIST'
        group by owner, table_name, tablespace_name, high_value_length)
   loop
      if  cur.high_value_length = 8 then
          v_par_no := to_char(add_months(to_date(cur.high_value, 'yyyymm'), 1), 'yyyymm');
          while v_par_no < '201703'
          loop
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' add partition p' || v_par_no || ' values(''' ||v_par_no || ''') tablespace ' || cur.tablespace_name ||';');
             v_par_no := to_char(add_months(to_date(v_par_no, 'yyyymm'), 1), 'yyyymm'); 
          end loop;
            
      end if;
      
      if  cur.high_value_length = 10 then
          v_par_no := to_char(to_date(cur.high_value, 'yyyymmdd') + 1, 'yyyymmdd');
          while v_par_no < '201703'
          loop
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' add partition p' || v_par_no || ' values(''' ||v_par_no || ''') tablespace ' || cur.tablespace_name ||';');
             v_par_no := to_char(to_date(v_par_no, 'yyyymmdd') + 1, 'yyyymmdd');
          end loop;
            
      end if;
      
      for cur_index in (select owner, index_name
                          from dba_indexes
                         where owner = cur.owner
                           and table_name = cur.table_name
                           and partitioned = 'NO')
      loop
         dbms_output.put_line('alter index ' || cur_index.owner || '.' || cur_index.index_name || ' rebuild;');
      end loop;    
   end loop;
end;


--RANGE
declare
   v_par_no varchar2(32);
   v_par_date date;
begin
   -- 没有最大值的分区
   for cur in (
       select owner, table_name, tablespace_name, high_value_length, parcol_type, length(partition_name) parname_length, max(trim('''' from high_value)) high_value
         from liu_partitions a
        where  partitioning_type = 'RANGE'
          and not exists (select 1 from liu_partitions b where b.owner = a.owner and b.table_name = a.table_name and b.high_value = 'MAXVALUE')
        group by owner, table_name, tablespace_name, high_value_length, parcol_type, length(partition_name))
   loop
      if  cur.high_value_length = 6 then
          v_par_no := to_char(add_months(to_date(cur.high_value, 'yyyy'), 12), 'yyyy');
          while v_par_no < '2019'
          loop
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' add partition p' || v_par_no || ' values less than (''' ||v_par_no || ''') tablespace ' || cur.tablespace_name ||';');
             v_par_no := to_char(add_months(to_date(v_par_no, 'yyyy'), 12), 'yyyy');
          end loop;
            
      end if;
        
      if  cur.high_value_length = 8 then
          v_par_no := to_char(add_months(to_date(cur.high_value, 'yyyymm'), 1), 'yyyymm');
          while v_par_no < '201703'
          loop
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' add partition p' || v_par_no || ' values less than (''' ||v_par_no || ''') tablespace ' || cur.tablespace_name ||';');
             v_par_no := to_char(add_months(to_date(v_par_no, 'yyyymm'), 1), 'yyyymm'); 
          end loop;
            
      end if;
      
      if  cur.high_value_length = 10 then
          v_par_no := to_char(to_date(cur.high_value, 'yyyymmdd') + 1, 'yyyymmdd');
          while v_par_no < '201703'
          loop
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' add partition p' || v_par_no || ' values less than (''' ||v_par_no || ''') tablespace ' || cur.tablespace_name ||';');
             v_par_no := to_char(to_date(v_par_no, 'yyyymmdd') + 1, 'yyyymmdd');
          end loop;
            
      end if;
      
      if  cur.high_value_length = 83 then
          execute immediate 'select ' || cur.high_value || ' from dual ' into v_par_date;         
          if cur.parname_length = 7 then
              v_par_date := add_months(v_par_date, 1);
              while v_par_date < TO_DATE(' 2017-03-02 00:00:00', 'SYYYY-MM-DD HH24:MI:SS', 'NLS_CALENDAR=GREGORIAN')
              loop
                 v_par_no := to_char(add_months(v_par_date, -1), 'yyyymm');
                 dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' add partition p' || v_par_no || ' values less than (TO_DATE(''' || TO_CHAR(v_par_date, 'SYYYY-MM-DD HH24:MI:SS') || ''', ''SYYYY-MM-DD HH24:MI:SS'')) tablespace ' || cur.tablespace_name ||';');
                 v_par_date := add_months(v_par_date, 1);
              end loop;
          end if;
          if cur.parname_length = 9 then
              v_par_date := v_par_date + 1;
              while v_par_date < TO_DATE(' 2017-03-02 00:00:00', 'SYYYY-MM-DD HH24:MI:SS', 'NLS_CALENDAR=GREGORIAN')
              loop
                 v_par_no := to_char(v_par_date - 1, 'yyyymmdd');
                 dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' add partition p' || v_par_no || ' values less than (TO_DATE(''' || TO_CHAR(v_par_date, 'SYYYY-MM-DD HH24:MI:SS') || ''', ''SYYYY-MM-DD HH24:MI:SS'')) tablespace ' || cur.tablespace_name ||';');
                 v_par_date := v_par_date + 1;
              end loop;
          end if;            
      end if;
            
      for cur_index in (select owner, index_name
                          from dba_indexes
                         where owner = cur.owner
                           and table_name = cur.table_name
                           and partitioned = 'NO'
                           and status = 'INVALID')
      loop
         dbms_output.put_line('alter index ' || cur_index.owner || '.' || cur_index.index_name || ' rebuild;');
      end loop;    
   end loop;

   
   --有最大值的分区
   for cur in (
       select owner, table_name, tablespace_name, high_value_length, parcol_type, max(trim('''' from high_value)) high_value
         from liu_partitions a
        where  partitioning_type = 'RANGE'
          and exists (select 1 from liu_partitions b where b.owner = a.owner and b.table_name = a.table_name and b.high_value = 'MAXVALUE')
          and high_value <> 'MAXVALUE'
        group by owner, table_name, tablespace_name, high_value_length, parcol_type)
   loop
        
      if  cur.high_value_length = 8 then
          v_par_no := to_char(add_months(to_date(cur.high_value, 'yyyymm'), 1), 'yyyymm');
          while v_par_no < '201703'
          loop
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' split partition pmax at (''' || v_par_no || ''')' || ' into (partition p' ||v_par_no || ', partition pmax)' ||';');
             v_par_no := to_char(add_months(to_date(v_par_no, 'yyyymm'), 1), 'yyyymm'); 
          end loop;
            
      end if;     
   
      if  cur.high_value_length = 83 then
          execute immediate 'select ' || cur.high_value || ' from dual ' into v_par_date;
          v_par_date := add_months(v_par_date, 1);
          while v_par_date < TO_DATE(' 2017-03-02 00:00:00', 'SYYYY-MM-DD HH24:MI:SS', 'NLS_CALENDAR=GREGORIAN')
          loop
             v_par_no := to_char(add_months(v_par_date, -1), 'yyyymm');
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' split partition pmax at (TO_DATE(''' || TO_CHAR(v_par_date, 'SYYYY-MM-DD HH24:MI:SS') || ''', ''SYYYY-MM-DD HH24:MI:SS'')) into (partition p' ||v_par_no || ', partition pmax)' ||';');
             v_par_date := add_months(v_par_date, 1);
          end loop;
            
      end if;   
            
      for cur_index in (select owner, index_name
                          from dba_indexes
                         where owner = cur.owner
                           and table_name = cur.table_name
                           and partitioned = 'NO'
                           and status = 'INVALID')
      loop
         dbms_output.put_line('alter index ' || cur_index.owner || '.' || cur_index.index_name || ' rebuild;');
      end loop;       
   end loop;
end;




drop table liu_SUBPARTITIONS;
create table liu_SUBPARTITIONS
(
  owner             VARCHAR2(30 BYTE),
  table_name        VARCHAR2(30 BYTE),
  partitioning_type VARCHAR2(7),
  parcol            VARCHAR2(40 BYTE),
  parcol_type       VARCHAR2(30),
  subpartitioning_type varchar2(30 BYTE),
  subparcol         varchar2(40 BYTE),
  subparcol_type    varchar2(30),
  tablespace_name   VARCHAR2(30 BYTE),
  partition_name    varchar2(32),
  subpartition_name varchar2(32),
  high_value        VARCHAR2(500),
  high_value_length INTEGER
)



  
--为二级分区表加子分区
declare
   v_high_value1 varchar2(500) := '''0''';
   v_high_value2 varchar2(500) := '''0''';
   v_high_mid varchar2(500) := '''0''';
   v_high_mid_length integer := 1;
   v_high_value_length1 integer := 1;
   v_high_value_length2 integer := 1;
   v_par_name1 varchar2(32) := ' ';
   v_par_name2 varchar2(32) := ' ';
   v_mid_name varchar2(32) := ' ';
begin
   for cur_tabs in (
      select tab.owner, tab.table_name, tab.partitioning_type, par.column_name parcol, par_col.DATA_TYPE par_col_type, tab.subpartitioning_type, subpar.column_name subparcol, 
             subpar_col.DATA_TYPE subpar_col_type, tab.def_tablespace_name tablespace_name
        from dba_part_tables tab,
             dba_part_key_columns par,
             dba_subpart_key_columns subpar,
             dba_tab_columns par_col,
             dba_tab_columns subpar_col
       where tab.owner not in ('SYS', 'SYSTEM')
         and tab.table_name not like 'BIN$%'
         and par.owner = tab.owner
         and par.name =  tab.table_name
         and par.object_type = 'TABLE'
         and subpar.owner = tab.owner
         and subpar.name = tab.table_name
         and subpar.object_type = 'TABLE'
         and par_col.OWNER = tab.owner
         and par_col.TABLE_NAME = tab.table_name
         and par_col.COLUMN_NAME = par.column_name
         and subpar_col.OWNER = tab.owner
         and subpar_col.TABLE_NAME = tab.table_name
         and subpar_col.COLUMN_NAME = subpar.column_name
         and subpar_col.data_type not in ('NUMBER')
         and par_col.data_type not in ('DATE')
         and subpar.column_name not in ('BUSI_TYPE_CODE')
   )
   loop
      for cur_par in (
          select partition_name
            from dba_tab_partitions
           where table_owner = cur_tabs.owner
             and table_name = cur_tabs.table_name)         
      loop
         for cur_subpar in (
             select subpartition_name, high_value, high_value_length
               from dba_tab_subpartitions
              where table_owner = cur_tabs.owner
                and table_name = cur_tabs.table_name
                and partition_name = cur_par.partition_name)
         loop
            v_high_mid := cur_subpar.high_value;
            v_high_mid_length := cur_subpar.high_value_length;
            v_mid_name := cur_subpar.subpartition_name;

            if v_high_mid = 'MAXVALUE' then
                  insert into liu_subpartitions 
                     values (cur_tabs.owner, cur_tabs.table_name, cur_tabs.partitioning_type, cur_tabs.parcol,  cur_tabs.par_col_type, 
                             cur_tabs.subpartitioning_type, cur_tabs.subparcol, cur_tabs.subpar_col_type, cur_tabs.tablespace_name, 
                             cur_par.partition_name, v_mid_name, v_high_mid, v_high_mid_length);   
            end if;
             
            if v_high_mid > v_high_value1 and v_high_mid > v_high_value2 then
               v_high_value2 := v_high_value1;
               v_high_value_length2 := v_high_value_length1;
               v_par_name2 := v_par_name1;
               v_high_value1 := v_high_mid;
               v_high_value_length1 := v_high_mid_length;
               v_par_name1 := v_mid_name;
            end if;
            
            if v_high_mid < v_high_value1 and v_high_mid > v_high_value2 then
               v_high_value2 := v_high_mid;
               v_high_value_length2 := v_high_mid_length;
               v_par_name2 := v_mid_name;
            end if;
         end loop;
         
         insert into liu_subpartitions 
            values (cur_tabs.owner, cur_tabs.table_name, cur_tabs.partitioning_type, cur_tabs.parcol,  cur_tabs.par_col_type, 
                    cur_tabs.subpartitioning_type, cur_tabs.subparcol, cur_tabs.subpar_col_type, cur_tabs.tablespace_name, 
                    cur_par.partition_name, v_par_name1, v_high_value1, v_high_value_length1);              
                    
         commit;
         v_high_value1  := '''0''';
         v_high_value2  := '''0''';
         v_high_mid := '''0''';
         v_high_mid_length := 1;
         v_high_value_length1 := 1;
         v_high_value_length2 := 1;
         v_par_name1 := ' ';
         v_par_name2 := ' ';
         v_mid_name := ' ';    
      end loop;
   end loop;
end;

--RANGE_LIST
--RANGE_LIST
declare
   v_par_no varchar2(32);
   v_bid integer := 0;
begin
   for cur in (
       select owner, table_name, tablespace_name, partition_name, high_value_length, max(trim('''' from high_value)) high_value
         from liu_subpartitions
        group by owner, table_name, tablespace_name, partition_name, high_value_length)
   loop
      if  cur.high_value_length = 6 then
          v_par_no := to_char(add_months(to_date(cur.high_value, 'yyyy'), 12), 'yyyy');
          while v_par_no < '2017'
          loop
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' modify partition ' || cur.partition_name || ' add subpartition ' || cur.partition_name || '_p' || v_par_no || ' values(''' ||v_par_no || ''') tablespace ' || cur.tablespace_name ||';');
             v_par_no := to_char(add_months(to_date(v_par_no, 'yyyy'), 12), 'yyyy');
             v_bid := v_bid + 1;
          end loop;
            
      end if;
      
      if  cur.high_value_length = 8 then
          v_par_no := to_char(add_months(to_date(cur.high_value, 'yyyymm'), 1), 'yyyymm');
          while v_par_no < '201703'
          loop
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' modify partition ' || cur.partition_name || ' add subpartition ' || cur.partition_name || '_p' || v_par_no || ' values(''' ||v_par_no || ''') tablespace ' || cur.tablespace_name ||';');
             v_par_no := to_char(add_months(to_date(v_par_no, 'yyyymm'), 1), 'yyyymm'); 
             v_bid := v_bid + 1;
          end loop;
            
      end if;
      
/*      if  cur.high_value_length = 10 then
          v_par_no := to_char(to_date(cur.high_value, 'yyyymmdd') + 1, 'yyyymmdd');
          while v_par_no < '201703'
          loop
             dbms_output.put_line('alter table ' || cur.owner || '.' || cur.table_name || ' modify partition ' || cur.partition_name || ' add subpartition ' || cur.partition_name || '_p' || v_par_no || ' values(''' ||v_par_no || ''') tablespace ' || cur.tablespace_name ||';');
             v_par_no := to_char(to_date(v_par_no, 'yyyymmdd') + 1, 'yyyymmdd');
          end loop;
          v_bid := v_bid + 1;
      end if;*/
      
      if v_bid > 0 then      
      for cur_index in (select owner, index_name
                          from dba_indexes
                         where owner = cur.owner
                           and table_name = cur.table_name
                           and partitioned = 'NO')
      loop
         dbms_output.put_line('alter index ' || cur_index.owner || '.' || cur_index.index_name || ' rebuild;');
      end loop;   
      end if;
      v_bid := 0;
   end loop;
end;



