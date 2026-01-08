//数据类型、字符串拼接
/* function getString(str:string):string{
    return "adsfasdfasdfa"+str
}
let str:string="welcom laji"
console.log(getString(str))

var isComplete = new Boolean(1);
console.log(typeof isComplete);
console.log(typeof isComplete.valueOf(),isComplete.valueOf());

var isPass:boolean = Boolean(0);
console.log(typeof isPass);
console.log(typeof isPass.valueOf(),isPass.valueOf());

var str1:string = "hello ";
var str2:string = "world";
var str3:string = `str1 is ${str1} str2 is ${str2}`;
var str4:string = str1 + str2;
var str5:string = 'str1 is '+ str1 +'str2 is '+ str2;
console.log(str3)
console.log(str4)
console.log(str5)

var n1:string='123'
console.log(n1,typeof n1)
var n2:number=123
console.log(n2,typeof n2) */

//元组类型
/* var tuple: [string,number] = ["XiaoMing",25]
console.log('name is ' + tuple[0] + ',' + 'age is ' + tuple[1]) */

//枚举类型
/* enum Result {
    Success=10000,
    Fail,
    Error
}

var res:Result = Result.Success
console.log(res) // 10000

enum Direction {
    Up='Up'  ,
    Down='Down',
    Left='Left',
    Right='Right'
}
var dir:Direction = Direction.Right
console.log(dir)

console.log(Direction) */

//任意类型
/* var some:any = 1
some = 'hello'
console.log(typeof some)  //string
var some1 = 1
console.log(typeof some1) //number
var some2
console.log(typeof some2) // undefined */

// never类型
/* var n:never
n = 42 // error */

// 默认参数
/* function greet(name: string, age: number = 18): string {
    return `Hi, ${name}, you are ${age} years old.`
  }
  
  const result = greet('John')
  console.log(result) // Hi, John, you are 18 years old.
  console.log(greet('Jane', 25)) // Hi, Jane, you are 25 years old.  */

 //组合参数
  /* function greet(name: string | string[]): string | string[] {
    if (Array.isArray(name)) {
      return name.map((n) => `Welcome array, ${n}!`)
    }
    return `Welcome string, ${name}!`
  }
  const result = greet('John')
  console.log(result)  // Welcome string, John!
  const result1 = greet(['John', 'Jane'])
  console.log(result1) // [ 'Welcome array, John!', 'Welcome array, Jane!' ]
 */
//类继承，如果不是完全重写父类的属性和方法，可以使用super关键字用来拓展父类的属性和方法
/*   class Pepole {
    name: string
    constructor(name: string) {
      this.name = name
    }
    sayHi() {
      console.log(`Hi, ${this.name}!`)
    }
  }

  class Teacher extends Pepole {
    subject: string
    constructor(name: string, subject: string) {
      super(name) //调构造函数，进行拓展，需要使用super关键字
      this.subject = subject
    }
    sayHi() {
      super.sayHi() //调父类的sayHi方法，进行拓展，增加一个功能
      console.log(`Hi, I am ${this.name}, and I teach ${this.subject}.`)
    }
    teach() {
      super.sayHi() //调父类的sayHi方法，进行拓展，增加一个功能
      console.log(`${this.name} is teaching ${this.subject}.`)
    }
  }

  var teacher = new Teacher('John', 'Math')
  teacher.sayHi() // Hi, John! Hi, I am John, and I teach Math.
  teacher.teach() // Hi, John! John is teaching Math. */

//只读属性,私有属性，构造函数参数类型检查，静态只读属性
//私有属性，只能在类的内部访问修改，外部无法直接访问
/* class Circle {
  private _radius:number
  static readonly pi:number=3.1415 //静态只读属性
  constructor(radius:number){
    this.radius=radius //此处实际调用set 方法，将构造函数传入的参数，给到set方法中，进行赋值
  }
  set radius(radius:number){ //设置radius属性，进行类型检查
    if(radius>=0){
      this._radius=radius
    }else{
      throw new Error('Radius must be positive')
    }
  }
  get radius():number{
    return this._radius
  }
   area():number{
    return this.pi*this.radius*this.radius
  }
}
var c=new Circle(5)
c.pi=3.14  //会报错，因为pi是只读属性
console.log(c.area()) // 78.53975 */

