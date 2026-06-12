// const p = document.querySelector('p');

// console.log(p);

// classes

// const pic = document.querySelector('.nice');
// pic.classList.add('open');
// pic.classList.remove('cool');
// pic.classList.toggle('round');
// console.log(pic.classList);

const list = document.createElement('ul');

const listItemOne = document.createElement('li');
const listItemTwo = document.createElement('li');
const listItemThree = document.createElement('li');
const listItemFour = document.createElement('li');
const listItemFive = document.createElement('li');

listItemOne.insertAdjacentHTML('afterbegin', 'One');
listItemTwo.insertAdjacentHTML('afterbegin', 'Two');
listItemThree.insertAdjacentHTML('afterbegin', 'Three');
listItemFour.insertAdjacentHTML('afterbegin', 'Four');
listItemFive.insertAdjacentHTML('afterbegin', 'Five');

list.appendChild(listItemOne);
list.appendChild(listItemTwo);
list.appendChild(listItemThree);
list.appendChild(listItemFour);
list.appendChild(listItemFive);

console.log(list);

document.body.appendChild(list);
