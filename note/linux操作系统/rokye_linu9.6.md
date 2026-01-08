
重新加载配置： nmcli connection reload
启动连接： nmcli connection up enp0s8
查看网卡：ip addr show enp0s8
检查状态：nmcli connection show
          nmcli device status
给网卡添加配置：注意，这个网卡是指虚拟机安装完成后，新添加的网卡，
且设备名称不能与现有的冲突，且改网卡在vbox的网卡设置中为：host-only 混杂模式：全部允许
另一张网卡配置为：网络地址转换NAT,允许访问外网
nmcli connection add 
  type ethernet ifname enp0s8 con-name enp0s8 
  ipv4.method manual 
  ipv4.addresses 192.168.0.21/24 
  ipv4.gateway 192.168.0.100 

-- 以上情况是配置虚拟机的指选了NAT的网卡，建议下次如果再需要配置虚拟机
则配置两张万卡，配置参照上面的情况，一张NAT,一张host-only