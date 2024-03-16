let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let copyDiv = document.querySelector('.bg-code');
let rgb1 = '#051937';
let rgb2 = '#A8EB12';

const getHexCode = () => {
    let hexaValue = '0123456789abcdef';
    let color = '#';
    for (let i = 1; i <= 6; i++) {
        color += hexaValue[(Math.floor(Math.random() * 16))];
    }
    return color;

}
const handleBtn1 = () => {
    rgb1 = getHexCode();
    btn1.innerHTML = rgb1;
    btn1.style.backgroundColor = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right top, ${rgb1},${rgb2})`
}
const handleBtn2 = () => {
    rgb2 = getHexCode();
    btn2.innerHTML = rgb2;
    btn2.style.backgroundColor = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right top, ${rgb1},  ${rgb2})`
}
copyDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(copyDiv.innerText);
})

btn1.addEventListener('click', handleBtn1);
btn2.addEventListener('click', handleBtn2);
