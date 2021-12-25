//1 Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

let donePromise = new Promise((resolve, reject) => {
  setTimeout(resolve('Success!'), 3000);
});

console.log(donePromise);

//2 Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).\

let errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error!')), 3000);
});

console.log(errorPromise);

//3 Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.

let allPromise = function getPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(ms / 1000), ms);
  });
};

Promise.all([allPromise(5000), allPromise(2000), allPromise(2000)]).then(
  (array) => {
    console.log(
      array.reduce((prev, item) => {
        return prev + item;
      }, 0)
    );
  }
);

//4 Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.

let dataUsers = fetch('https://jsonplaceholder.typicode.com/users');
dataUsers
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let filterUsers = data.filter((item) => item.id % 2 == 0);
    console.log(filterUsers);
  });

//5 Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1
//6 Дополнить задание 5. Добавить инпут и кнопку Поиск. Сделать так, чтобы по нажатию на кнопку поиска списке оставались только те карточки, которые соответствуют введенному тексту (фильтрацию проводить по имени, телефону, email).

let dataUsers2 = fetch('https://jsonplaceholder.typicode.com/users');

dataUsers2
  .then((response) => response.json())
  .then((data) => {
    getSearchUser(data);
  });

function getSearchUser(array) {
  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');
  const wrapper = document.createElement('div');
  input.type = 'search';
  button.type = 'submit';
  button.innerText = 'Search';
  form.append(input);
  form.append(button);
  document.body.append(form);
  wrapper.id = 'first';
  document.body.append(wrapper);

  array.map((item) => {
    const card = document.createElement('div');
    const name = document.createElement('p');
    const email = document.createElement('p');
    const phone = document.createElement('p');
    card.classList.add('card');
    name.innerText = item.name;
    email.innerText = item.email;
    phone.innerText = item.phone;
    card.append(name);
    card.append(email);
    card.append(phone);
    wrapper.append(card);
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const cards = document.querySelectorAll('.card');
    for (let item of cards) {
      item.classList.remove('hidden');
    }
    if (input.value == '') {
      alert('Введите критерий поиска');
    } else {
      for (let item of cards) {
        const itemChildren = item.children;
        for (let child of itemChildren) {
          if (child.innerText.toLowerCase() !== input.value.toLowerCase()) {
            item.classList.toggle('hidden');
          }
        }
      }
      input.value = '';
    }
  });
}

//7 Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2

let userId = prompt('Введите id пользоватея от 1 до 10');
let userTodoList = fetch(
  `https://jsonplaceholder.typicode.com/users/${userId}/todos`
);

userTodoList
  .then((response) => response.json())
  .then((data) => {
    getTodoList(data);
  });

function getTodoList(array) {
  const title = document.createElement('h1');
  const div = document.createElement('div');
  const todoList = document.createElement('ul');
  div.id = 'second';
  todoList.classList.add('listNone');
  title.innerText = `To-do-list User ${userId}`;
  document.body.append(title);

  for (let item of array) {
    const input = document.createElement('input');
    const userCase = document.createElement('li');
    input.type = 'checkbox';
    userCase.innerHTML = item.title;
    userCase.append(input);
    todoList.append(userCase);
    div.append(todoList);
  }
  document.body.append(div);
}

//8 Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото
// {
//   "albumId": 1,
//   "id": 4,
//   "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//   "url": "https://via.placeholder.com/600/d32776",
//   "thumbnailUrl": "https://via.placeholder.com/150/d32776"
// },
// Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3

let userPhotos = fetch('https://jsonplaceholder.typicode.com/albums/1/photos');

userPhotos
  .then((response) => response.json())
  .then((data) => getUserPhotos(data));

function getUserPhotos(array) {
  console.log(array);
  const div = document.createElement('div');
  div.id = 'three';
  array.forEach((item) => {
    const image = document.createElement('img');
    image.src = item.url;
    image.classList.add('imageHover');
    image.width = 100;
    image.height = 100;
    div.append(image);
  });
  document.body.append(div);

  div.addEventListener('click', (event) => {
    if ((event.target.tagName = 'img')) {
      let target = event.target;
      target.classList.toggle('imageScale');
    }
  });
}

//9 Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums, Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos). В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов. Вывести в html внутри div с id = 4

let url = 'https://jsonplaceholder.typicode.com/albums';
let urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

async function getData(url) {
  let response = await fetch(url);
  let data = await response.json();
  getAlbums(data);
}

async function getDataPhotos(url, id) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  document.body.innerHTML = '';
  getButton();
  getPhotos(data, id);
}

function getAlbums(array) {
  const title = document.createElement('h1');
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  title.innerText = 'Albums:';
  document.body.append(title);
  div.id = 'four';
  array.forEach((element) => {
    const a = document.createElement('a');
    const li = document.createElement('li');
    a.innerText = element.title;
    a.href = '';
    li.id = element.id;
    li.append(a);
    ul.append(li);
  });
  div.append(ul);
  document.body.append(div);

  ul.addEventListener('click', (event) => {
    event.preventDefault();
    if ((event.target.tagName = 'li')) {
      // let idAlbum = event.target.id;
      let idAlbum = 1;
      console.log(idAlbum);
      getDataPhotos(urlPhotos, idAlbum);
    }
  });
}

function getButton() {
  const btn = document.createElement('button');
  btn.innerText = 'Back to album list';
  document.body.append(btn);
  btn.addEventListener('click', () => {
    document.body.innerHTML = '';
    getData(url);
  });
}

function getPhotos(array, id) {
  const div = document.createElement('div');
  array.forEach((element) => {
    if (element.albumId == id) {
      const image = document.createElement('img');
      div.classList.add('getPhotos');
      image.src = element.thumbnailUrl;
      div.append(image);
    }
  });
  document.body.append(div);
}

getData(url);
