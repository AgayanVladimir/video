// function fakeBin(x) {

// 	for (let i = 0; i < x.length; i++) {
// 		let stringNumber = '';
// 		if (Number(x[i]) < 5) {
// 			stringNumber = stringNumber + '0';
// 		} else if (Number(x[i]) >= 5) {
// 			stringNumber += '1'
// 		}


// 	}
// 	return stringNumber;
// }
// console.log(fakeBin(2131232));


// function fakeBin(x) {
// 	let arr = [];

// 	for (let i = 0; i < x.length; i++) {
// 		if (Number(x[i]) < 5) {
// 			arr.push(0)
// 		} else if (Number(x[i]) >= 5) {
// 			arr.push(1);
// 		}
// 	}
// 	arr = arr.join("");
// 	return arr;
// }
// console.log(fakeBin(`127873`));

// function digits(n) {
// 	// code goes here
// 	return n.toString().length;
// }
// console.log(digits(3112));

// document.querySelector('.button1').addEventListener('click', myAlert);
// function myAlert() {
// 	alert('Hello World');
// }


// function changeInput() {
// 	let input = document.querySelector('.i-2');

// 	alert(input.value);

// }
// document.querySelector('.button1').addEventListener('click', changeInput);
// document.querySelector('.button1').addEventListener('click', squeryNumber);

// function squeryNumber() {
// 	let number = document.querySelector('.i-2').value;
// 	if (Number(number)) {
// 		alert(number ** 2);

// 	} else {
// 		alert('Неправильно введено число');
// 	}

// }

// document.querySelector('.button1').addEventListener('click', exchange);

// function exchange() {
// 	let first = document.querySelector('.i-1');
// 	let second = document.querySelector('.i-2');
// 	let firstValue = first.value;
// 	let secondValue = second.value;
// 	first.value = secondValue;
// 	second.value = firstValue;



// }
// document.querySelector('.button1').addEventListener('click', changeButton);
// function changeButton() {
// 	document.querySelector('.button1').innerHTML = 'Нажмите сюда';
// }

// document.querySelector('.button1').addEventListener('click', changeColor)

// function changeColor() {
// 	let inputValue1 = document.querySelector('.i-1');
// 	inputValue1.style.color = 'red';
// }

// document.querySelector('.button1').addEventListener('click', unlock);
// document.querySelector('.button2').addEventListener('click', lock);
// function unlock() {
// 	document.querySelector('.i-1').disabled = true;
// }
// function lock() {
// 	document.querySelector('.i-1').disabled = false;
// }

// document.querySelector('.button1').addEventListener('dblclick', buttonMouseOver);
// function buttonMouseOver() {
// 	alert('Привет');
// }
// document.querySelector('.button1').addEventListener('click', changeText);
// function changeText() {
// 	document.querySelector('.i-1').value = 'Жопа';

// }
// document.querySelector('.button2').addEventListener('click', changeImage);

// function changeImage() {
// 	document.querySelector('img').src = '/image/с кулаком.jpg'
// }
// document.querySelector('.button1').addEventListener('click', changeImage2);
// function changeImage2() {
// 	document.querySelector('img').src = '/image/голова в бок.jpg'

// }


// let count = 0;
// const sliderLine = document.querySelector('.slider-line');
// document.querySelector('.next').addEventListener('click', rollNextSlide);
// document.querySelector('.prev').addEventListener('click', rollPrevSlide);
// function rollNextSlide() {
// 	count -= 500;
// 	if (count < (-2500)) {
// 		count = 0;
// 	}
// 	sliderLine.style.left = count + 'px';
// }

// function rollPrevSlide() {
// 	count += 500;
// 	if (count > 0) {
// 		count = (-2500)
// 	}
// 	sliderLine.style.left = count + 'px';
// }

// let count = 0;
// const sliderItems = document.querySelectorAll('img');
// const sliderLength = sliderItems.length;
// const sliderLine = document.querySelector('.slider-line');
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');

// function rollNextSlide() {
// 	sliderItems[count].classList.remove('active');
// 	if (count >= sliderLength - 1) {
// 		count = 0;
// 	} else {
// 		count++
// 	}
// 	sliderItems[count].classList.add('active')
// }


// function rollPrevSlide() {
// 	sliderItems[count].classList.remove('active');
// 	if (count > 0) {
// 		count--
// 	} else {
// 		count = sliderLength - 1
// 	}
// 	sliderItems[count].classList.add('active')
// }

// function pressKey(e) {
// 	e = e || window.event;

// 	if (e.keyCode == '37') {
// 		rollPrevSlide();
// 	} else if (e.keyCode == '39') {
// 		rollNextSlide();
// 	}
// }
// function scrollWithMouse(e) {
// 	e = e || window.event;
// 	if (e.deltaY < 0) {
// 		rollNextSlide();
// 	} else {
// 		rollPrevSlide();
// 	}
// 	return false;

// }

// next.addEventListener('click', rollNextSlide);
// prev.addEventListener('click', rollPrevSlide);
// document.addEventListener('keydown', pressKey);
// sliderLine.onwheel = scrollWithMouse;
// // sliderLine.addEventListener('wheel', scrollWithMouse);

