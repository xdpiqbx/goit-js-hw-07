/*
В HTML есть пустой список ul#ingredients.
    <ul id="ingredients"></ul>

В JS есть массив строк.
*/
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
/*
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
после чего вставит все li за одну операцию в список ul.ingredients.
Для создания DOM-узлов используй document.createElement().
*/

function makeList (array, selector){
    const ul = document.querySelector(selector);
    let allLi = "";
    array.forEach(arrTextElement => {
        const li = document.createElement("li");
        li.textContent = arrTextElement
        allLi += li.outerHTML
    })
    ul.insertAdjacentHTML("beforeend", allLi);
}

makeList(ingredients, '#ingredients')