//HM Function

//1 Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.

function getSum(...arguments){
  let sum=0;
  for(let arg of arguments){
    sum+=arg;
  }
  return sum;
}
console.log(getSum(1,2,3));

//2 Написать функцию, которая принимает первым аргументом массив,а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.(indexOf, findIndex не использовать)

let findIndexValue = (array, value) => array.indexOf(value);
console.log(findIndexValue(['hello', 'world', 5, 3], 'hello'));

//3 Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате. (Использовать замыкание)

function getCount() {
  let count = 0;
  return function () {
    return Math.pow(count++, 2);
  };
}

let count = getCount();
console.log(count());
console.log(count());
console.log(count());

//4 Напишите функцию, которая разделит массив на части заданного размера и вернет массив элементами которого являются эти части. Пример функции: splitArray ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function splitArray(array, size) {
  let arrayLength = array.length;
  let newArray = [];
  for (let i = 0; i < arrayLength / size; i++) {
    let partArray = array.splice(0, size);
    newArray.push(partArray);
    partArray = [];
  }
  return newArray;
}

console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

//5 Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире) Например: 'Hello World' -> 'hello-world'; 'Hello dear hell' -> 'hello-dear-hell'

function getKebab(str) {
  let array = str.split('');
  let newStr = array
    .map((item) => {
      if (item === ' ') {
        return (item = '-');
      } else if (item < item.toLowerCase()) {
        return item.toLowerCase();
      }
      return item;
    })
    .join('');
  console.log(newStr);
}

getKebab('Hello World and people');
