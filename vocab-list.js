// ******************************
// *** Object                 ***
// ******************************
// An object is a way to describe complex values by listing its properties and behaviors.
//
// In Javascript, objects are created by using curly braces (in the same way arrays are created using square braces)
// Objects are indexed by either using square bracket notation, or (more commonly) by using the . notation

let myObject = {
    foo: 'bar'
}
myObject.foo; // evaluates to 'bar
myObject['foo']; // also evaluates to 'bar'

// ******************************
// *** Key-Value Pair         ***
// ******************************
// Key value pairs are used in many programming languages - they simply provide values with unique labels.
// In real life, a Dictionary contains a large list of key-value pairs, where the word entries are the keys and their definitions are the values
// Note that the keys are unique, but multiple keys can share the same values
//
// In javascript, key value pairs are used to list of unique properties of an object. In the example below, "foo" is the key and "bar" is the value
let myObject = {
    foo: 'bar'
}

// ***********************************
// *** Object Oriented Programming ***
// ***********************************
// OOP is a strategy for writing organized code. The general premise is to describe the properties and methods of Objects, 
// as well as the relationship between those Objects (e.g. cats and dogs share properties of the Animal class, but have properties unique to themselves)
// The rest of the code creates instances of those object and utilizes their properties/methods without needing to know how they were implemented


// ******************************
// *** Property               ***
// ******************************
// A property is some key-value pair of a given object.
//
// For example, "color" is a property of the object below

let balloon = {
    size: 10,
    color: 'red'
}


// ******************************
// *** Method               ***
// ******************************
// A method is some behavior of a given object.
//
// For example, "grow" is a method of the object below

let balloon = {
    size: 10,
    grow: function() {
        this.size += 10;
    }
}









