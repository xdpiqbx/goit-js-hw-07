/*
    Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

    Создай переменную counterValue в которой будет хранится текущее значение счетчика.
    Создай функции increment и decrement для увеличения и уменьшения значения счетчика
    Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/
/*
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/
  const refDivCounter = document.querySelector("#counter")

  const buttonDecrement = refDivCounter.querySelector("[data-action=decrement]")
  const buttonInrement = refDivCounter.querySelector("[data-action=increment]")

  const spanValue = refDivCounter.querySelector("#value")
  let counterValue = parseInt(spanValue.textContent);
  
  function increment(){
    counterValue += 1;
    spanValue.textContent = counterValue;
  }
  
  function decrement(){
    counterValue -= 1;
    spanValue.textContent = counterValue;
  }

  buttonDecrement.addEventListener("click", decrement)
  buttonInrement.addEventListener("click", increment)