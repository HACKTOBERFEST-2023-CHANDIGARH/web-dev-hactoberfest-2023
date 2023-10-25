import data from "./data.js";

// console.log(data);


// Dom Elements
const marks = document.querySelectorAll(".get-score");
const title = document.querySelectorAll(".title")
const bgColor = document.querySelectorAll(".color")
const imgCollection = document.getElementsByTagName("img")


// json data
const eleData = data.map(function(x) {
    return x
})


// set marks
marks.forEach(function(x, i){
    x.textContent = eleData[i].score;
})


// set title
title.forEach(function(x, i) {
    x.textContent = eleData[i].category
})

// set color and background
bgColor.forEach(function(x, i) {
    x.style.background = eleData[i].background;
    x.style.color = eleData[i].color
})

//render the images from the data.js 
for(let i = 0 ; i < imgCollection.length; i++) {
    const img = imgCollection[i]
    img.setAttribute("src", eleData[i].icon)
}

