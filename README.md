# classes-es6
090117

# what to do:
  * What is the feature
  * How do we use it?
  * What problem does it solve?
  * Show an example ES5 code vs ES6 code
  * Is this the 80% or the 20% i.e. how useful is this feature to us really

# what is the feature:

Classes are 'special functions' and are a simpler way of dealing with the more complex Javascript prototype inheritance models. They are mostly syntactical sugar, ie. It is just syntax which is designed to make things easier to read or to express.

Classes are an inherent part of most other programming languages. This feature allows for easier transition for people migrating from other programming languages to JavaScript.

----- Syntax ------

The inheritance is made simpler using the 'extends' keyword. When a class A extends class B, class A is the child of class B. Using the 'super' keyword, it is possible to inherit the methods defined in the parent class.

Points to be noted:
1. A class cannot be hoisted like functions ie. the class cannot be called before first declaring it.
    '''javascript
    var p = new Polygon();
    class Polygon{

    }
    '''

  This leads to a reference error

2. Built in objects can also be extended.
      '''javascript
      Class myDate extends Date(){
        constructor(){
        }
        function myExtension(){
        }
      }
      '''


# how do we use it?

# what problem does it solve?

# show an example es5 code vs es6

# is this the 80% or 20%??
