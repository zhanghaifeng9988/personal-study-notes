# 原始数据类型
| 原始数据类型 | JavaScript  | TypeScript |
|--------------|-------------|------------|
| 数值         | number      | number     |
| 字符串       | string      | string     |
| 布尔值       | boolean     | boolean    |
| 大整数       | bigInt      | bigint     |
| 符号         | symbol      | symbol     |在对象中创建唯一的属性键
| 不存在       | null        | null       |
| 未定义       | undefined   | undefined  |

# 注释
ctrl + /   //单行注释，选择多行，则为多行注释
alt + shift + a   //块注释  vscode中的方法。

## 举几个例子：
// 字符串
const str: string = 'Hello World'
// 数值
const num: number = 1
// 布尔值
const bool: boolean = true
不过在实际的编程过程中，原始数据类型的类型定义是可以省略的，因为 TypeScript 会根据声明变量时赋值的类型，自动推导变量类型，也就是可以跟平时写 JavaScript 一样：


// 这样也不会报错，因为 TS 会推导它们的类型
const str = 'Hello World'
const num = 1
const bool = true

// 字符串数组
const strs: string[] = ['Hello World', 'Hi World']

// 数值数组
const nums: number[] = [1, 2, 3]

// 布尔值数组
const bools: boolean[] = [true, true, false]

// 这种有初始项目的数组， TS 也会推导它们的类型
const strs = ['Hello World', 'Hi World']
const nums = [1, 2, 3]
const bools = [true, true, false]

//但是！如果一开始是 [] ，那么就必须显式的指定数组类型
// 这个时候会认为是 any[] 或者 never[] 类型
const nums = []
// 这个时候再 push 一个 number 数据进去，也不会使其成为 number[]
nums.push(1)
这样的写法是不推荐的，因为这样会让 TS 无法推导类型，容易导致运行时错误

// 元组
元组可以将一组**不同数据类型的数组**，组合到一个数组中
元组应该被理解为**不可任意增加元素的集合。**
元组的特性是它的长度和元素类型是固定的，意味着您必须按照定义的结构来初始化元组，并且它只能包含特定类型的元素。
var tuple: [string,number] = ["XiaoMing",25]
console.log('name is ' + tuple[0] + ',' + 'age is ' + tuple[1]);

# ts的命名规范
1. 变量名：使用小驼峰命名法，第一个单词的首字母小写，其他单词的首字母大写。
2. 对象名/接口名：使用大驼峰命名法，每个单词的首字母大写。
3. 类名：使用大驼峰命名法，每个单词的首字母大写。
4. 函数名：使用小驼峰命名法，第一个单词的首字母小写，其他单词的首字母大写。
5. 常量名：使用全大写命名法，多个单词用下划线连接。 
6. 枚举：大驼峰命名法，每个单词的首字母大写。

# 枚举类型
enum Result {
    Success,
    Fail,
    Error
}
// 枚举类型可以用数字索引，也可以用枚举值来索引
// 默认情况下，第一个枚举值是 0，后续的枚举值是前一个枚举值加 1
// 可以手动设置枚举值，但不推荐
enum Result {
    Success = 1,
    Fail = 2,
    Error = 3
}

## 字符串枚举
enum Direction {
    Up='Up'  ,
    Down='Down',
    Left='Left',
    Right='Right'
}
var dir:Direction = Direction.Right
console.log(dir) // Right

# Any类型
既可以存储某个类型的数据，又可以存储其他类型的数据。
甚至需要在运行时，动态的改变变量的值的类型。
var some:any = 1
some = 'hello'
any类型，间接的告诉编译器不要检查当前变量的类型
也就是说，使用any类型的变量，获取任何属性和调用任何方法都不会产生编译异常。

当我们声明一个变量，但是并未指定类型时，也可以认为其类型为any,实际是undefined类型

**尽量不要使用any，any更多会应用在元素类型不定的数组上。**

# Never类型
通常用于总是会抛出异常的函数，或永远没有中介的函数的返回值。
语义上表示：永远不会存在的值的类型。
因此逻辑上虽然可以声明一个never类型的变量，但是其无法赋任何值。


# 对象（接口）类型
对象的类型定义通常采用 Upper Camel Case 大驼峰命名法，也就是每个单词的首字母大写，例如 UserItem 、 GameDetail ，这是为了跟普通变量进行区分（变量通常使用 Lower Camel Case 小驼峰写法，也就是第一个单词的首字母小写，其他首字母大写，例如 userItem ）。

