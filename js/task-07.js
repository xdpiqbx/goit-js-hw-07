/* 
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
и изменяет инлайн-стиль span#text обновляя свойство font-size.
В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<span id="text">Абракадабра!</span>
*/

const input = document.querySelector("#font-size-control")
const spanText = document.querySelector("#text")


const changeTextSize = (event) => {
    spanText.style.fontSize = `${event.target.value/25}em`;
}

input.addEventListener("input", changeTextSize);