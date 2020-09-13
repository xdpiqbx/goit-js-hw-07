/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const input = document.querySelector("#validation-input")

const validation = (e) => {
    input.classList.remove("invalid")
    input.classList.remove("valid")

    if (e.target.value.length == 0){
      return;
    }  

    if (input.getAttribute("data-length") == e.target.value.length){
        input.classList.add("valid")
    }else{
        input.classList.add("invalid")
    }
}

input.addEventListener("blur", validation);