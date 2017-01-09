# classes-es6
090117

# what to do:
  * What is the feature
  * How do we use it?
  * What problem does it solve?
  * Show an example ES5 code vs ES6 code
  * Is this the 80% or the 20% i.e. how useful is this feature to us really

# what is the feature:

# how do we use it?
Syntax wise pretty similar to constructor functions.

Basic Declaration
```
class Doggie{
  constructor(name,age){  // syntax to add properties
    this.name = name;
    this.age = age;
  }
  bark(){ // syntax to add a method
    console.log('woof! woof!')
  }
  introduce(){
    console.log('woof! My name is '+ this.name)
  }
}

let lassie = new Doggie('Lassie',3)
lassie.bark()
```
Extends Example
```
class Pet{
  constructor(){
    this.isHouseTrained = true;
  }
}

class Doggie extends Pet{ //syntax to setup inheritance chain
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  bark(){
    //some logic
    console.log('woof! woof!')
  }
  introduce(){
    console.log('woof! My name is '+ this.name)
  }
}

var lassie = new Doggie('Lassie',3)
console.log(lassie.isHouseTrained) // true
```

# what problem does it solve?

# show an example es5 code vs es6

# is this the 80% or 20%??
