"use strict";
console.log("Hi, Hello");
const name = "Ashiq";
console.log(name);
let playerName = "Ashiq";
playerName = 89;
console.log(playerName);
let age = 24;
age = "Rakib";
console.log(age);
let fvck;
console.log(fvck);
fvck = "nigga";
fvck = 56;
console.log(fvck);
function gunkoro(a, b) {
    return a * b;
}
console.log(gunkoro(6, 7));
console.log(gunkoro(6, ""));
console.log(gunkoro(6, 4));
let fru = ['apel', 'kola', 'jambura', 'lebu', 45, true];
fru.push(53);
console.log(fru);
let mixed = ['kola', 120, true,];
mixed.push('nashpati', 'kathal', 400);
console.log(mixed);
mixed.push({
    name: 'Ashiq',
});
console.log(mixed);
let person = {
    name: 'Ashiq',
    age: 24,
    isCap: true,
};
// person.country = "bd";
person['country'] = "bd";
console.log(person);
let a;
a = "sna";
let b;
b = 'sddf';
let ab;
ab = ['sdf', 'sdf', 'sdf'];
console.log(ab);
ab.push('sdf');
console.log(ab);
let jakhusi = [];
jakhusi.push('ter');
console.log(jakhusi);
let arekta;
let bb;
bb = {
    na: "ashiq",
    kam: "thinking",
};
console.log(bb);
let mm = {};
mm.boyosd = 43;
mm.namd = "ashiq";
console.log(mm);
let h = {};
h.name = "dslkf";
let u;
u = 45;
u = "sdlfj";
let rt = [];
rt.push("sdflk");
rt.push(45);
console.log(rt);
const myF = () => {
    console.log("first");
};
let my;
my = 5;
const myFuc = (a, b) => {
    console.log(a, b);
};
myFuc("hello", 56);
const hidfuc = (a, b, c) => {
    c ? console.log(c) : null;
    console.log(a + b);
    return a + b + c;
};
hidfuc("helo", "hi", 67);
hidfuc("helo", "hi");
function ff(a, b) {
    return 5;
}
console.log("first");
const userDetails = (id, user) => {
    return id;
};
const uDetails = (user) => {
    console.log(`Hello ${user.name}, ${user.age > 40 ? "sir" : "mr "}`);
    return user.id;
};
const user1 = {
    id: 1,
    name: 'Ashiq',
    age: 24
};
console.log(uDetails(user1));
// function signature
let customFunc;
let addFunc;
addFunc = (v, u) => {
    return v + u;
};
let calc;
calc = (a, b, z) => {
    if (z === '+') {
        return a + b;
    }
    else {
        return 0;
    }
};
console.log(calc(3, 6, '+'));
let ud;
ud = (id, user) => {
    console.log(`Hello ${user.name}`);
};
console.log(ud(34, { name: "ashi", age: 23 }));
// in class / object
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} and ${this.age}`);
    }
}
const ash = new Player("Ashiq", 24, "bd");
const rtygf = new Player("Ashiq", 24, "bd");
const dsf = new Player("Ashiq", 24, "bd");
console.log(ash.play());
const players = [];
// we can declare a array of our class - player
const AllPlayers = [];
AllPlayers.push(ash);
AllPlayers.push(rtygf);
AllPlayers.push(dsf);
console.log(AllPlayers);
