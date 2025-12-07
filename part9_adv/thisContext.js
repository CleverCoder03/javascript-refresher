const person = {
    name: "William",
    greet () {
        console.log(`hello, ${this.name} how are you`)
    }
}


person.greet()
// Output: hello, William how are you

let newVar = person.greet
newVar()
// Output: hello, undefined how are you

let newNewVar = person.greet.bind({name: "James"})
newNewVar()
// Output: hello, James how are you

// More functions to explore like bind() are apply() and call()