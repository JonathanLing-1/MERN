console.log(example);
var example = "I'm the example!";
// logs undefined

console.log(example);
let example = "I'm the example!";
// logs not initialized

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// logs magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// logs only okay, only okay WRONG: logs super cool, function not called

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// logs chicken, half-chicken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// logs chicken, fish, fish, fish WRONG: mean is not a function, mean is the var which references the function mean(), is not a function call

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// logs undefined, rock , r&b, r&b WRONG: last console.log is disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//  logs san jose, seattle, burbank, sanjose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// {name: chicago students:65 }{"closed for now"} WRONG: cannot assign to a const