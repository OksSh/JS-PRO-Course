//HM Function*********************************************************************

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
console.log(findIndexValue(['hello', 'world', 5, 3], 'hello')); //2-ое решение см. HM Array №10

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

//HM Array************************************************************************

//№1 Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].

let array = [5, 3, 6, 7, 5, 1, 2, 3, 9, 10];
let newArray = array.map((item) => item * item);
console.log(newArray);

//№2 Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

let array2 = [5, 0, 7, 4, 2, 3, 20, 3, 9];
let sumArray = array2.reduce((sum, item) => (sum += item), 0);
console.log(sumArray);

//№3 Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

let str = '56951544667866';
function getNewStr(str) {
  let array3 = str.split('');
  let array4 = [];
  for (let i = 0; i < array3.length; i++) {
    array4.push(array3[i]);
    if (array3[i + 1] % 2 === 0) {
      array4.push(':');
    }
  }
  return array4.join('');
}

console.log(getNewStr(str));

//№4 Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.

let array5 = [1, 5, 6, 8, 7];
let array6 = [5, 3, 2, 8, 6, 1, 4, 8, 9];

function getDifference(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i] - arr2[i];
    newArray.push(item);
  }
  if (arr1.length > arr2.length) {
    for (let i = arr2.length; i < arr1.length; i++) {
      newArray.push(arr1[i]);
    }
  }
  if (arr2.length > arr1.length) {
    for (let i = arr1.length; i < arr2.length; i++) {
      newArray.push(arr2[i]);
    }
  }
  return newArray;
}

console.log(getDifference(array5, array6));

//№5 Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

let array7 = [8, 9, 10, 5, 15, 64, 12];
let array8 = [100, 5, 8, 51, 5];

function getSumArray(arr1, arr2) {
  let array =
    arr1.length < arr2.length
      ? arr1.map((item, index) => item + arr2[index])
      : arr2.map((item, index) => item + arr1[index]);
  let newArray =
    arr1.length < arr2.length
      ? array.concat(arr2.splice(arr1.length, arr2.length - arr1.length))
      : array.concat(arr1.splice(arr2.length, arr1.length - arr2.length));
  return newArray;
}

console.log(getSumArray(array7, array8));

//№6 Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

let array9 = [1, 6, 68, 9, 12, 56];
console.log(array9.reverse());

//№7 Фильтр юзеров Создать массив объектов для юзеров. Пример:[{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]. Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

let users = [
  { name: 'Ivan', age: 18 },
  { name: 'Anna', age: 30 },
  { name: 'Petr', age: 12 },
  { name: 'Irina', age: 10 },
  { name: 'Nikolay Petrovich', age: 95 },
];

function getListUserAge(array) {
  let adultsArray = [];
  let youngArray = [];
  array.forEach((element) => {
    if (element.age >= 18) {
      adultsArray.push(element);
    } else {
      youngArray.push(element);
    }
  });
  return [adultsArray, youngArray];
}
console.log(getListUserAge(users));

//№8 Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

let array10 = [5, 5, 8, 6, 8, 6, 9, 10, 1, 1, 7, 7, 7, 0, 3, 4, 6];
let array11 = array10.filter((item, index) => array10.indexOf(item) == index);
console.log(array11);

//№9 Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

let str2 = 'шалаш';
function palindrome(str) {
  let result = str.split('').reverse().join('') ? true : false;
  return result;
}

console.log(palindrome(str2));

//№10 Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)

let array12 = [1, 2, 'hello', 'js', 12, 7, 1, 1];

function getIndexArray(array, element) {
  let arrayIndex = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      arrayIndex.push(i);
    }
  }
  if (arrayIndex.length > 0) {
    console.log(
      `Элемент '${element}' в массиве есть, его индекс: ${arrayIndex.join(
        ','
      )}.`
    );
  } else console.log(`Элемента '${element}' нет в массиве.`);
}

getIndexArray(array12, 1);

//№11 Написать функцию search, которая принимает первым аргументом массив имен:[ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например: search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']; search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']; search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']; search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> []