**接口主要用于定义对象的形状（Shape），即对象应该具有的属性和方法。接口可以用于描述对象、函数参数、返回值等。接口本身不包含实现，它只定义了结构。**

## 对象的类型定义有两个语法支持： type 和 interface 。
1. 先看看 type 的写法：
type UserItem = {
  // ...
}
2. 再看看 interface 的写法：
interface UserItem {
  // ...
}
两者的区别是：
- type 定义的类型只能用于类型别名，不能用于接口实现。
- interface 定义的类型可以用于接口实现，也可以用于类型别名。

**优先选用interface**

1. 在实际的业务中，有可能会出现一些属性并不是必须的，以将其设置为可选属性，通过添加 ? 来定义。
interface UserItem {
  name: string
  // 这个属性变成了可选
  age?: number
}

2. 调用自身接口的属性
如果一些属性的结构跟本身一致，也可以直接引用，比如下面例子里的 friendList 属性，用户的好友列表，它就可以继续使用 UserItem 这个接口作为数组的类型：

interface UserItem {
  name: string
  age: number
  enjoyFoods: string[]
  // 这个属性引用了本身的类型
  friendList: UserItem[]
}

const petter: UserItem = {  //定义个对象，来实现接口
  name: 'Petter', 
  age: 18,
  enjoyFoods: ['rice', 'noodle', 'pizza'],
  friendList: [
    {
      name: 'Marry',
      age: 16,
      enjoyFoods: ['pizza', 'ice cream'],
      friendList: [],
    },
    {
      name: 'Tom',
      age: 20,
      enjoyFoods: ['chicken', 'cake'],
      friendList: [],
    }
  ],
}

# 接口的继承
1. 接口还可以继承，比如要对用户设置管理员，管理员信息也是一个对象，但要比普通用户多一个权限级别的属性，那么就可以使用继承，它通过 extends 来实现：

interface UserItem {
  name: string
  age: number
  enjoyFoods: string[]
  friendList: UserItem[]
}

// 这里继承了 UserItem 的所有属性类型，**并追加了一个权限等级属性**
interface Admin extends UserItem {
  permissionLevel: number
}

const admin: Admin = {
  name: 'Petter',
  age: 18,
  enjoyFoods: ['rice', 'noodle', 'pizza'],
  friendList: [
    {
      name: 'Marry',
      age: 16,
      enjoyFoods: ['pizza', 'ice cream'],
      friendList: [],
    },
    {
      name: 'Tom',
      age: 20,
      enjoyFoods: ['chicken', 'cake'],
      friendList: [],
    }
  ],
  permissionLevel: 1,
}

2. 如果觉得这个 Admin 类型不需要记录这么多属性，也可以在继承的过程中舍弃某些属性，通过 Omit 帮助类型来实现，Omit 的类型如下：
type Omit<T, K extends string | number | symbol>
    其中 T 代表已有的一个对象类型， K 代表要删除的属性名，如果只有一个属性就直接是一个字符串，如果有多个属性，用 | 来分隔开，下面的例子就是删除了两个不需要的属性：

interface UserItem {
  name: string
  age: number
  enjoyFoods: string[]
  friendList?: UserItem[]
}

// 这里在继承 UserItem 类型的时候，删除了两个多余的属性
interface Admin extends Omit<UserItem, 'enjoyFoods' | 'friendList'> {
  permissionLevel: number
}

// 现在的 admin 就非常精简了
const admin: Admin = {
  name: 'Petter',
  age: 18,
  permissionLevel: 1,
}

# 类
类是 TypeScript 中用于创建对象的蓝图（Blueprint）。类可以包含属性、方法和构造函数，并且可以用来创建具有相同结构的对象实例。类还可以继承其他类，从而实现代码的重用和扩展。
// 定义一个类
class User {
  // constructor 上的数据需要先这样定好类型
  name: string

  // 入参也要定义类型
  constructor(userName: string) {
    this.name = userName
  }

  getName() {
    console.log(this.name)
  }
}

// 通过 new 这个类得到的变量，它的类型就是这个类
const petter: User = new User('Petter')
petter.getName() // Petter

## 类与类之间可以继承：
// 这是一个基础类
class UserBase {
  name: string
  constructor(userName: string) {
    this.name = userName
  }
}

// 这是另外一个类，继承自基础类
class User extends UserBase {
  getName() {
    console.log(this.name)
  }
}

