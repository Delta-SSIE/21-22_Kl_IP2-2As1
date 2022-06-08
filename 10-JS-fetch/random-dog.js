const image = document.getElementById('photo');

function fetchImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(x => x.json())
  .then(function(obj) {
    image.src = obj.message;
    let parts = obj.message.split('/');
    image.alt = image.title = parts[4];
    console.log(parts);
  });
}

document.getElementById('btn').addEventListener('click', fetchImage);
fetchImage();
