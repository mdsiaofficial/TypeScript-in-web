console.log("Hi, Hello");
const name: string = "Ashiq";
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

console.log(fvck)

function gunkoro(a: number, b: number): number {
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
}

// person.country = "bd";
person['country'] = "bd";
console.log(person)

let a: string;

a = "sna";
let b: number;

b = 'sddf';

let ab: string[];
ab = ['sdf', 'sdf', 'sdf'];
console.log(ab)
ab.push('sdf');
console.log(ab);

let jakhusi: (string | number)[] = [];
jakhusi.push('ter');
console.log(jakhusi)
let arekta: string | boolean;


let bb: object;
bb = {
  na: "ashiq",
  kam: "thinking",

}

console.log(bb);

let mm: {
  namd: string,
  boyosd: number,
  kamd: string,
} = {};

mm.boyosd = 43;
mm.namd = "ashiq";

console.log(mm);

let h: {
  name: string,
  age: number,
} = {};
h.name = "dslkf";

let u: any;
u = 45;
u = "sdlfj";

let rt: any[] = [];

rt.push("sdflk");
rt.push(45);
console.log(rt);

const myF = () => {
  console.log("first");
}

let my: Function;
my = 5;

const myFuc = (a: string, b: number) => {
  console.log(a, b);
}

myFuc("hello", 56);

const hidfuc = (a: string, b: string, c?: number){
  c ? console.log(c) : null;

  console.log(a + b);
  return a + b + c;
}

hidfuc("helo", "hi", 67);
hidfuc("helo", "hi");

function ff(a: string, b: string): number {


  return 5;
}

console.log("first");


const userDetails = (
  id: string | number,
  user: {
    name: string,
    age: number
  }

) => {
  return id;
}



// using type Aliases
type strOrNum = string | number;
type userType = {
  id: strOrNum;
  name: string;
  age: number;
};

const uDetails = (user: userType){
  console.log(`Hello ${user.name}, ${user.age > 40 ? "sir" : "mr "}`);
  return user.id;
}

const user1 = {
  id: 1,
  name: 'Ashiq',
  age: 24
}

console.log(uDetails(user1));


// function signature
let customFunc: (x: string, y: string) => void;

let addFunc: (a: number, b: number) => number;

addFunc = (v: number, u: number) => {
  return v + u;
}

let calc: (x: number, y: number, z: string) => number;

calc = (a: number, b: number, z: string) => {
  if (z === '+') {
    return a + b;
  } else {
    return 0;
  }
}

console.log(calc(3, 6, '+'));


let ud: (id: strOrNum, uinfo: { name: string, age: number }) => void;

ud = (id: strOrNum, user: { name: string, age: number }) => {
  console.log(`Hello ${user.name}`);
}

console.log(ud(34, { name: "ashi", age: 23 }));


// in class / object

class Player {
  name: string;
  private age: number;
  readonly country: string;

  constructor(n: string, a: number, c: string) {
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


const players: string[] = [];
// we can declare a array of our class - player
const AllPlayers: Player[] = [];
AllPlayers.push(ash);
AllPlayers.push(rtygf);
AllPlayers.push(dsf);
console.log(AllPlayers)
console.log(ash.name);

ash.name = "newAshiq";
console.log(ash.name);


ash.age = 43;
console.log(ash.age);

ash.country = "aus";
console.log(ash.country);

import { stu } from "./classes/Stu.js";

const ashiqstu = new stu("ashiq", 34, "a+", 24, "Rajashon");
console.log(ashiqstu);

// interface

interface RectOpt {
  width: number;
  length: number;
}
function drawRect(
  opt: RectOpt
) {
  let width = opt.width;
  let length = opt.length;
}

drawRect({ width: 20, length: 49 });

drawRect({ width: 20, length: 50, height: 60 });

let threeDim = { width: 20, length: 50, height: 60 };
drawRect(threeDim);

import Play from '../js/classes/Player.js';
import { IsPlayer } from '../js/interface/isPlayer.js';

// generic
// const addID = <T extends object> (obj: T) => {
//   let ID = Math.floor(Math.random() * 100);
//   return ({...obj, ID});
// }

const addID = <T extends {
  name: string;
  age: number;
}> (obj: T) => {
  let ID = Math.floor(Math.random() * 100);
  return ({...obj, ID});
}

let us = addID({
  name: "ashiq",
  age: 30,
  country: "BD",
});

console.log(us.ID);
us.name = "as2";
console.log(us.name);

let ui = "newUI";

// addID(ui);

// generic interface
interface APIResponse {
  status: string;
  type: string;
  data: {
    name: string;
    age: number;
  }
}

const res1: APIResponse = {
  status: "ok",
  type: "user",
  data: {name: "ashiq", age: 34},
}

console.log(res1);

interface APIResponse2 <T> {
  status: string;
  type: string;
  data: T;
}

const res2: APIResponse2 <object> = {
  status: "ok",
  type: "user",
  data: {name: "ashiq", age: 34},
}

console.log(res2);



// ENUMS

enum ResType { SUCCESS, FAILED, UNAUTHENTICATED, FORBIDDEN };

interface apiType<T> {
  status: string;
  type: ResType;
  data: T;
}

const res3: apiType<object> = {
  status: "ok",
  type: ResType.SUCCESS,
  data: {name: "ashiq", age: 34},
}

console.log(res3)

let height = 180;
function x() {
  let height = 200;
  height = height + 1;
  console.log(height);
}