// 这个变量拥有上面两个类的所有属性和方法
const petter: User = new User('Petter')
petter.getName()

## **接口也可以继承类**：
// 这是一个类
class UserBase {
  name: string
  constructor(userName: string) {
    this.name = userName
  }
}

// 这是一个接口，可以继承自类
interface User extends UserBase {
  age: number
}

// 这样这个变量就必须同时存在两个属性
const petter: User = {
  name: 'Petter',
  age: 18,
}

### 如果类上面本身有**方法存在**，**接口在继承该类的时候也要相应的实现**，当然也可以借助在 对象（接口） 提到的 Omit 帮助类型来去掉这些方法。
class UserBase {
  name: string
  constructor(userName: string) {
    this.name = userName
  }
  // 这是一个方法
  getName() {
    console.log(this.name)
  }
}

// 接口继承类的时候也可以去掉类上面的方法
interface User extends Omit<UserBase, 'getName'> {
  age: number
}

// 最终只保留数据属性，不带有方法
const petter: User = {
  name: 'Petter',
  age: 18,
}

# 联合类型
type Omit<T, K extends string | number | symbol> //从类型T中，排除，指定的属性K
1. T 这是一个泛型参数，表示一个对象类型。您可以将它视为您希望操作的基础类型。
2. K 是另外一个泛型参数，它表示要排除的属性名。这个泛型的约束确保 K 只能是 string、number 或 symbol 类型，以便排除指定的属性。
3.  string | number | symbol ，这其实是 TypeScript 的一个联合类型。
当一个变量可能出现多种类型的值的时候，可以使用联合类型来定义它，类型之间用 | 符号分隔。
举例：
// 可以在 demo 里运行这段代码
function counter(count: number | string) {
  console.log(`The current count is: ${count}.`)
}

// 不论传数值还是字符串，都可以达到的目的
counter(1)  // The current count is: 1.
counter('2')  // The current count is: 2.

# 交叉类型
交叉类型表示：当前变量同时满足多个类型。
示例：test1中，交叉类型

# 函数
// 注意：这是 TypeScript 代码

// 写法一：**函数声明--具名函数**
function sum1(x: number, y: number): number {
  return x + y
}

// 写法二：**函数表达式--具名函数**
const sum2 = function(x: number, y: number): number {
  return x + y
}

// 写法三：**箭头函数--匿名函数**
const sum3 = (x: number, y: number): number => x + y

// 写法四：**对象上的方法**
const obj = {
  sum4(x: number, y: number): number {
    return x + y
  }
}
这种写法，key是函数名sum4，value是整个函数

## 函数的可选参数
实际业务中会遇到有一些函数入参是可选，可以用和 对象（接口） 一样，用 ? 来定义：
**可选参数必须定义在必填参数后面**。

// 注意 isDouble 这个入参后面有个 ? 号，表示可选
function sum(x: number, y: number, isDouble?: boolean): number {
  return isDouble ? (x + y) * 2 : x + y
}

// 这样传参都不会报错，因为第三个参数是可选的
sum(1, 2) // 3
sum(1, 2, true) // 6

**可选参数如果没有被赋值，则其默认值为undefined.**

## 函数的默认参数
实际业务中，有时候会遇到有些入参是可以省略的，可以用默认参数来定义：
默认参数必须定义在必填参数后面。

// 注意这里的 age 入参后面有个 = 号，表示默认值为 18  
function greet(name: string, age: number = 18): string {
  return `Hi, ${name}, you are ${age} years old.`
}
const result = greet('John')
  console.log(result) // Hi, John, you are 18 years old.

**默认参数如果没有被赋值，则其默认值为undefined.**

// 这样传参都不会报错，因为第二个参数是可选的
greet('Petter') // Hi, Petter, you are 18 years old.
greet('Marry', 20) // Hi, Marry, you are 20 years old.

## 无返回值的函数
除了有返回值的函数，更多时候是不带返回值的，例如下面这个例子，这种函数用 void 来定义它的返回，也就是空。

// 注意这里的返回值类型
function sayHi(name: string): void {
  console.log(`Hi, ${name}!`)
}

sayHi('Petter') // Hi, Petter!

***需要注意的是***， void 和 null 、 undefined 不可以混用，如果的函数返回值类型是 null ，那么是真的需要 return 一个 null 值：

// 只有返回 null 值才能定义返回类型为 null
function sayHi(name: string): null {
  console.log(`Hi, ${name}!`)
  return null
}

