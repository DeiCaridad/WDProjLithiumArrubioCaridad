import { Events } from './arrayList.js';

function textChange(){
    let eventName = Events.map(events => events.name);
    let eventType = Events.map(events => events.eventType);
    let eventImage = Events.map(events => events.image)

    let disp1 = Math.floor(Math.random() * eventName.length);
    let disp2 = Math.floor(Math.random() * eventName.length);
    let disp3 = Math.floor(Math.random() * eventName.length);
    let disp4 = Math.floor(Math.random() * eventName.length);

    if(disp1 == disp2 || disp1 == disp3 || disp1 == disp4){
        disp1 = Math.floor(Math.random() * eventName.length);
    }
    if(disp2 == disp1 || disp2 == disp3 || disp2 == disp4){
        disp2 = Math.floor(Math.random() * eventName.length);
    }
    if(disp3 == disp1 || disp3 == disp2 || disp3 == disp4){
        disp3 = Math.floor(Math.random() * eventName.length);
    }
    if(disp4 == disp1 || disp4 == disp2 || disp4 == disp3){
        disp4 = Math.floor(Math.random() * eventName.length);
    }

    let textTop1 = eventName[disp1];
    let textTop2 = eventName[disp2];
    let textTop3 = eventName[disp3];
    let textTop4 = eventName[disp4];

    let image1 = eventImage[disp1];
    let image2 = eventImage[disp2];
    let image3 = eventImage[disp3];
    let image4 = eventImage[disp4];

    let con1 = document.getElementById("con1");
    let con2 = document.getElementById("con2");
    let con3 = document.getElementById("con3");
    let con4 = document.getElementById("con4");

    // css portion for each image type
    con1.style.backgroundRepeat = "no-repeat";
    con1.style.backgroundPosition = "center";
    con1.style.backgroundSize = "cover";

    con2.style.backgroundRepeat = "no-repeat";
    con2.style.backgroundPosition = "center";
    con2.style.backgroundSize = "cover";

    con3.style.backgroundRepeat = "no-repeat";
    con3.style.backgroundPosition = "center";
    con3.style.backgroundSize = "cover";

    con4.style.backgroundRepeat = "no-repeat";
    con4.style.backgroundPosition = "center";
    con4.style.backgroundSize = "cover";

    con1.style.backgroundImage = `url("${image1}")`;
    con2.style.backgroundImage = `url("${image2}")`;
    con3.style.backgroundImage = `url("${image3}")`;
    con4.style.backgroundImage = `url("${image4}")`;
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