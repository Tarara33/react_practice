const h1Element = document.querySelector('h1');
console.log(h1Element)

h1Element.textContent = 'MERA'

const hello =(e) => {
  console.log('hello!');
  console.log(e.target)
};

const btnEL = document.querySelector('button');
btnEL.addEventListener('click',hello);