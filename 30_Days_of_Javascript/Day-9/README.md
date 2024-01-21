This tasks is used to document my journey on Day 9 of the 30 Days of JavaScript challenge, it's becoming very challenging,but with determination and perseverance I will succeed

In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

setInterval
setTimeout

Setting Interval using a setInterval function
In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

Illustration below;
// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)

Example below

function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s