let array13 = ['Sidor', 'Petr', 'Ivan', 'Petric'];

function getFilterArray(array, item) {
  let newArray = [];
  array.forEach((element) => {
    if (element.toLowerCase().indexOf(item.toString().toLowerCase()) >= 0) {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(getFilterArray(array13, 'et'));

//№12 Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример: checkIsEqaul([1,2,3], [1,2,3]) -> true; checkIsEqaul([1,2,3], [1,2,3,4]) -> false; checkIsEqaul([1,2,3], [1,'2',3]) -> false

let array14 = [1, 2, 3];
let array15 = [1, '2', 3];

function compareArray(arr1, arr2) {
  let result = true;
  stop: for (let i = 0; i <= arr1.length; i++) {
    result = arr1[i] === arr2[i];
    if (result === false) {
      break stop;
    }
  }
  return result;
}

console.log(compareArray(array14, array15));

//HW Classes************************************************************************

//1 Создать класс счетчика, который будет иметь поле count - значение счетчика. Объект класса будет иметь следующие методы: метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.

class Counter {
  constructor(value) {
    this.count = value;
  }

  getIncrement() {
    return this.count++;
  }

  getDecrement() {
    return this.count--;
  }

  getCount() {
    return this.count;
  }
}

let getCounter = new Counter(0);
getCounter.getIncrement();
getCounter.getIncrement();
getCounter.getIncrement();
getCounter.getDecrement();
console.log(getCounter.count);

//2 Реализуйте класс Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя), secondName (фамилия), rate (ставка за день работы), days (количество отработанных дней) сountOfDetails(количество выполненных деталей). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays, каждый из которых будет возвращать соответствующее поле в объекте. И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days. Добавить метод, который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0

class Worker {
  constructor(name, secondName, rate, days, countOfDetails) {
    this.name = name;
    this.secondName = secondName;
    this._rate = rate;
    this._days = days;
    this.countOfDetails = countOfDetails;
  }

  getSalary() {
    return this.rate * this.days;
  }

  getName() {
    return this.name;
  }

  getSecondName() {
    return this.secondName;
  }

  getRate() {
    return this.rate;
  }

  getDays() {
    return days;
  }

  getCountOfDetails() {
    return this.countOfDetails;
  }

  getCounetDetails() {
    return this.countOfDetails++;
  }

  resetDetails() {
    this.countOfDetails = 0;
  }

  get rate() {
    return this._rate;
  }

  set rate(valueRate) {
    if (valueRate !== this._rate) {
      this._rate = valueRate;
    }
  }

  get days() {
    return this._days;
  }

  set days(valueDays) {
    if (valueDays !== this._days) {
      this._days = valueDays;
    }
  }
}

let employee = new Worker('Bob', 'Smith', 200, 22, 565);
console.log(employee);
employee.days = 100;
employee.rate = 180;
employee.name = 'Pet';
console.log(employee);
console.log(employee.getName());
employee.resetDetails();
console.log(employee);

//3 Реализуйте класс MyString, объект которого будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
  reverse(str) {
    return str.split('').reverse().join('');
  }

  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  ucWords(str) {
    let array = str.split(' ');
    console.log(array);
    let newArray = [];
    for (let element of array) {
      let word = element[0].toUpperCase() + element.slice(1);
      newArray.push(word);
      console.log(word);
    }
    return newArray.join(' ');
  }
}

let string = new MyString();
console.log(string.ucWords('hello world'));
console.log(string.ucFirst('hello world'));
console.log(string.reverse('hello world'));

//4 Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы: getFullName, getEmail.

class User {
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  getEmail() {
    return this.email;
  }
}

let user1 = new User('Ivan', 'Ivanov', 'ivanivanov@gmail.com');
console.log(user1.getFullName());
console.log(user1.getEmail());

//5 Реализуйте класс Student, который будет наследовать класс User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let student1 = new Student('Anna', 'Petrova', 2019);
console.log(student1.getFullName());
console.log(student1.getCourse());
