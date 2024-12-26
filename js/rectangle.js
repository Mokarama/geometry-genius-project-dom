
function calculateRectangleArea(){
// get lenght oF the rectangle ..
    // console.log('calculate rect area');
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);




// get width oF the rectangle ..
function rectangleArea(){
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

}

// calculate rectangle area ...

const area = length * width ;
console.log('area of the rectangle: ', area);

// disply rectangle area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText= area;
}