## 有时候要判断参数是否合法，
不符合要求时需要提前终止执行（比如在做一些表单校验的时候），这种情况下也可以用 void ：
function sayHi(name: string): void {
  // 这里判断参数不符合要求则提前终止运行，但它没有返回值
  if (!name) return
  // 否则正常运行
  console.log(`Hi, ${name}!`)
}

#  Promise 
Promise 是一个**泛型接口**，它用于**管理异步操作的执行和结果**，提供了更清晰的控制流和错误处理机制。通过它的实例方法，开发者能够以链式调用的方式处理异步操作，提高代码的可读性和维护性。

## promise的源码
interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
     then<TResult1 = T, TResult2 = never>(
    onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1>,
    onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>
  ): Promise<TResult1 | TResult2>;

  catch<TResult = never>(
    onrejected?: (reason: any) => TResult | PromiseLike<TResult>
  ): Promise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

1. interface Promise<T> 表示 Promise 是一个泛型接口，T 代表 Promise 将要返回的值的类型。
这意味着你可以创建一个 Promise，它最终会解析为某个具体类型的值，比如 Promise<string> 或 Promise<number>。
2. finally 方法
- onfinally：这是一个可选参数，代表当 Promise 被解决（fulfilled）或拒绝（rejected）时要调用的回调函数。它的类型是一个可能返回 void 的函数，也可以是 undefined 或 null（即可以不传递这个函数）。
- finally 方法允许你在 Promise 被解决或拒绝时执行某个操作。无论 Promise 的最终结果是成功还是失败，这个回调都会被调用，适合用于清理操作或不管结果如何的后续处理。
- finally 方法返回一个新的 Promise<T>，这个新的 Promise 将保持与原 Promise 相同的状态（成功或失败），并且可以链式调用。

### 静态方法：
Promise.all(iterable): 接受一个可迭代对象（如数组），返回一个 Promise，该 Promise 只在所有给定的 Promise 都成功时才会成功。
Promise.race(iterable): 接受一个可迭代对象，返回一个 Promise，该 Promise 在第一个成功或失败的 Promise 解决时即解决。
### 实例方法：
then(onFulfilled, onRejected): 为 Promise 添加成功和失败的处理函数，并返回一个新的 Promise。
catch(onRejected): 为 Promise 添加失败的处理函数，并返回一个新的 Promise。
finally(onFinally): 为 Promise 添加无论成功还是失败都会执行的处理函数，并返回一个新的 Promise。

### 用途示例
模拟异步数据获取的例子。在实际开发中，这种模式常用于处理从服务器获取数据的情景。

function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("数据成功获取");
        }, 2000);
    });
}
fetchData 函数返回一个 Promise<string>，表示它最终会解析为一个字符串。在这个例子中，onfinally 和 finally 是与 Promise 对象相关的概念，但实际的代码中没有直接体现 finally 方法的使用。

1. 当 fetchData 被调用时，
当 setTimeout 的时间到达后，会调用 resolve("数据成功获取")，这将把 Promise 的状态从 pending 变为 fulfilled。这个时刻是 Promise 被成功解析并返回一个字符串。
2. 关于 onfinally 和 finally：
onfinally 是指在 Promise 被解决或拒绝后需要执行的回调函数，它是在 finally 方法中传递的。
finally 是一个方法，在 Promise 被解决或拒绝后确保该回调被调用。这个回调无论 Promise 的结果如何都会执行。

fetchData()
    .then(response => {
        console.log(response); // 输出: 数据成功获取
    })
    .catch(error => {
        console.error(error); 
    })
     .finally(() => {
        console.log('无论成功还是失败，最终都会执行这段代码');
    });

#### 功能和用途
1. 模拟异步数据获取：
fetchData 函数通过 setTimeout 模拟了一个异步操作，代表从服务器请求数据的过程。实际开发中，这通常用于 Ajax 请求或调用 REST API。
2. 处理异步结果：
像 fetchData 这样的函数返回一个 Promise，可以使用 then、catch 和 finally 方法来处理响应、错误和清理操作。这个模式使得代码更清晰和易于维护。
3. 用户界面更新：
在 web 应用中，当用户触发某个操作（如点击按钮）时，可以调用 fetchData，然后在数据成功获取后更新界面上的某些部分。例如，可以在获取数据后更新列表。
4. 错误处理：
在实际应用中，你可以在 catch 块中处理任何可能的错误，例如由于网络问题导致的请求失败，从而提高用户体验。
5. 结合其他工具：
可以结合使用其他库（如 Axios、Fetch API）来创建请求，以实现用户数据的真实获取，而不仅仅是在本地模拟。

