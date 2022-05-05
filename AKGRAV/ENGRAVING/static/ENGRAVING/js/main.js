"use strict"

function ShowElementsCO(el){
    let elCO = document.querySelectorAll('#el_of_block_of_changer_outfit');
    for (let i of elCO[el].querySelectorAll("#el_of_changer_outfit")){
        if(i.style.opacity == 0.0){
            i.style.opacity = 1.0;
            i.style.display = "block";
        }
        else if(i.style.opacity == 1.0){
            i.style.opacity = 0.0;
            i.style.display = "none";
        }
    }
}