### Исходный код:

```javascript
const arr = [10, 12, 15, 21]

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```

## Result:

Bad: undefined

## Modify function

# v1

в первом случае мы меняем var на let тем самым запрещаем всплытие var т,к он имеет глобальную область видимости

```javascript
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```

# v2

во втором случае мы присваиваем value = arr[i] тем самым выводит свои результаты каждый раз при проходе цикла;

```javascript
for (var i = 0; i < arr.length; i++) {
  const value = arr[i]
  setTimeout(() => {
    console.log(value > 13 ? `Good: ${value}` : `Bad: ${value}`)
  }, 3000)
}
```