// 抽象类，不能被实例化的类
/* abstract class Goods {
  abstract price(): number
  logInfo(): void {
    console.log('price:'+ this.price()+ '元')
}
}

class Bread extends Goods {
  price(): number {
    return 1.5
  }
}

class Milk extends Goods {
  price(): number {
    return 2.5
  }
}
var b = new Bread()
b.logInfo() // price: 1.5 元
var m = new Milk()
m.logInfo() // price: 2.5 元 */

//接口相关
/* interface RectangleAreaMethod{
  (width:number,high:number):number
}
function f(w : number,h : number){
  return w * h
}
f.desc = "矩形面积计算！"
let func:RectangleAreaMethod = f  //用接口做函数的类型声明，实现接口
console.log(func(1,4))
console.log(f.desc)


interface JArray{ //对数组类型进行接口约束
  readonly [index:number]:string //只读属性，数组的索引类型为number
}

interface JDictionary{//将对象类型进行接口约束
  readonly [key:string]:string //只读属性，属性的索引类型为string
}
let arr: JArray=['a','ab','abc']
let dic: JDictionary={'a':'1','b':'2'}
console.log(arr[1]) // ab
console.log(dic['a']) //      */

// 交叉类型 举例
/* interface Shape{
  area():number
}

interface Color{
  color:string
}

class RedCircle implements Shape,Color {
  radius:number
  color = 'red'
  constructor(radius : number){
    this.radius = radius
  }
  area():number {
    return  this.radius*this.radius*3.14
  }
}
//两种写法,1个场景只能用一种写法，不能同时混用
var c = new  RedCircle(2);
console.log(c.color,c.area(),c.radius)
var d:Shape & Color & RedCircle= new  RedCircle(2);
console.log(d.color,d.area(),d.radius) */

//类型区分、类型断言
/* class Color {
  color:string
  constructor(color:string){
    this.color=color
  }
}

class Shape {
  size:number
  constructor(size:number){
    this.size=size
  }
}

function stringOrNumber(p:string | number){
  if (typeof p === 'string') { //typeof:对参数类型的判断。此时编译器会将参数p ，进行类型推断
    console.log(p.length)
  }
  else{
    console.log(p / 2)
  }
}

console.log(stringOrNumber(4))

function colorOrShape(p:Color | Shape){
  if (p instanceof Color){  //intanceof:对类 类型的判断
    console.log(p.color)
  }
  else {
    console.log(p.size)
  }
}

console.log(colorOrShape(new Shape(4))) */

//字面量
/* type Align = 'centerX' | 'centerY' //定义了Align的  字符串字面量类型
function descAlign(align:Align){
  if (align =='centerX'){
    console.log('水平居中')
  }
  if (align == 'centerY') {
    console.log('垂直居中')
  }    
}

descAlign("centerX")

type Size = 44 | 68    //定义了Size的 数值字面量类型 
function descSize(size:Size){
  if (size==44) {
    console.log('创建44尺寸的头像')
  }
  if (size == 68) {
    console.log('创建68尺寸的头像')
  }
}

descSize(44) */

// 泛型函数
/* function trace<T> (data:T) : T {
  console.log('doing record -',data )
  return data
}

var a = 3
var b = 4
var c = trace(a) + trace(b)
console.log(e) // 7
var d = trace('HELLO')
var e = trace(d).length
console.log(e) // 5
 */

/* function first<T> (array:T[]): T {
  if (array.length > 0){
    return array[0]
  }
  else {
    throw 'array is empty'
  }
}

var array0 = [1,2,3]
var array1 = ['1','2','3']
var array2: number[] = []
var f0 = first(array0)  
console.log(f0) // 1
var f1 = first(array1)
console.log(f1) // 1
var f2 = first(array2) 
console.log(f2) // array is empty */


