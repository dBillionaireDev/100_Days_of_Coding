console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

let num = '10';
console.log(typeof num);
let num1 = Number(num);
console.log(typeof num1);
console.log(num == num1);
console.log(parseFloat('9.8') == 10);
console.log(Math.round(parseFloat('9.8')) == 10);

let code = 'python';
let notCode = 'jargon'

console.log(code.includes('on'));
console.log(notCode.includes('on'));

let fear = 'I hope this course is not full of jargon.';
console.log(fear);
console.log(fear.includes('jargon'));
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100) + 50);
console.log(Math.random() * 255);
let paragraph = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(paragraph.match('love'));
let pattern = /paragraph/gi
console.log(paragraph.match('pattern'));
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence);
console.log(sentence.replace('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching', 'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher? This 30 Days Of JavaScript is also the result of love of teaching'));


