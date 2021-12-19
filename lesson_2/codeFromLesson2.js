//Prpmise

// let usersPromise = fetch('https://jsonplaceholder.typicode.com/users');

// usersPromise
//   .then((response) => {
//     return response.JSON();
//   })
//   .then((value) => {
//     value
//       .forEach((item) => {
//         let div = document.createElement('div');
//         div.innerHTML = item.username;
//         document.body.append(div);
//       })
//       .catch((earror) => console.log(error));
//   });

let photosPromise = fetch('https://jsonplaceholder.typicode.com/photos');

photosPromise
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((value) => {
    console.log(value);
    value.forEach((item) => {
      let img = document.createElement('img');
      img.src = item.url;
      img.width = 100;
      img.height = 100;
      document.body.append(img);
    });
  });