//泛型类
/* class List<T> {
  l: Array<T> //先定义1个泛型属性，泛型约束为数组
  constructor() { //构造函数中初始化数组,赋值为空数组
    this.l = []
  }
  add(obj:T){ //方法add中使用泛型约束，添加元素到数组中，push方法为添加
    this.l.push(obj)
  }
  remove():T | undefined {   //方法remove中使用泛型约束，删除数组中的元素，pop方法为删除，返回删除的元素
    return this.l.pop()
  }
  mid():T {  //方法mid中使用泛型约束，获取数组的中间元素，Math.floor方法为取整
    return this.l[Math.floor(this.l.length/2)]
  }
}
var list = new List<number>()
list.add(1)
list.add(2)
list.add(3) 
console.log(list.mid()) // 2
console.log(list.remove()) // 3
console.log(list.remove()) // 2
console.log(list.remove()) // 1
console.log(list.remove()) // undefined */

//泛型接口
/* interface Area<T> {
  area(o: T): number
}

class Circle implements Area<Circle>{
  radius: number
  constructor(radius: number) {
    this.radius = radius
  }
  area(o: Circle): number {
    return o.radius * o.radius * 3.14
  }
}

class Rectangle implements Area<Rectangle>{
  width: number
  height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
  area(o: Rectangle): number {
    return o.width * o.height
  }
}



var c = new Circle(2)
var r = new Rectangle(3, 4)
console.log(c.area(c)) // 12.566370614359172
console.log(r.area(r)) // 12 */

//泛型约束
// extends 必须是实现某个协议的类型，
//本例中，泛型T的类型，必须是TraceInterface这个接口的实现

/* interface TraceInterface {
  getDesc():string
}
function traceV2<T extends TraceInterface>(data:T) :T{
console.log('进行记录 - ',data.getDesc())
return data
}

class  CustomData implements TraceInterface {
getDesc(): string {
  return '自定义实例'
}
customMethod() {
  console.log('自定义方法') 
}
}

var cusIns =  new CustomData()

var cusObj:TraceInterface = {
getDesc:function():string {
  return '自定义对象'
}
}

traceV2(cusIns)  // 输出：进行记录 - 自定义实例
traceV2(cusIns).customMethod() // 输出：自定义方法
traceV2(cusObj)   // 输出：进行记录 - 自定义对象 */

//未解之谜
/* interface TraceInterface {
    getDesc():string
    customMethod():void
}
function traceV2(data: TraceInterface): TraceInterface {
  console.log('进行记录 - ',data.getDesc())
  console.log('进行记录 - ' + data.customMethod())
 return data
}

class  CustomData implements TraceInterface {
  getDesc(): string {
    return '自定义实例'
  }
  customMethod():void {
    console.log('自定义方法') 
  }
}

var cusIns =  new CustomData()

var cusObj:TraceInterface = {
  getDesc:function():string {
    return '自定义对象'
  },
  customMethod:function():void{
    console.log('自定义方法')  
  }
}

traceV2(cusIns).getDesc()
traceV2(cusIns).customMethod() */

// 迭代器
/* var iterator = [1, 2, 3, 4];
for (var value of iterator) {
  console.log(value);
} 

var iterator = [1, 2, 3, 4];
for (var key in iterator) {
  console.log(key);
} 

// 迭代一个对象
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
}; */

// 使用 for...in 遍历对象的属性
/* for (const key in person) {
  //if (person.hasOwnProperty(key)) { // 确保属性是对象自身的属性
    console.log(`${key}: ${person[key as keyof typeof person]}`);
 // }
}
 */

//装饰器函数1---不做构造函数的修改
//Function 是接口，类构造函数是 Function 的实例
//在这个例子中，classConstructorLog1 是一个装饰器函数，它接受一个构造函数作为参数。
//当调用这个装饰器时，TypeScript 会将目标类的构造函数作为参数传递给它。
/*  function classConstructorLog1(constructor: Function) {
   console.log('装饰器被调用', constructor)
}

@classConstructorLog1
class Person {
    constructor() {
      console.log('Person 的构造函数')
  }
}

var p = new Person() // 输出：装饰器被调用  [class Person]   Person 的构造函数
console.log(p) // 输出：Person {}, Person {} 是 JavaScript 对象的默认字符串表示形式，
//表示实例 p 是一个 Person 类的实例，而它的内部没有属性定义，所以花括号中间是空的。 */

