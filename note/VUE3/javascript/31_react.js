let a = {
    value:1
  }
let b = {
    value:2
  }
//定义处理器
  handleA = {
//get方法会在取值时调用，其中第1个参数为要取值的对象，第2个参数为所取值的属性
    get(target,prop) {
      console.log(`获取handleA：${prop}的值`)
      return target[prop]
    },
//set方法会在设置时调用，其中第1个参数为操作的对象，第2个参数为要处理的属性
//第3个参数为要设置的值
    set(target,key,value){
      console.log(`设置handleA：${key}的值为${value}`)
      target[key] = value
    }
  }
  handleB = {
    get(target,prop) {
      console.log(`获取handleB：${prop}的值`)
      return target[prop]
    },
    set(target,key,value){
      console.log(`设置handleB：${key}的值为${value}`)
      target[key] = value
    }
  }
  let pa = new Proxy(a,handleA) //创建1个基于a对象的代理对象
  let pb = new Proxy(b,handleB) //创建1个基于b对象的代理对象
  console.log(pa.value) //获取a的值,值为1
  console.log(pb.value) //获取b的值,值为2
  pa.value = 3 //设置a的值
  pb.value = 4 //设置b的值
  console.log(pa.value) //获取pa的值,值为3
  console.log(pb.value) //获取pb的值,值为4  
  console.log(a.value) //获取a的值,值为3
  console.log(b.value) //获取b的值,
