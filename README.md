### UniBaseTest

# Тестовое задание на позицию Junior Frontend Developer

## Часть 1 (Теория)

### Вопрос:

Написать, что выводит данный код. Предложить 2 варианта модификации кода, чтобы ответ был следующим: Bad: 10, Bad: 12, Good: 15, Good: 21

#### Код:

```javascript
const arr = [10, 12, 15, 21]

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```

## Часть 2 (Практика)

# Задачи:

Сверстать модальное окно без использования сторонних библиотек.
JavaScript функция для запроса данных и вывода их в таблицу.

# Решение:

Для решения практической части задания предоставлены следующие файлы:
index.html: содержит реализацию модального окна и таблицы.
style.css: файл со стилями для HTML.
script.js: JavaScript файл для запроса данных и создания таблицы без использования сторонних библиотек.

# Дополнительно:

Реализована мобильная адаптация и валидация формы в модальном окне.
Использована методология БЭМ для стилей.

Link:
[ubitable.netlify.app
](https://ubitable.netlify.app/)https://ubitable.netlify.app/
[[ubitable.netlify.app
](https://ubitable.netlify.app/)https://loquacious-blancmange-0b0598.netlify.app/
](https://ubimodal.netlify.app/)https://ubimodal.netlify.app/
