/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when you use the "this" keyword in the global scope.
* 2. Implicit binding is when you use the "this" keyword with a method within the scope of an object.
* 3. New binding is when we use the "this" keyword within a constructor function to define and use specific attributes with the "new" variable or function once they have been defined. 
* 4. Explicit binding is when we override the constructor objects using .call and .apply. The "this" keyword becomes explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myFriend = {
    firstName: 'Sean',
    lastName: 'Paul',
    age: 27,
    location: 'Santa Cruz',
    aboutFunc: function(){
        return `I have a friend and his name is ${this.firstName} ${this.lastName}. He is ${this.age} and lives in ${this.location}.`;
    }
}

console.log(myFriend.aboutFunc());

// Principle 3

// code example for New Binding
function aboutSong(artist, songName, year, label){
    this.artist = artist;
    this.songName = songName;
    this.year = year;
    this.label = label;
    this.songFunc = function () {
        console.log(`${this.artist} released ${this.songName} in ${this.year} on ${this.label}.`)
    };
}

const artist1 = new aboutSong('Koffee', 'Throne', 2019, 'Columbia UK');
const artist2 = new aboutSong('Koffee', 'Toast', 2019, 'Columbia UK');
artist1.songFunc();

// Principle 4

// code example for Explicit Binding
artist1.songFunc.call(artist2);