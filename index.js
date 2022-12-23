"use strict";
// alert("hello");
window.addEventListener('load', function(){

    let myAge=prompt("Hello There");

    let number=0;
    let maxScore=14;
    const currentScore=0;
  
    this.document.querySelector('#btn').addEventListener('click', ()=>{
 
        myAge=Number(myAge);//convert my age to number

        number=document.querySelector('#value').value;
        console.log(`Number selected is ${number}`);// log tjhe value of input

        if (number==0||number>35){
            document.querySelector("#guest-instruction").style.color="red";
        }else{}



        if(myAge!=number){
            document.querySelector("#guess-result").innerHTML="WRONG GUESS TRY AGAIN ";
            document.querySelector("#guess-result").style.color="#ff0000";
            max-=2;
            this.document.querySelector("#higscore").innerHTML=max;
        } else{
            document.querySelector("#guess-result").innerHTML="YOU GUESSED RIGHT";
            document.querySelector("#guess-result").style.color="#00ff00";
        }
    });

});

// const buttonClick=document.addEventListener('click', (e)=>{
//     console.log("I got clicked")
// })