## 异步函数的返回值
对于异步函数，需要用 Promise<T> 类型来定义它的返回值，这里的 T 是泛型，取决于该函数最终返回一个什么样的值（ async / await 也适用这个类型）。

例如这个例子，这是一个异步函数，会 resolve 一个字符串，所以它的返回类型是 Promise<string> （假如没有 resolve 数据，那么就是 Promise<void> ）。

// 注意这里的返回值类型
function queryData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World')
    }, 3000)
  })
}

queryData().then((data) => console.log(data)) //输出 Hello World


## 函数的类型 -可以理解为函数的签名，就是函数的输入参数类型以及返回值类型。
// 这里的 sum ，隐式的定义了它的类型，这是匿名函数的函数表达式写法
const sum = (x: number, y: number): number => x + y
// 为sum指定类型，这是显示指定，看起来比较复杂
const sum: (x: number, y: number) => number = (x: number, y: number): number =>x + y
注意第一个箭头是 TypeScript 的，第二个箭头是 JavaScript ES6 的。
实际上上面这句代码是分成了三部分：
const sum: (x: number, y: number) => number 是这个函数的名称和类型
= (x: number, y: number) 这里是指明了函数的入参和类型
: number => x + y 这里是函数的返回值和类型

TypeScript 的函数类型是以 () => void 这样的形式来写的：左侧圆括号是函数的入参类型，如果没有参数，就只有一个圆括号，如果有参数，就按照参数的类型写进去；右侧则是函数的返回值。
事实上由于 TypeScript 会推导函数类型，**所以很少会显式的去写出来**，
**除非在对象上定义方法**：举例

// 对象定义(接口方式),**key是方法名sum，value部分是方法的签名**
**写法1**
interface Obj {
  // 上面的方法就需要显式的定义出来
  sum: (x: number, y: number) => number
}

**写法2**
interface Obj {
  // 显式定义方法
  sum(x: number, y: number): number; 
}

// **实现接口的对象**,第1种写法
const obj: Obj = {
  sum(x: number, y: number): number {
    return x + y
  }
}

// **实现接口的对象**,第2种写法
const obj: Obj = {
  sum: (x: number, y: number): number =>{
    return x + y
  }
}

// 对象上直接定义1个方法，**key是方法名sum4，value部分是方法的签名**
const obj = {
  sum4(x: number, y: number): number {
    return x + y
  }
}

// **实现接口的函数** 函数表达式方式
const sum: SumFunction = (x: number, y: number): number => {
    return x + y;
};
## 对于接口中定义的方法（就是定义方法签名）和实现接口的对象中的方法定义的一些写法的理解和总结：
1. 接口中的方法定义：
当接口中定义方法时，若方法名、参数和返回值都有，通常是以 方法名：(参数)=>返回值 的形式出现。如果参数为空，只需使用一对括号 ()。

2. 常规对象实现接口方法：
在实现接口的常规对象中，方法的实现写法是 方法名(参数): 返回值 { 方法体 }。这表示使用函数关键字定义函数。
若使用箭头函数，可以写成：方法名: (参数): 返回值 => { 方法体 }，这是另一种匿名函数的书写方式。


## 函数重载
**非重载代码**：
/**
 * 根据提供的名称返回欢迎信息。
 * 
 * @param name  -可以是字符串或字符串数组。
 * @returns 返回欢迎信息，如果是数组则返回多条信息。
 */
function greet(name: string | string[]): string | string[] {
  if (Array.isArray(name)) {
    return name.map((n) => `Welcome, ${n}!`)
  }
  return `Welcome, ${name}!`
}

**这一次用了函数重载**
函数重载是指在同一作用域内，允许定义多个同名但参数类型或数量不同的函数。

function greet(name: string): string  // TS 类型
function greet(name: string[]): string[]  // TS 类型
function greet(name: string | string[]) {
  if (Array.isArray(name)) {
    return name.map((n) => `Welcome array, ${n}!`)
  }
  return `Welcome string, ${name}!`
}

const result = greet('John')
console.log(result) // Welcome string, John!
const result1 = greet(['John', 'Jane'])
console.log(result1) // [ 'Welcome array, John!', 'Welcome array, Jane!' ]

// 单个问候语，此时只有一个类型 string
const greeting = greet('Petter')
console.log(greeting) // Welcome, Petter!

