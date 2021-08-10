/*function num(result){
    if(result%2==0){
        return "the number is even"
    }else{
        return "the number is odd"
    }
}
console.log(num(3))

function dob(age){
    if(age>18){
        return "You are an adult"
    }else if(age<18){
        return "You are young"
    }
}
console.log(dob(17));

function countToHundred() {
    var count =0;
    while(count < 100){
        count++;
    }
} 
console.log(countToHundred)

var count=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
    68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var even=[];
var odd=[];

var numbers = function(count) {
    for(var i= 1;i<count.length; i++) {
        if ((count[i] % 2) !=1) {
            even.push(count[i]);
            console.log(even);
        } 
        else {
            odd.push(count[i]);
            console.log(odd);
        }
    }
}
numbers(count);

var number = 0;
while( number <= 150){
    console.log(number)
    number +=1
}
var even = [];
var odd = [];
var count = function number() {
    for (var i = 0; i<number.length; i++){
        if(number[i] % 2 != 1){
            return even.push(number[i]);
        } else {
           return odd.push(number[i]);
        }
    }
}
var eve =  even.push(number[i]);
console.log(eve)*/

//Assignment
//1: Write a Javascript to compute the sum of the two given intergers. if the two values are same, then return triple their sum.
function intergers(n1,n2){
    var sum = n1+n2;
    if(n1 + n2=== n1+n2){
       return sum*3 
    } else{
        return "not applicable"
    }
}
var sum = intergers(2,3);
console.log(sum)

//2: Write a Javascript program to check from two given intergers, whether one is positive and another one is negative.
var twoIntergers = [-3,-2,-1,0,1,2,3]
function value(){
    for(var i = 0; i<twoIntergers.length; i++){
        if( i>0 ){
             return "it is a positive number"
        }else {
            return "it is a negative number"
        }
    }
}
var result = value(3);
console.log(result)

/*function inter(n3,n4){
    while (inter < 0){
        return "it is positive"
    } else
}
inter(1,2)*/

function inter(n3,n4){
    if((n3 < 0 && n4 > 0) || n3 > 0 && n4 < 0){
        return "it is positive"
    } else {
        return "it is negative"
    }
}
console.log(inter(-1,1))
console.log(inter(1,2))
console.log(inter(2, -1))

//Question 3: Write A Javascript program to find the largest of three numbers
function largeNumbers(a,b,c){
    i = 0
    if( a > b){
        i = a
    } else {
        i = b
    } if (c > i){
        i = c
    } return i
}
console.log(largeNumbers(2,3,5))
console.log(largeNumbers(10,30,20))

//4) Write a JavaScript program to reverse the elements of a given array of intergers length 3
var array = [1,2,3,4,5]
let reversedArray = array.map(function(element,){
    array.length-1;
});
console.log(reversedArray)

function reversedArr(arr) {
    return arr.map((d,e,f) => f[(arr.length - 1)- e]);
}
console.log(reversedArr([1,2,3,4,5]))

//Question 5: Write a Javascript code to divide a given array of positive intergers into two parts. First element goes to fist part, second element goes to second part and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two
 function positiveIntergers(numbers){
     var result = [0, 0]
     for (var i = 0; i < numbers.length; i++){
         if(i % 2) 
         {result[1] += numbers[i];}
         else{
             result[0] += numbers[i];
         }
     }
     return result
 }
 console.log(positiveIntergers([1,2,3,4,5]))

 //Question 6: Write a Javascript function to check whether a string is blank or not. Test Data: console.log(is_black("")); console.log(is_blank('abc')); required output true false
 var is_Blank = function(string) {
     if(string.length === 0){
         return true;
     }else{
         return false;
     }
 }
 console.log(is_Blank(""));
 console.log(is_Blank('abc'))