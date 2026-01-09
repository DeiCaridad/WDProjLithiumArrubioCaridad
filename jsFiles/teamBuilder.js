/*
idea: have t/f variable and while false it has + as default image
set to true after picked variable is set to true
*/

function selectGeneration(genNum){
    genNumInp = genNum;
    
    document.getElementById("dropdownGen").textContent = genNumInp;
    return(genNumInp);
}

function selectMode(modeType){
    modeTypeInp = modeType;
    
    document.getElementById("dropdownMode").textContent = modeTypeInp;
    return(modeTypeInp);
}

function selectShiny(shinyType){
    shinyTypeInp = shinyType;
    
    document.getElementById("dropdownShiny").textContent = shinyTypeInp;
    return(shinyTypeInp);
}

function selectSpriteType(spriteType){
    spriteTypeInp = spriteType;
    
    document.getElementById("dropdownSpriteType").textContent = spriteTypeInp;
    return(spriteTypeInp);
}

function openSelector(cardLocation){
    
}