// 多个问候语，此时只有一个类型 string[]
const greetings = greet(['Petter', 'Tom', 'Jimmy'])
console.log(greetings)
// [ 'Welcome, Petter!', 'Welcome, Tom!', 'Welcome, Jimmy!' ]

第 1 行是函数的 TS 类型，告知 TypeScript ，当入参为 string 类型时，返回值也是 string ;

第 2 行也是函数的 TS 类型，告知 TypeScript ，当入参为 string[] 类型时，返回值也是 string[] ;

第 3 行开始才是真正的函数体，这里的函数入参需要把可能涉及到的类型都写出来，用以匹配前两行的类型，并且这种情况下，函数的返回值类型可以省略，因为在第 1 、 2 行里已经定义过返回类型了。

## 任意值
// 这里的入参显式指定了 any
function getFirstWord(msg: any) {
  // 这里使用了 String 来避免程序报错
  console.log(String(msg).split(' ')[0])
}

getFirstWord('Hello World')

getFirstWord(123)

使用 any 的目的是在开发的过程中，可以不必在无法确认类型的地方消耗太多时间，不代表不需要注意代码的健壮性。
一旦使用了 any ，代码里的逻辑请务必考虑多种情况进行判断或者处理兼容。

## **特别注意**
ts文件中，如果需要引用开发依赖的包，需要采用这种方式：
const md5=require('md5')
就是采用cjs中导入模块的方式引入依赖包，这样可以让ts文件中可以正常使用require引入的包。

# 使用接口来定义对象、方法、定义可索引类型、约束类（实现接口的类）
对于一个接口而言：接口其实就是个对象，对象就是个类的实例
接口不仅可以定义方法的类型（方法的签名），
还是定义可迭代对象：数组，对象等类型中的索引类型
举例：见test1.ts中的  接口相关  内容

## 类的继承使用**extends** ， 接口的实现，使用**implements**

# 类型推论
// 相当于 msg: string
let msg = 'Hello World'

// 所以要赋值为 number 类型时会报错
msg = 3 // Type 'number' is not assignable to type 'string'

# 类型断言
const greeting = greet('Petter') as string
这里的 值 as 类型 就是 TypeScript 类型断言的语法，它还有另外一个语法是 <类型>值 。
当一个变量应用了 联合类型 时，在某些时候如果不显式的指明其中的一种类型，可能会导致后续的代码运行报错。
但是，请不要滥用类型断言，只在能够确保代码正确的情况下去使用它

**示例见test1.ts 中的类型区分和断言相关内容**
个人理解，类型断言，尽量使用typeof  和 instanceof 进行断言
#  字面量类型
与枚举非常相似，允许我们指定一些固定的值来定义类型
举例：见test1中的，字面量
## 字符串字面量
type Align = 'centerX' | 'centerY'
## 数值字面量
type Size = 44 | 68   

# 对象字面量
对象字面量是指通过对象字面量语法来创建对象，对象字面量语法允许我们在创建对象时，直接指定对象的属性和值。
- 举例：**对象字面量语法创建对象**
const person = {
    name: 'Alice',
    age: 30,
    isStudent: false
};


# 类型别名
关键字，用来定义类型别名；
  - 由于联合类型和交叉类型的存在，极易产生很长的类型定义，
这会使代码变得很长，和难度。
  - type语法可以将一个类型映射成另一个名字，提高代码的简洁度和可读性。

# 泛型
泛型函数-举例，test1.ts中，泛型函数
接口和类中，都可以使用泛型：test1.ts中，泛型类，泛型函数

# 迭代器
迭代通常指的是遍历集合中的元素，TypeScript 提供了两种迭代器：
for-in 结构：for (let key in obj) { } 把对象的键值遍历出来；
for-of 结构：for (let value of arr) { } 把数组的元素遍历出来；
举例：见test1.ts中的  迭代器相关代码

# 装饰器
可以是用装饰器，为：类、方法、属性等添加额外的功能；
ts的装饰器，支持：类装饰器、方法装饰器、属性装饰器、参数装饰器、访问器装饰器等；
装饰器本身是一个函数；
## 类装饰器会影响类的构造函数；
如果使用装饰器函数对类进行装饰，则类在定义后会首先执行装饰器函数，然后才会执行类的构造函数；
举例：见VUE3/typerscript/test1.ts中的  装饰器相关代码
function classConstructorLog(constructor: Function) {
   console.log('装饰器被调用', constructor)
}

