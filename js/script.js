"use strict"

let isSelected = false;
let selectedObj;
let swapw = false;
let swapb = false;
let oldTarget;
let wplaying = true;
let placesCanPlay = [];

document.addEventListener("click", (event) => {

    if (isSelected) {

        if (event.target.className === "whole") {
            console.log("hello");
            isSelected = false;
            selectedObj = undefined;
            oldTarget.style.background = `${oldTarget.className}`;
            oldTarget = undefined;
            placesCanPlay = [];

        }


        else if ((event.target.className === "black" || event.target.className === "white")) {
            if(selectedObj.className.includes('sz') || selectedObj.className.includes('cz')){
                placesCanPlay.pop(placesCanPlay[length - 1]);
                placesCanPlay.pop(placesCanPlay[length - 2]);
            }
          
            for (let i = 0; i < placesCanPlay.length; i++) {
                console.log(event.target.id);
                if (placesCanPlay[i] === Number.parseInt(event.target.id)) {
                    isSelected = false;
                    event.target.appendChild(selectedObj);
                    oldTarget.innerHTML = ``;
                    oldTarget.style.background = `${oldTarget.className}`;
                    placesCanPlay = [];
                    wplaying = !wplaying;
                    break;
                }
                
            }
            
        }
        else if (event.target.className.includes("fig") && event.target.parentNode.id!==selectedObj.parentNode.id && ((event.target.className.includes("w") && selectedObj.className.includes("b")) || (event.target.className.includes("b") && selectedObj.className.includes("w")))) {
            if (selectedObj.className.includes('cz') ||  selectedObj.className.includes('sz')) { // zinvori hamar
                for (let i = placesCanPlay.length - 2; i < placesCanPlay.length; i++) {
                    console.log(event.target.id);
                    if (placesCanPlay[i] === Number.parseInt(event.target.parentNode.id)) {
                        isSelected = false;
                        event.target.className = selectedObj.className;
                        oldTarget.innerHTML = ``;
                        oldTarget.style.background = `${oldTarget.className}`;
                        placesCanPlay = [];
                        wplaying = !wplaying;
                    }
                }
            }
          
            else{
                for(let i = 0;i<placesCanPlay.length;i++){
                    if (placesCanPlay[i] === Number.parseInt(event.target.parentNode.id)) {
                        isSelected = false;
                        event.target.className = selectedObj.className;
                        oldTarget.innerHTML = ``;
                        oldTarget.style.background = `${oldTarget.className}`;
                        placesCanPlay = [];
                        wplaying = !wplaying;
                    }
                }
            }
        }
    }
    else {
        
        if (event.target.className.includes("fig") && ((wplaying===true && event.target.className.includes("c")) ||(wplaying===false && event.target.className.includes("s")) )) {
         
            isSelected = true;
            selectedObj = event.target;
            oldTarget = event.target.parentNode;
            oldTarget.style.background = "green";
            if (selectedObj.className.includes("cz") && wplaying) {
                let id = selectedObj.parentNode.id;

                if (id[0] === '2') {
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id) + 10, Number.parseInt(selectedObj.parentNode.id) + 20);
                }
                else {
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id) + 10);

                }
                placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id) + 9, Number.parseInt(selectedObj.parentNode.id) + 11);
                console.log(placesCanPlay);
            }
            else if (selectedObj.className.includes("sz")) {
                let id = selectedObj.parentNode.id;

                if (id[0] === '7') {
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id) - 10, Number.parseInt(selectedObj.parentNode.id) - 20);
                }
                else {
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id) - 10);

                }
                placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id) - 9, Number.parseInt(selectedObj.parentNode.id) - 11);
                console.log(placesCanPlay);
            }
            else if(selectedObj.className.includes("sn") ||(selectedObj.className.includes("cn") && wplaying)){
                let id = selectedObj.parentNode.id[1];
                id = Number.parseInt(id);
                for(let i = id;i<8;i++){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+i);
                }
                for(let i = id;i>1;i--){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)-i);
                }
                for(let i = 10;i<=80;i+=10){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+i,Number.parseInt(selectedObj.parentNode.id)-i);
                }
            }
            else if(selectedObj.className.includes("sd") || selectedObj.className.includes("cd")){
                placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+21,Number.parseInt(selectedObj.parentNode.id)+19,Number.parseInt(selectedObj.parentNode.id)-21,Number.parseInt(selectedObj.parentNode.id)-19,Number.parseInt(selectedObj.parentNode.id)+12,Number.parseInt(selectedObj.parentNode.id)+8,Number.parseInt(selectedObj.parentNode.id)-12,Number.parseInt(selectedObj.parentNode.id)-8);
            
            }
            else if(selectedObj.className.includes("sp") || selectedObj.className.includes("cp")){
                for(let i = 11;i<99;i+=11){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+i,Number.parseInt(selectedObj.parentNode.id)-i);
                }
                for(let i = 9;i<81;i+=9){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+i,Number.parseInt(selectedObj.parentNode.id)-i);
                }
                console.log(placesCanPlay);
            }
            else if(selectedObj.className.includes("st") || selectedObj.className.includes("ct")){
                for(let i = 11;i<99;i+=11){

                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+i,Number.parseInt(selectedObj.parentNode.id)-i);
                }
                for(let i = 9;i<81;i+=9){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+i,Number.parseInt(selectedObj.parentNode.id)-i);
                }
                let id = selectedObj.parentNode.id[1];
                id = Number.parseInt(id);
                for(let i = id;i<8;i++){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+i);
                }
                for(let i = id;i>1;i--){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)-i);
                }
                for(let i = 10;i<=80;i+=10){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+i,Number.parseInt(selectedObj.parentNode.id)-i);
                }

            }
            else if(selectedObj.className.includes("sa") || selectedObj.className.includes("ca")){
                
                let id = selectedObj.parentNode.id[1];
                id = Number.parseInt(id);
                placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+10,Number.parseInt(selectedObj.parentNode.id)-10);
                if(id===8)
                  {
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)-1,Number.parseInt(selectedObj.parentNode.id)+9,Number.parseInt(selectedObj.parentNode.id-11));
                      
                  }
                  else if(id===1){
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)+1,Number.parseInt(selectedObj.parentNode.id)+11,Number.parseInt(selectedObj.parentNode.id-9));
                  }
                  else{
                    placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)-1,Number.parseInt(selectedObj.parentNode.id)+1,Number.parseInt(selectedObj.parentNode.id-11),Number.parseInt(selectedObj.parentNode.id)+11,Number.parseInt(selectedObj.parentNode.id-9),Number.parseInt(selectedObj.parentNode.id)+9,Number.parseInt(selectedObj.parentNode.id-11));
                  }
                  placesCanPlay.push(Number.parseInt(selectedObj.parentNode.id)-2,Number.parseInt(selectedObj.parentNode.id)+3);
                    
                  
                  
                   
                  
            }
        }
    }
});
