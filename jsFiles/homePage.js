import { Events } from './arrayList.js';

function textChange(){
    let eventName = Events.map(events => events.name);

    let textTop1 = eventName[Math.floor(Math.random() * eventName.length)];
    let textTop2 = eventName[Math.floor(Math.random() * eventName.length)];
    let textTop3 = eventName[Math.floor(Math.random() * eventName.length)];
    let textTop4 = eventName[Math.floor(Math.random() * eventName.length)];

    while(textTop1 == textTop2 || textTop1 == textTop3 || textTop1 == textTop4){
        textTop1 = eventName[Math.floor(Math.random() * eventName.length)];
    }
    while(textTop2 == textTop1 || textTop2 == textTop3 || textTop2 == textTop4){
        textTop2 = eventName[Math.floor(Math.random() * eventName.length)];
    }
    while(textTop3 == textTop1 || textTop3 == textTop2 || textTop3 == textTop4){
        textTop3 = eventName[Math.floor(Math.random() * eventName.length)];
    }
    while(textTop4 == textTop1 || textTop4 == textTop2 || textTop4 == textTop3){
        textTop4 = eventName[Math.floor(Math.random() * eventName.length)];
    }

    document.getElementById("textTop1").innerHTML = textTop1; 
    document.getElementById("textTop2").innerHTML = textTop2; 
    document.getElementById("textTop3").innerHTML = textTop3; 
    document.getElementById("textTop4").innerHTML = textTop4;
}

textChange()
/*source

https://stackoverflow.com/questions/1574008/how-to-simulate-target-blank-in-javascript
thank you stack overflow

*/