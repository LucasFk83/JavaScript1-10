
//write first method
function sleep_in(weekday,vacation) {
    var week = !weekday || vacation;
    return week;

}

//write second method
function monkey_trouble(a_smile, b_smile) {

        var trouble = a_smile && b_smile || !a_smile && !b_smile;
        return trouble;
}

//third method
function string_times(string,number){
    var start = "";
    for(var i = 0 ; i < number ;i++){
        start +=string;

    }
    return start;

}
// fourth method
function front_times(string,number){
var start = "";

    for(var i = 0 ; i < number ;i++){
        start +=string.substring(0,3);
    }

return start;
}
// fifth method
function string_bits(string,number) {
    var start = "";

    for (var i = 0; i < string.length; i = i + 2) {
        if (i % 2 == 0) {
            start += string.substring(i, i + 1);

        }
    }
    return start;
}

// sixth method
function caughtSpeeding(speed,birthday){
    if(birthday == true){
        speed = speed - 5;
    }
    if (speed <= 60) {
        value = 0;
    }
    if (speed > 61 && speed <= 80) {
        value = 1;

    }
    if (speed > 81) {
        value = 2;
    }
return value;
}

// seventh method

function fizz_buzz(number,value){

    if (number%3 != 0 && number%5 != 0){
        value= number + "!";
    }
    if (number % 3 == 0) {
        value = "Fizz";
    }
    if (number % 5 == 0) {
        value = "Buzz";
    }
    if(number % 5 == 0 & number % 3 == 0){
        value = "FizzBuzz";
    }
    return value;
}

//eight  method

function teaParty(tea,candy){
    if((tea < 5 )|| (candy< 5)){
        return 0;
    }

    if((tea >= candy * 2) || (candy >= tea * 2 )){
        return 2;
    }
    if((tea >= 5 && candy >=5)){
        return 1;
    }

}

// ninth method

function blackjack(numone,numtwo){
    if((numone > 21) && (numtwo > 21)){
        return 0;
    }

    if(numone > 21){
    return numtwo;
    }
    if (numtwo > 21){
        return numone;
    }


    if(numone>numtwo){
        return numone;
    }else{
        return numtwo;
    }

}

// tenth method

function loneSum(a,b,c) {
    if(a == b && a==c && b==c) {
        return 0;
    }
    if(a != b && a !=c && b != c){
        return a + b + c;
    }
    if (a == b) {
        return c;
    }
    if (a == c) {
        return b;
    }
    if (c == b) {
        return a;
    }
}


//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    //test third method, etc
}
