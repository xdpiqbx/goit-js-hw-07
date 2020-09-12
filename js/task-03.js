//https://www.youtube.com/watch?v=-qfbP5mM9MM&feature=youtu.be
//https://github.com/goitacademy/javascript-homework/tree/master/homework-07

/*
Напиши скрипт для создания галлереи изображений по массиву данных.
В HTML есть список ul#gallery.

Используй массив объектов images для создания тегов img вложенных в li.
Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
*/

const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];

function makeGallery (array, selector){
    const ul = document.querySelector(selector);

    array.forEach(arrObj => {
        const li = document.createElement("li")
        const img = document.createElement("img")

        li.classList.add("gallery-list-item")

        img.setAttribute("src", arrObj.url)
        img.setAttribute("alt", arrObj.alt)
        img.classList.add("gallery-list-item-image")

        li.insertAdjacentElement('beforeend', img);
        ul.insertAdjacentElement('beforeend', li);
    });
}

makeGallery(images, '#gallery')