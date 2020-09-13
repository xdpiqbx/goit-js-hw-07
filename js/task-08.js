/*
Задание 8 - дополнительное, выполнять не обязательно
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать,
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
*/

const controls = document.querySelector("#controls")

const render = controls.querySelector("[data-action=render]")
const destroy = controls.querySelector("[data-action=destroy]")

const divBoxes = document.querySelector("#boxes")

const defauSize = 30

let size = defauSize

const createBoxes = (amount) => {
    for(let i = 0; i < amount; i += 1){
        const div = document.createElement("div")
        div.style.width = `${size}px`
        div.style.height = `${size}px`
        div.style.margin = "4px"
        div.style.backgroundColor = randomColor()
        divBoxes.insertAdjacentElement("beforeend", div)
        size += 10
    }
}

const randomColor = () => {
    return `rgb(
            ${parseInt(Math.random() * (255 - 1) + 1)}, 
            ${parseInt(Math.random() * (255 - 1) + 1)}, 
            ${parseInt(Math.random() * (255 - 1) + 1)}
        )`
}

const renderFunction = () => {
    //destroyBoxes()
    const input = controls.querySelector("input")
    createBoxes(input.value)
    input.value = ""
}

const destroyBoxes = () => {
    const boxes = divBoxes.querySelectorAll("div")
    for(let box of boxes){
        box.remove()
    }
    size = defauSize
}

randomColor()
render.addEventListener("click", renderFunction)
destroy.addEventListener("click", destroyBoxes)


