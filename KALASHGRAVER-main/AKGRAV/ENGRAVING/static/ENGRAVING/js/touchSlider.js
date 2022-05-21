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
let distanceEndStart = distanceExampleTwo / 2;
let arrayOfWeapons = [];

for(let i of elsListOfWeapons){
    i.firstChild.style.height = heightForElOfWeapons + "px";
    i.firstChild.style.width = heightForElOfWeapons * 3 + "px";
    i.style.marginTop = marginTopForlistOfWeapons + "px";
    i.style.transitionDuration = '0.0s';
    i.style.marginLeft = (panelOfWeapons.clientWidth - (i.clientWidth * elsListOfWeapons.length)) / (elsListOfWeapons.length + 1) + "px";
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
            elsListOfWeapons[i].style.marginLeft = (panelOfWeapons.clientWidth - (elsListOfWeapons[i].clientWidth * elsListOfWeapons.length)) / (elsListOfWeapons.length + 1) + "px";

        }
        else if(elsListOfWeapons[i] == (elsListOfWeapons.length - 1)){
            elsListOfWeapons[i].style.transitionDuration = '0.0s';
            elsListOfWeapons[i].style.marginLeft = (panelOfWeapons.clientWidth - (elsListOfWeapons[i].clientWidth * elsListOfWeapons.length)) / (elsListOfWeapons.length + 1) + "px";
        }
        else{
            elsListOfWeapons[i].style.transitionDuration = '0.0s';
            elsListOfWeapons[i].style.marginLeft = (panelOfWeapons.clientWidth - (elsListOfWeapons[i].clientWidth * elsListOfWeapons.length)) / (elsListOfWeapons.length + 1) + "px";
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