@classConstructorLog
class Person {
    constructor() {
      console.log('Person 的构造函数')
  }
}

var p = new Person()

- 从语法来看，任意函数前加@符号，就表示这是一个装饰器函数。
- 对于类装饰器函数，其中参数即为要调用的构造函数。
- 装饰器也提供返回值，返回值需要继承自员构造函数，可以用来为原构造函数增加新的功能。

## 方法装饰器
  使用装饰器修饰的方法被定义后，会先调用装饰器函数，装饰器函数可以对方法的属性描述符对象
进行修改。
  作为方法装饰器函数，其需要3个参数，分别为当前类原型对象、当前调用的方法名和
当前方法属性的描述对象。
装饰器函数可以对方法的属性描述符对象进行修改。
//3个参数，分别为当前类原型对象、当前调用的方法名和当前方法属性的描述对象
// target：表示被装饰的类的原型或构造函数。对于类的方法装饰器而言，通常是类的原型。
// propertyKey：表示被装饰的方法名（在这里是 sayHello）。
// desc：PropertyDescriptor 对象，包含被装饰方法的信息，包括方法的值、可写性、可Enumerability枚举型、可配置性等。
- 举例：见test1.ts中的  装饰器相关代码
例如：如果要将类中的方法设置为不可修改，只需要将此描述对象的writable 设置为false即可。
## 访问器装饰器
访问器装饰器的用法与方法装饰器类似
- 举例：见test1.ts中的  装饰器相关代码
## 属性装饰器
类中定义的属性，可以使用装饰器来修改属性的描述符对象。
调用的时机也是属性在定义后被调用，装饰器函数可以对属性的属性描述符对象进行修改。
其中有两个参数，即原型对象和属性名。
- 举例：见test1.ts中的  装饰器相关代码
## 参数装饰器
参数装饰器的用法与方法装饰器类似，只不过其可以对函数参数进行修改。
三个参数，分别为当前函数原型对象、当前调用的方法名、当前调用方法的参数。
- 举例：见test1.ts中的  装饰器相关代码
## 装饰器组合
对于同一个被修饰的目标，都支持组合多个装饰器从而附加多种功能。
- 举例：见test1.ts中的  装饰器相关代码
## 装饰器工厂
装饰器工厂函数返回一个作为装饰器的函数。
我的理解就是：制造装饰器函数的函数。
- 举例：见test1.ts中的  装饰器相关代码  

# 命名空间
ts使用命名空间和模块相关功能来实现模块化开发
1. 命名空间 
- 命名空间是 TypeScript 的一个重要概念，它允许我们将代码组织成逻辑上的模块。
- 命名空间可以帮助我们避免命名冲突，同时也能让代码更加模块化。
- 命名空间可以包含类、接口、变量、函数等。
- 可以隐藏内部实现细节，让外部代码只关注于公共接口。
- 提供更加简单的接口共模块外部使用
- 命名空间内部的数据 默认都是私有的，如果暴露到外部使用，则需要使用 export 关键字。
- 在外部使用时，使用命名空间加点号来访问内部的属性和方法。
- 同一个命名文件，支持在不同的文件中重复定义，在使用时它们就像定义在同一个文件中一样。
- 如果在一个文件中，大量使用同一个命名空间中的某一个数据结构，每次调用时都需要使用命名空间名字作为前缀，会导致代码冗长
import Circle = Math.Circle; 这种写法，import 用来定义一个别名，Circle 就是 Math.Circle 的别名。
**注意这里import不是导入模块，而是用来定义一个别名。**
- 举例：见test1.ts中的  命名空间相关代码

# 模块
模块是 TypeScript 的一个重要概念，它允许我们将代码组织成逻辑上的文件。

# 如何把一个 TS 文件编译成 JS 文件
在 package.json 里增加一个 build script
"build": "tsc src/ts/index.ts --skipLibCheck --outDir dist",
运行 npm run build 的时候，就会把 src/ts/index.ts 这个 TS 文件编译，并输出到项目下与 src 文件夹同级的 dist 目录下。
**注意**：其中 tsc 是 TypeScript 用来编译文件的命令， --outDir 是它的一个选项，用来指定输出目录。这种将执行命令写入配置文件的方式，输入的ts文件的路径是相对路径，如果指定，则新目录位于相对路径的根目录，例如上例中，dist目录就位于src所在的目录中。如果不指定，则默认生成目录dist到源文件所在的目录下面。

