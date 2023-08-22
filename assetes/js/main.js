"use strict";
// забрати елемент з id="text" в змінну
// зробити зворотній виклик від 10 до 1 - числа повинні
// змінюватися через секунду setInterval(функція яка змінює
// вміст елемента і зменшує число, 1000)
// коли дійшли до 0 - зупинитися - перевіряємо коли робити clearInterval

const h1 = document.getElementById("text");

function counter() {
    let count = Number(h1.innerText);
    //let count = 10;
    const interval = setInterval(() => {
      count--;
      h1.innerText = count;
      if (count === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  counter();


