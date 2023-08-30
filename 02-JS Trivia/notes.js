/**
 * JS TRIVIA QUESTIONS
 */

/**
 * Q1: What is the difference between var and let
 * 1: Scope
 *  -var is function scoped
 *  -let is block scoped
 * 2: Hoisted
 *  -var is hoisted (can be called before initialization)
 *  -let is not hoisted
 * 3: ES6
 *  -var was there from the beginning (works on older browsers)
 *  -let ES2016
 */

const fn = () => {
    if (true){
        console.log(x); //variable can be used before being initialized (hoisted)
        var x = 1;
        // let y = 2; not working because let is block scoped
    }
    console.log(x);
    // console.log(y);
}
fn();

/**
 * Q2: What is the difference between == and ===
 * '==' compares values (changes types to the same datatype before comparing)
 * '===' compares values and types
 */

/**
 * Q3: What is the difference between let and const
 * 'let' can be reassigned
 * 'const' can not be reassigned
 * Using const for arrays and objects you can still modify them, but can't 
 * reassign the entire array to the variable again.
 */

/**
 * Q4: What is the difference between undefined and null
 * 1: Assignment
 *  -An initialized variable with a value automatically gets 'undefined' value.
 *  -If you want to clean up a value it is better practice to use 'null' since,
 *   developers know it was set intentionally.
 * 2: Typeof
 *  -undefined = undefined
 *  -null = object
 */

/**
 * Q5: How can you improve a webpage's performance?
 * Optimize images <100KB
 * Lazy Load Images
 * Lazy Load Components
 * Minify HTML, CSS, Javascript (reduce file size, removing unnecessary lines/spaces)
 * Improve API Response time
 * Utilize concurrent HTTP requests with Promise.all
 */

/**
 * Q6: What is 'this'?
 * 'this' keyword is used to refer to that object that owns it
 * If it to the global object if it is alone or inside an arrow function of an object
 * If it is in strict mode 'this' is undefined. (in a function)
 */

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person.fullName());

/**
 * Q7: Difference between Arrow and Regular Functions
 * Arrow functions don't have their own 'this'. References 'this' of global lexical scope
 * Arrow functions don't have the arguments object.
 */

/**
 * Q8: Difference between function declaration vs function expression
 * 1: Syntax
 *  -Function Declaration: Starts with 'function' then the function name
 *  -Function Expression: Anonymous function stored in a variable
 * 2: Hoisting
 *  -Function Declarations are hoisted, can be called before it is declared.
 *  -Function Expressions behave like a variable, so it has variable scope.
 */

/**
 * Q9: setTimeout()
 * Eventloop: startofloop -> macrotasks -> call stack -> webapi -> microtasks
 * setTimeout is executed on the stack then is put in the callback/macrotasks queue
 * Therefore, setTimeout will not execute on this eventloop, but instead at the start
 * of the next event loop.
 * Macrotasks: setTimeout, setInterval, UI Rendering
 * Microtasks: Promises, queueMicrotask
 */

setTimeout(() => {
    console.log('a');
}, 0)
console.log('b');
console.log('c');