// function removeChar(str) {
// 	//You got this!
// 	return str.slice(1, -1);

// };

// console.log(removeChar('asdsa'))


// function noSpace(x) {
// 	return x.replace(/ /g, '');
// }

// console.log(noSpace('asda asd aasd asd'))

// function solution(str, ending) {
// 	if (str.endsWith(ending)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(solution('asdas', 's'))

// function simpleMultiplication(number) {
// 	// your code........
// 	if (number % 2 === 0) {
// 		return number * 8
// 	} else {
// 		return number * 9
// 	}

// }
// console.log(simpleMultiplication(2));

// function finalGrade(exam, projects) {

// 	let result = 0;
// 	if (exam > 90 && projects > 10) {
// 		result = 100;
// 	} else if ((exam > 75 && projects >= 5)) {
// 		result = 90
// 	} else if ((exam > 50 && projects >= 2)) {
// 		result = 75
// 	} else {
// 		result = 0;
// 	}
// 	return result; // final grade
// }
// console.log(finalGrade(100, 12))
// function switchItUp(number) {
// 	//Write your own Code!
// 	let result = '';
// 	switch (number) {
// 		case 0:
// 			result = 'zero';
// 			break;
// 		case 1:
// 			result = 'one';
// 			break;
// 		case 2:
// 			result = 'two';
// 			break;
// 		case 3:
// 			result = 'three';
// 			break;
// 		case 4:
// 			result = 'four';
// 			break;
// 		case 5:
// 			result = 'five';
// 			break;
// 		case 6:
// 			result = 'six';
// 			break;
// 		case 7:
// 			result = 'seven';
// 			break;
// 		case 8:
// 			result = 'eight';
// 			break;
// 		case 9:
// 			result = 'nine';
// 			break;

// 	}
// 	return result;
// }
// console.log(switchItUp(2))

// String.prototype.isUpperCase = function () {
// 	// your code here
// 	if (String.toUpperCase) {
// 		return true
// 	} else {
// 		return false
// 	}
// }


// function points(games) {
// 	// your code here
// 	let result = 0;

// 	for (let i = 0; i < games.length; i++) {
// 		let goals = games[i].split(':');

// 		if (+goals[0] > +goals[1]) {
// 			result += 3
// 		} else if (+goals[0] === +goals[1]) {
// 			result += 1
// 		}
// 	}
// 	return result


// }
// points(['2:1']);

// function isTriangle(a, b, c) {
// 	if (a + b > c && a + c > b && c + b > a) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isTriangle(1, 2, 2));

// function squareDigits(num) {
// 	let reuslt = 0;
// 	let item = 0;
// 	let arr = [];
// 	let string = num.toString()
// 	for (let i = 0; i < string.length; i++) {
// 		item = string[i] ** 2
// 		arr.push(item);
// 		reuslt = arr.join('');

// 	}
// 	return +reuslt;


// }

// console.log(squareDigits(3212));

// function calculate1RM(w, r) {
// 	let emplyFormul = w * (1 + r / 30);
// 	let macGlotinFormeul = (100 * w) / (101.3 - 2.67123 * r);
// 	let lombardiFormul = w * (r ** 0.10);
// 	let arr = [emplyFormul, macGlotinFormeul, lombardiFormul];
// 	let result = Math.max(...arr);
// 	if (r === 1) {
// 		return w
// 	} else if (r === 0) {
// 		return 0
// 	} else { return Math.round(result); }



// }
// console.log(calculate1RM(70, 10));



// function solution(number) {
// 	// convert the number to a roman numeral
// 	var map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
// 	let result = '';
// 	for (let key in map) {
// 		while (number >= map[key]) {
// 			result += key;
// 			number -= map[key];
// 		}
// 	}
// 	return result
// }
// console.log(solution(200));

// function modifyMultiply(str, loc, num) {
// 	//Code here

// 	let wordArray = str.split(' ');
// 	let itemArray = wordArray[loc];
// 	let result = '';
// 	for (i = 0; i < num; i++) {

// 		result += `-${itemArray}`

// 	}

// 	return result.slice(1);

// }

// console.log(modifyMultiply('asdas dasd', 1, 3));
// function houseNumbersSum(inputArray) {
// 	//coding and coding..
// 	let newArr = [];
// 	let sum = 0;
// 	for (let item of inputArray) {
// 		if (item === 0) {
// 			break

// 		} else {
// 			newArr.push(item)
// 		}
// 	}
// 	for (let element of newArr) {

// 		sum += element
// 	}

// 	return sum;


// }
// console.log(houseNumbersSum([10, 2, 10, 4, 9, 9, 9, 8, 2, 1, 10, 3, 0]))

// fetch('https://api.ub.com/users/AgayanVladimir').then(res => {
// 	return res.json()
// }).then(res => {
// 	console.log(res)
// }).catch(err => {
// 	console.log(err	)
// });

const video = document.querySelector('video');
const myVideo = navigator.mediaDevices.getUserMedia({ video: true }).then(MediaStream => {
	video.srcObject = MediaStream;
})
