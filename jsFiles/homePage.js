import {Events} from './arrayList';

function tbuild(){
    window.open("../pages/teambuilder.html",'_blank');
}

function textChange(){
    let textTop1 = document.getElementById("textTop1");
    let textTop2 = document.getElementById("textTop2");
    let textTop3 = document.getElementById("textTop3");
    let textTop4 = document.getElementById("textTop4");

    let eventName = Events.map(events => events.name);

    return document.getElementById("textTop1").innerHTML = eventName[Math.floor(Math.random() * eventName.length)], document.getElementById("textTop2").innerHTML = eventName[Math.floor(Math.random() * eventName.length)], document.getElementById("textTop3").innerHTML = eventName[Math.floor(Math.random() * eventName.length)], document.getElementById("textTop4").innerHTML = eventName[Math.floor(Math.random() * eventName.length)];
}
/*source

https://stackoverflow.com/questions/1574008/how-to-simulate-target-blank-in-javascript
thank you stack overflow

*/