//装饰器函数2---不做构造函数的修改
/* function LogClass(target1: Function) {
    console.log(`Class ${target1.name} was created.`);
    console.log(target1)
}

@LogClass
class Example {
    constructor(public name: string) {}
}

// 输出: Class Example was created.
const example = new Example("Test"); */

// 带返回值的类装饰器，返回值继承自原构造函数，可以为原构造函数增加新的功能。
//‘new(...args: any[]) => any’ 表示可以接受任意数量和类型的参数，并返回任何类型的实例。
/* function classConstructorLog2(constructor: new(...args: any[]) => any):any {
  console.log('装饰器被调用', constructor)
// 返回新的类,使用 ES6 的类扩展语法 class extends constructor
// 表示新类继承了传入的constructor原始类，
// 在新类中新增了属性，定义了一个属性 other，其值为字符串 'other'。新类将拥有这个属性。
  return class extends constructor {
    other =  'other'
}
}
@classConstructorLog2
class Person2 {
  data:string
   constructor() {
    this.data = 'data'
    console.log('Person2 的构造函数')
  }
}
//所以p2的值是：Person2 { data: 'data', other: 'other' }
var p2 = new Person2() // 输出：装饰器被调用 [class Person2]   Person2 的构造函数
console.log(p2) // 输出：Person2 { data: 'data', other: 'other' } */ 

//总结：类装饰器就是对类的构造函数的一个修改，类在实例化对象的时候，也就是类初始化对象值的时候，
//类装饰器就会被先调用，它可以配置改变构造函数的属性，也可以不改变，做一些装饰性的功能



//方法装饰器
//装饰器函数可以对方法的属性描述符对象进行修改。
//3个参数，分别为当前类原型对象、当前调用的方法名和当前方法属性的描述对象
// target：表示被装饰的类的原型或构造函数。对于类的方法装饰器而言，通常是类的原型。
// propertyKey：表示被装饰的方法名（在这里是 sayHello）。
// desc：PropertyDescriptor 对象，包含被装饰方法的信息，包括方法的值、可写性、可Enumerability枚举型、可配置性等。
//例如：如果要将类中的方法设置为不可修改，只需要将此描述对象的writable 设置为false即可。

/* function helloWorld(target:any,propertyKey:string,desc:PropertyDescriptor)
{
  console.log('hello world')
  console.log(target,propertyKey,desc)
}
class Person3 {
  @helloWorld
  sayHello() {
    console.log('hello')
  }
}
var p3 = new Person3() //实例化这个类，会执行方法装饰器
p3.sayHello() // 输出：hello  */


// 方法装饰器，修改方法的行为
/* function myMethodDecorator(target: any, propertyKey: string, desc: PropertyDescriptor) {
  desc.writable = false;//将方法设置为不可修改,
  //如果 const example = new Example();实例化 Example 类，
  //使用 example.sayHello = function() { console.log('New Method!'); };
  //则不会生效，会报错

  const originalMethod = desc.value;   //获取原方法
  desc.value = function (...args: any[]) {  //重写方法，添加额外功能
      console.log('Before calling sayHello');
      originalMethod.apply(this, args);  //调用原方法
      console.log('After calling sayHello');
      //所装饰的方法无法被修改，只能通过上述方式修改原方法的行为。
  }
}

class Example {
  @myMethodDecorator
  sayHello() {
      console.log('Hello!');
  }
}

const example = new Example();
example.sayHello(); */
// 输出：Before calling sayHello
//       Hello!
//       After calling sayHello

//总结：方法装饰器中的参数就是：方法的属性描述符对象，其中：PropertyDescriptor 这个接口
//定义了方法的：值、可写性、可Enumerability枚举型、可配置性，可通过查看这个接口的源码进行理解
// 这些方法的属性，都可以通过接口PropertyDescriptor的对象desc，进行修改
//包含方法装饰器的类，在实例化对象的时候，就会执行：方法装饰器函数
//可以通过方法装饰器函数，修改类中的方法的行为


