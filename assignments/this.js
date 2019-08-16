/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding - When using the this keyword in the global scope, 'this' will refer to the window itself. since 'this' is used to give the context of an object and everything in Javascript is an object, including the window itself.
 *
 * 2. Implicit Binding-  If you were to create an object, and create a method inside of it using the 'this' keyword, you wouldnt know what 'this' is pointing to until you invoke the method with an argument. When you do invoke the method, you would name the object then use a dot to connect it with the method and then the argument. the reference to the left of the dot would be what 'this' is refering to, hence the name implicit binding.
 *
 * 3. New Binding- Used with constructors. say you make a constuctor named 'Person' and give it several key value pairs using the 'this' keyword. then you create a new object by using //var 'Me' = new Person('cody') the 'this' keyword would then point to the new Person you just created.
 *
 * 4. Explicit Binding- Used with functions. explicit binding uses the methods call, apply, or bind to give the constructors context to the function. for example, you make a constructor with a method inside of it called 'speak' you then create a new object named 'Me' and wanted to give it the same context as the method you made. you would use speak.call(Me) then the 'this' keyword would have the context of Me
 *
 * write out a code example of each explanation above
 */

// Principle 1

function wind() {
  console.log(this);
}

wind();
// code example for Window Binding

// Principle 2

const sayHello = {
  greet: "Hello",
  speak: function(name) {
    return `${this.greet}, ${name}`;
  }
};

console.log(sayHello.speak("Cody"));
// code example for Implicit Binding

// Principle 3

function Person(location) {
  this.name = "Cody";
  this.location = location;
  this.talk = function() {
    return `Hello! My name is ${this.name} and I am from ${this.location}`;
  };
}

const usa = new Person("the United States");
const mexico = new Person("Mexico");
console.log(usa.talk());
console.log(mexico.talk());

// code example for New Binding

// Principle 4

// function Person(location) {
//   this.name = "Cody";
//   this.location = location;
//   this.talk = function() {
//     console.log(
//       `Hello! My name is ${this.name} and I am from ${this.location}`
//     );
//   };
// }

// const usa = new Person("the United States");
// const mexico = new Person("Mexico");

console.log(usa.talk.call(mexico));
console.log(mexico.talk.apply(usa));

let locTalk = usa.talk.bind(mexico);

console.log(locTalk());

// code example for Explicit Binding
