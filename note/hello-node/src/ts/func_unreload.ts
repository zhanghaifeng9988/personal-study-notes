function greet(name: string | string[]): string | string[] {
    if (Array.isArray(name)) {
      return name.map((n) => `Welcome, ${n}!`)
    }
    return `Welcome, ${name}!`
  }

  const greeting=greet('John') // "Welcome, John!"
  console.log(greeting)
//   greet(['John', 'Jane']) // ["Welcome, John!", "Welcome, Jane!"]