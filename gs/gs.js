/*
var isnumberTrue =1;
var isBooleanTrue= true;
if (isnumberTrue == isBooleanTrue){

	console.log("true");
}
else{
	console.log("false");
}
*/
/*
var number1 = 8;
var number2 = -3;
var number3 = -2;
var count = 0
if (number1 < number2,number1 < number3 ) {
	count = number1 ;
	}
else if (number2 < number1,number2 < number3) {
	count = number2 ;
	}
else if (number3 < number2,number3 < number1) {
	count = number3;
	}
 console.log(count);
 */
 /*
var year= 2020;
var typeOfYear="";

if(year%4==0){
	typeOfYear=366;
	if(year % 100 == 0 && year % 400 != 0){
		typeOfYear=365;
	}

}
else{
	year =365
}
if (year==365){
	console.log("не высокосный");
}*/
/*
var string1 ="мама",string2 = "мыла", string3 = "раму";
var count = 10;
var string4 = "раз";
var space

console.log(string1 + " " + string2 +" "+ string3 +" "+ count + " " + string4);
console.log( `${string1} ${string2} ${string3} ${count} ${string4}`);
*/
/*
var number = 545334;
var number1 = "";

if (number <= 0 || number >=1000) {
console.log(`${number} вне требуемого диапазона `);
}
else{
		if ( number % 2 == 0 ){
	 number1 = " четное ";
}
else  {
	number1 = " нечетное "
}
if (number>= 1 && number<=99  ) {
	number1= `${number1} двухзначное`;
}
else if (number >= 100 && number <=999 ) {
	number1 = `${number1} трехзначное`;
}
console.log(` ${number1} число`);
}
*/
/*
for (var i =0; i<10; i++){
	console.log(i);
		if (i==4){
	console.log("дошли до 5 - значит прирываем цыкл");
	break
		i=10000
	}	
}

while (i<=10){
	console.log(i);
	i++
}
*/
/*
var A=200/1000;
for(var i = A; i<=B;i++){
	console.log(i);
	C++;
}
for(var i = 100; i <= 2000; i++)
	console.log(i*A);
*/
var cats = ["dasha", "asha", "sha", "ha", "a"];
var dogs = ["fgff",birts,"ht67t","utuyuyre5","8iyu8","ji","o9iu","o","t7u"];
var birts = ["yut6r6"];
cats.pop();
console.log(cats);
cats.push("aa", dogs);
console.log(cats[2][3]);
cats.shift();
console.log(cats);
cats.unshift(birts,"bel")