// 访问器装饰器
/*  function logFunction(target:any,propertyKey:string,desc:PropertyDescriptor){
  console.log("logFunction")
  console.log(target,propertyKey,desc)
}
class Rect {
  private _width:number = 0 // 私有属性赋值，可以不需要构造函数
  @logFunction
  set width(width:number){ 
    this._width = width
  }
  get width():number{
    return this._width
  }
}

 var r = new Rect()  //会执行装饰器的内容，
 console.log(r.width) // 输出：0
r.width = 10
console.log(r.width) // 输出：10  */
//总结，跟方法装饰一样，只不过是装饰的类中的set和get这两个访问器函数


// 属性装饰器
/* function logProperty(target:any,propertyKey:string){ //两个参数，原型对象和属性名
  console.log("logProperty")
  console.log(target,propertyKey)
}
class Circle2 {
  @logProperty
  radius:number = 0
}
 */
//总结，同方法装饰器，只不过是装饰的类中的属性，单数值型装饰器只有两个参数

// 参数装饰器
/* function logParam(target:any,propertyKey:string,parameterIndex:number){ //三个参数，原型对象、属性名、参数索引
  console.log("logParam")
  console.log(target,propertyKey,parameterIndex)
}
class Person4 {
  log(@logParam name:string,@logParam age:number){ //参数装饰器，参数名和类型
    console.log(name,age)
  }
}
var p4 = new Person4() 
p4.log('John',30) 
 */

//总结：同方法装饰器，也是三个参数，其中两个参数一样，另外的一个不同
//且装饰器是写在类中方法的每个参数的前面，用空格隔开

// 装饰器组合
/* function propertyFunction(target:any,propertyKey:string) {
  console.log("propertyFunction")
  console.log(target,propertyKey)
}

function propertyFunction2(target:any,propertyKey:string) {
  console.log("propertyFunction2")
  console.log(target,propertyKey)
}

class Rect {
  @propertyFunction2   //后调用
  @propertyFunction   //先调用
  name = 'Rect'
} */


// 装饰器工厂
// 装饰器工厂是一个函数，用于创建和返回装饰器。在 TypeScript 中，装饰器工厂能够接收参数，
//并根据这些参数动态生成装饰器的功能。
/* function writable(canWrite:boolean):any {
  return function(target:any,propertyKey:string,desc:PropertyDescriptor){
    console.log(`将${propertyKey}设置为${canWrite}`)
    desc.writable = canWrite
   }
}

class Person5 {
  @writable(true)
  SayHi() {
    console.log('Hi')
  }
  @writable(false)
  SayBye() {
    console.log('Bye')
  }
}

var p5 = new Person5() //类在实例化的时候，已经执行了装饰器，将SayHi设置为true，SayBye设置为false
p5.SayHi() 
p5.SayHi = function() {console.log('已经修改原方法')} //替换为新方法
//p5.SayBye = function() {} //此处会报错，已经设置了不可修改方法，不能再修改
p5.SayHi()  //此处调用函数执行，已经时新的方法了，新方法为空，所以没有输出内容
p5.SayBye() 
 */
// 总结: 就是能返回装饰器函数的装饰器，这个装饰器能传入参数

// 这是典型的类中的方法在调用的过程中被改写方法行为的例子

/* class Hi {
   print1() {
    console.log('print1')
  }
}

var hi = new Hi()
hi.print1 = function() {  
  console.log('new print1') 
}// 输出：print1
console.log(hi.print1())  */
// 装饰器可以实现类似的功能，装饰器可以禁止修改方法，修改方法的行为，修改属性的行为，修改类的行为等等
// 装饰器的组合，可以实现更复杂的功能，比如：实现一个日志系统，可以记录类的所有方法的调用情况，
// 装饰器可以实现更加灵活的功能，可以实现一些更加复杂的功能，比如：实现一个缓存系统，可以缓存类的所有方法的返回值，
// 装饰器可以实现更加强大的功能，比如：实现一个权限系统，可以控制类的访问权限

//命名空间
// namespace MathTool {
//   export function add(a:number,b:number):number {
//     return a + b
//   }
//   export function sub(a:number,b:number):number {
//     return a - b
//   }
//   var PI = 3.1415926
//   export function circleArea(radius:number):number {
//     return PI * radius * radius
//   }
// }
