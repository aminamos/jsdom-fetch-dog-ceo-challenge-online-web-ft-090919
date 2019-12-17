console.log('%c HI', 'color: firebrick');
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function challengeOne() {
  // fetch(imgUrl)
  // .then(resp => resp.json())
  // .then(json => console.log(json));

  fetch(imgUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      cOne(response.message);
    });
}

function challengeTwo() {
  fetch(breedUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      // cTwo(response.message);
      cTwo(Object.keys(response.message));
    });
}

function cOne(a) {
  a.forEach(function(element) {
    let newImgChild = document.createElement('img');
    newImgChild.src = element;
    document.getElementById('dog-image-container').appendChild(newImgChild);
  });
}

function cTwo(b) {
  b.forEach(function(element) {
    let newImgChild = document.createElement('li');
    newImgChild.innerHTML = element;
    document.getElementById('dog-breeds').appendChild(newImgChild);
    
  });
}

window.addEventListener('DOMContentLoaded', function() {
  challengeOne();
  challengeTwo();
});
