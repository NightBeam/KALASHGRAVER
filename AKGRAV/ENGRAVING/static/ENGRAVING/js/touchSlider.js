"use strict";

var listOfWeapons = document.querySelector(".list_of_weapons");
var elsListOfWeapons = listOfWeapons.querySelectorAll(".el_of_list_of_weapons");
var panelOfWeapons = document.querySelector(".changer_weapons");


let panelHeight = panelOfWeapons.clientHeight;
let panelWidth = panelOfWeapons.clientWidth;
let heightForElOfWeapons = (panelHeight * 0.6);
let marginTopForlistOfWeapons = (panelHeight * 0.4) / 2;
let distanceExampleOne = (panelWidth / (elsListOfWeapons.length + 1));
let distanceExampleTwo = (distanceExampleOne / (elsListOfWeapons.length + 1))
let distanceEndStart = distanceExampleTwo / 2
let count = 0;
let popravka = (marginTopForlistOfWeapons * 2 * elsListOfWeapons.length);
let arrayOfWeapons = [];
listOfWeapons.style.marginTop = marginTopForlistOfWeapons + "px";

for(let i of elsListOfWeapons){
    i.firstChild.style.height = heightForElOfWeapons + "px";
    arrayOfWeapons.push(i);
    if( count == 0){
        i.style.transitionDuration = '0.0s';
        i.style.marginLeft += (distanceEndStart + popravka / 2) + "px";
    }
    else if(count == (elsListOfWeapons.length - 1)){
        i.style.transitionDuration = '0.0s';
        i.style.marginLeft += distanceExampleTwo + popravka + "px";
        i.style.marginRight += (distanceEndStart + popravka / 2) + "px";
    }
    else{
        i.style.transitionDuration = '0.0s';
        i.style.marginLeft += distanceExampleTwo + popravka +  "px";
    }
    count++;
}



function UpdateDatas(){
    listOfWeapons = document.querySelector(".list_of_weapons");
    elsListOfWeapons = listOfWeapons.querySelectorAll(".el_of_list_of_weapons");
    panelOfWeapons = document.querySelector(".changer_weapons");

    arrayOfWeapons = [];
    for(let i of elsListOfWeapons){

        arrayOfWeapons.push(i);
    }
    for (let i in arrayOfWeapons){
        if(i == 0){
            elsListOfWeapons[i].style.transitionDuration = '0.0s';
            elsListOfWeapons[i].style.marginLeft = (distanceEndStart + popravka / 2) + "px";
            elsListOfWeapons[i].style.marginRight =  '0px';
        }
        else if(elsListOfWeapons[i] == (elsListOfWeapons.length - 1)){
            elsListOfWeapons[i].style.transitionDuration = '0.0s';
            elsListOfWeapons[i].style.marginLeft = distanceExampleTwo + popravka + "px";
            elsListOfWeapons[i].style.marginRight = (distanceEndStart + popravka / 2) + "px";
        }
        else{
            elsListOfWeapons[i].style.transitionDuration = '0.0s';
            elsListOfWeapons[i].style.marginLeft = distanceExampleTwo + popravka +  "px";
        }
    }
}


//arrowsSelected
function Previous(){
    var a = elsListOfWeapons[0];
    listOfWeapons.appendChild(a);
    UpdateDatas();
}
function Next(){
    listOfWeapons.insertBefore(elsListOfWeapons[elsListOfWeapons.length - 1],elsListOfWeapons[0]);
    UpdateDatas();
}