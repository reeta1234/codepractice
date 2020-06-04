var rxjs = require('rxjs')
const { Observable } = rxjs;

const greetingLady$ = new Observable(observer => {
  console.log('Inside Observable (proof of being lazy 2)');
  observer.next('Hello! I am glad to get to know you. 3');
  observer.complete();
});

console.log('Before calling subscribe on Observable 1');

greetingLady$.subscribe({
  next: console.log,
  complete: () => console.log('End of conversation with preety lady 4')
});

console.log("************************************************************")
const greetingPoster = new Promise((resolve, reject) => {
    resolve('Welcome! Nice to meet you.');
  });
  
  console.log('Before calling then on Promise');
  
  greetingPoster.then(res => console.log(`Greeting from promise: ${res}`));
  
  console.log('After calling then on Promise (proof of being always async)');