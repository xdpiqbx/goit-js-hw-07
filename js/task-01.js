/*
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item. Получится 'В списке 3 категории.'.
*/
const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll(".item");
console.log(`В списке ${items.length} категории`);

/*
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
Например для первой категории получится:
Категория: Животные
Количество элементов: 4
*/
for (let item of items){
    console.log(`Категория: ${item.querySelector('h2').innerText}`)
    for (let li of item.querySelectorAll("ul")){
        console.log(`Количество элементов: ${li.querySelectorAll("li").length}`)
    }
}


/* Вывод в браузер ============================================================ */
const consoleDiv = document.querySelector("#console")

const subTask1 = document.createElement("div")
subTask1.classList.add("sub-task-1")

const subTask2 = document.createElement("div")
subTask2.classList.add("sub-task-2")

subTask1.insertAdjacentHTML('beforeend', `<pre>В списке ${items.length} категории</pre>`)

for (let item of items){
    let text = `<pre>Категория: ${item.querySelector('h2').innerText}<br>`
    for (let li of item.querySelectorAll("ul")){
        text += `Количество элементов: ${li.querySelectorAll("li").length}</pre>`
    }
    subTask2.insertAdjacentHTML('beforeend', text)
}

consoleDiv.insertAdjacentElement("beforeend", subTask1)
consoleDiv.insertAdjacentElement("beforeend", subTask2)