**编译的一些个人体会**：
npx 该命令能够进入到：Entering npm script environment at location
在该环境中，目前测试通过的是：
- 可以使用ts-node  *.ts 来执行ts文件，并且可以直接运行ts文件，编译后生成的js文件和ts文件在一个目录中；
- 可以使用tsc  *.ts --outDir dist 来编译ts文件，--outDir dist可以指定输出目录。**注意**在使用npx命令时，当前命令进入的目录下，执行tsc命令时，要保证文件的路径：要么是绝对路径，要么时相对路径，相对路径就是当前运行npx所在的目录。所以，如果是相对路径，则编译后生成的dist目录，和源文件在同一个目录中。如果指定目录位置，例如：
tsc index.ts --skipLibCheck --outDir ../../dist 则编译后生成的dist目录，位于源文件index.ts所在的上两级目录中。
- 可以使用tsc  *.ts --skipLibCheck --outDir dist 来编译ts文件，并且可以跳过检查依赖库。

- 一个ts文件可以调用另一个ts文件中的函数，需要在被调用的ts文件中使用export关键字导出。
举例：
function greet(name: string): string
function greet(name: string[]): string[]
function greet(name: string | string[]) {
  if (Array.isArray(name)) {
    return name.map((n) => `Welcome, ${n}!`)
  }
  return `Welcome, ${name}!`
}
export default greet

然后在调用的ts文件中使用import关键字导入：
import greet from './greet'

如果编译调用的ts文件，那么调用的ts文件和被调用的ts文件都会分别被编译为js文件。

- 可以使用tsc *.ts --skipLibCheck --outDir dist --target es6  编译成不同的js版本。
--target 选项的作用是控制编译后的 JavaScript 版本，可选的值目前有： es3 ， es5 ， es6 ， es2015 ， es2016 ， es2017 ， es2018 ， es2019 ， es2020 ， es2021 ， es2022 ， esnext ，分别对应不同的 JS 规范（所以未来的可选值会根据 JS 规范一起增加）。

之前编译出来的 JavaScript 是 CommonJS 规范 ，本次配置的是 es6 ，这是支持 ES Module 规范 的版本。

**注意**
--target 的配置如果是es6，因为涉及到 ESM 模块，所以不能直接在 node 运行它了，可以手动改一下扩展名，改成 .mjs
 index 文件里 import 的 greet 文件名也要改，然后就可以使用node命令去运行mjs文件了。

# tsconfig **注意**根据学习经验，这个文档最好在使用ts语言之前，就先创立一个
1. 在命令行输入 tsc --init ，这是 TypeScript 提供的初始化功能，会生成一个默认的 tsconfig.json 文件。
2. 正常工作中，都是使用 tsconfig.json 来管理 TypeScript 的配置的。

# 元数据
在 NestJS 中，类、方法和参数上的元数据（Metadata）是一种用于在运行时附加和读取额外信息的机制。元数据可以是任何类型的数据，如字符串、数字、布尔值、对象等。通过元数据，你可以在不修改类、方法或参数本身的情况下，为其添加额外的配置或行为信息。这些信息可以在运行时**被其他部分（如守卫、拦截器、管道等）读取和使用**，从而实现灵活的扩展和定制。
## 元数据的用途
**1. 守卫（Guards）：**
守卫可以读取路由或控制器上的元数据，以决定是否允许请求通过。例如，你可以使用元数据来标记某些路由为“公开”（不需要身份验证），而其他路由需要身份验证。
示例：@Public() 装饰器用于标记路由为公开路由，守卫通过读取这个元数据来决定是否进行身份验证。
**2. 拦截器（Interceptors）：**
拦截器可以读取方法或参数上的元数据，以决定如何处理请求或响应。例如，你可以使用元数据来指定某个方法的响应应该被缓存。
示例：@Cacheable() 装饰器用于标记方法的响应应该被缓存，拦截器通过读取这个元数据来决定是否缓存响应。
**3. 管道（Pipes）：**
管道可以读取参数上的元数据，以决定如何验证或转换请求参数。例如，你可以使用元数据来指定某个参数的验证规则。
示例：@Validate() 装饰器用于指定参数的验证规则，管道通过读取这个元数据来验证参数。
自定义行为：
你可以使用元数据来实现自定义行为，例如记录日志、设置默认值、执行预处理操作等。
示例：@Log() 装饰器用于记录方法的调用，拦截器通过读取这个元数据来决定是否记录日志。


