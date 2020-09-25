/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
подставляет его текущее значение в span#name-output.
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/

const refInput = document.querySelector("#name-input")
const refSpan = document.querySelector("#name-output")

const placeholder = refSpan.textContent;

const nameRes = (e)=> {
    if(e.target.value.length === 0){
        refSpan.textContent = placeholder
    }else{
        refSpan.textContent = e.target.value;
    }
}

refInput.addEventListener("input", nameRes)