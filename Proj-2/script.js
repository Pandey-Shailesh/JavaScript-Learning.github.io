const red =document.querySelector(".red");
const orange =document.querySelector(".orange");
const green =document.querySelector(".green");
const violet =document.querySelector(".violet");
const yellow =document.querySelector(".yellow");

const center =document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);
// console.log(window.getComputedStyle(orange).backgroundColor);
// console.log(window.getComputedStyle(green).backgroundColor);
// console.log(window.getComputedStyle(violet).backgroundColor);
// console.log(window.getComputedStyle(yellow).backgroundColor);


const getBGColor = (selectedElement) =>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBGColor(red));

// var orangeElement =getBGColor(green);
// orange.addEventListener("mouseenter",() => {
//     center.style.background = orangeElement;
// });


const magicColorChanger = (element,color)=>{
    return element.addEventListener("mouseenter",() => {
            center.style.background = color;
        });
};
magicColorChanger(red, getBGColor(red));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(green, getBGColor(green));
magicColorChanger(yellow, getBGColor(yellow));
magicColorChanger(violet, getBGColor(violet));
