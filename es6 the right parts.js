Arrow

    =>

    // replaces 'function'

    foo = x => 2;

function foo() {
    return 2;
}

() => 3 //empty function, empty parameter list
x => 3 // also same thing, placeholder variable
    (...x) => 3 // gather/spread operator
    (x, y) => 3
    // concise function body

x => {
    try { 3; } catch (e) { console.log(e); } }

x => {
    return 3; }

x => ({ y: x }) // concise body

// arrow functions are anonymous

var foo = x => 3;
foo.name; // "foo"


foo(x => 3) // no name inferencing

//********
//promises

p.then(function extractID(v) {
        return v.id }) // he prefers naming it
p.then(v => v.id) // this arrow function will come out as an anonyous function

// arrow function again
var obj = {
    id: 42,

    foo: function foo() {
        setTimeout(function() {
            console.log(this.id)
        }.bind(this), 100);
    }
};

// can turn into this
var obj = {
    id: 42,

    foo: function foo() {
        setTimeout(() => 
            console.log( this.id )
        , 100);
    }
};

obj.foo(); //42

function foo(x) {
	if (x > 5) return x;
	else return 1;
}

var foo = x => x > 5 ? x : 1;