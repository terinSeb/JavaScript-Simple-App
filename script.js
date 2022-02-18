'use strict';
// const bookings = [];

// const createBooking = function(
// fightNum,
// numPassengers = 1,
// price = 199 * numPassengers
// )
// {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
// const booking = {
//   fightNum,
//   numPassengers,
//   price
// }
// console.log(booking);
// bookings.push(bookings);
// }


// createBooking('LH123');

// createBooking('LH123',2,800);

// const flight = 'LH234'
// const terin = {
// name: 'Terin Sebastin',
// passport: 123456789
// };
// const chekIn = function(flightNum,passport){
//   flightNum = 'LH456';
//    passport.name = 'Mr. ' + passport.name;
//   if(passport.passport = 123456789)
//   {
//     alert('Checked In');
//   }
//   else{
//     alert('Wroung Password')
//   }
// }
// chekIn(flight,terin);
// console.log(flight);
// console.log(terin);
// const oneWord = function(str){
//   return str.replace(/ /g,'').toLowerCase();
// }
// const upperFirstWord = function(str){
//   const [first,...others] = str.split(' ');
//   return [first.toUpperCase(),...others].join(' ')
// }
// const transformer = function(str, fn){
//   console.log(`Original String:- ${str}`)
//   console.log(`Transformed String:- ${fn(str)}`)
//   console.log(`Transformed By:- ${fn.name}`)
// }

// // transformer('JavaScript is the best',upperFirstWord);
// transformer('JavaScript is the best',oneWord);

// const high5 =  function(){
//   console.log('Hi');
// }

// document.body.addEventListener('click',high5);

// ['Jhony','White','Brown'].forEach(high5)

// const greet = function(greetings){
//   return function(name){
//     console.log(`${greetings} ${name}`);
//   }
// }
// const greetfunc = greet('Hello')
// greetfunc('Brown');

// const greetArr = greetings => name => console.log(`${greetings} ${name}`);
// // const greetfuncs = greetArr('Hi')
// // greetfuncs('Brown');
// greetArr('Hi')('Brown')

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   planes: 0,
//   book: function(flightNum,name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
//   }
// }
// lufthansa.planes = 300;
// lufthansa.buyPlanes = function(){
//   console.log(this);
//   lufthansa.planes++;
//   console.log(lufthansa.planes);
// }

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlanes.bind(lufthansa));

// // const addTax = (rate,value) => value + value * rate
// // console.log(addTax(.1,100))
// // const addTaxBd = addTax.bind(null,.2)
// // console.log(addTaxBd(100))
// // console.log(addTaxBd(200))

// const addTax = function(rate) {
//   return function(value) {
//       return value + value * rate
//   }
// }

const poll = {
question: 'What is your favourite programming language ?',
options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
// This generates [0,0,0,0]
answers: new Array(4).fill(0),
registerNewAnswer(){
const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`))
typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
displayResults();
displayResults('string');
},
displayResults(type='array'){
  if (type === 'array')
  {
    console.log(this.answers);
  }
  else if((type === 'string')){
    console.log(this.answers.join(', '));
  }
}
}
// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));
poll.displayResults.call({answers: [3,4,5]});