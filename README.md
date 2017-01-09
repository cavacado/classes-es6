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

# what problem does it solve?

# show an example es5 code vs es6
This is the code written in es5 syntax.

```
function Bunny(name, age, favoriteFood) {
  this.name = name;
  this.age = age;
  this.favoriteFood = favoriteFood;
}

Bunny.prototype.eatFavFood = function () {
  console.log('\"Mmmm! Those ' + this.favoriteFood + ' were delicious\", said ' + this.name + ', the ' + this.age + ' year old bunny.');
};

var newBunny = new Bunny('Brigadier Fluffkins', 3, 'Raspberry Leaves');
newBunny.eatFavFood();
// "Mmmm! Those Raspberry Leaves were delicious", said Brigadier Fluffkins, the 3 year old bunny.
```

This is the code that is refactored into es6 syntax.

```
class Bunny {
  constructor(name, age, favoriteFood){
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
  }

  eatFavFood() {
    console.log(`"Mmmm! Those ${this.favoriteFood} were delicious", said ${this.name} the ${this.age} year old bunny.`);
  };
}

let es6Bunny = new Bunny('Brigadier Fluffkins', 3, 'Raspberry Leaves');
es6Bunny.eatFavFood();
// "Mmmm! Those Raspberry Leaves were delicious", said Brigadier Fluffkins the 3 year old bunny.
```

# is this the 80% or 20%??

looking at the future of javascript; as the language matures further; more people from traditional OOP style of coding would get into javascript.

the only reason why the class syntax is introduced is so as to ease these traditional CS graduates into the language itself.

therefore, this looks to be the trend to follow; so our team would conclude that this would be the 80% in the future.

##acknowledgments:

the code provided in this repo is directly lifted from https://medium.freecodecamp.com/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661#.7x3fkox7e . We give all credit to Masha Diminsky for the conceptualisation of the examples.
