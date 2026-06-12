// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const listItemOne = document.createElement('li');
const listItemTwo = document.createElement('li');
const listItemThree = document.createElement('li');

listItemOne.insertAdjacentHTML('afterbegin', 'One');
listItemTwo.insertAdjacentHTML('afterbegin', 'Two');
listItemThree.insertAdjacentHTML('afterbegin', 'Three');

list.appendChild(listItemOne);
list.appendChild(listItemTwo);
list.appendChild(listItemThree);

// put that list into the above wrapper
div.appendChild(list);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://placeholdit.com/250x240/dddddd/999999';

// set the width to 250
img.width = '250'

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(img);

const paraOne = `<p>Minions ipsum baboiii belloo! Jeje aaaaaah. Butt pepete tatata bala tu hahaha jeje jiji underweaaar uuuhhh uuuhhh bee do bee do bee do. Chasy ti aamoo! Underweaaar poulet tikka masala. La bodaaa tulaliloo gelatooo poopayee bee do bee do bee do underweaaar. Daa ti aamoo! Potatoooo para tú poopayee bappleees aaaaaah hana dul sae me want bananaaa! Ti aamoo! Tatata bala tu.</p>`;

const paraTwo = `<p class="warning">Butt po kass tatata bala tu poopayee. Hana dul sae bananaaaa uuuhhh chasy. Jeje uuuhhh tatata bala tu tank yuuu! Belloo! poulet tikka masala gelatooo bappleees tulaliloo uuuhhh pepete. Bee do bee do bee do poulet tikka masala jeje me want bananaaa! Butt wiiiii tank yuuu! Hahaha bappleees pepete uuuhhh.</p>`;

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div>
        ${paraTwo}
    </div>
`;

// put this div before the unordered list from above
// add a class to the second paragraph called warning

// remove the first paragraph
div.insertAdjacentHTML('afterbegin', myHTML);

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const playerCard = `<div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
    </div>`;

  return playerCard;
}

// make a new div with a class of cards
const cardWrapper = document.createElement('div');

cardWrapper.classList.add('cards');

// make 4 player cards using generatePlayerCard
const playerOne = generatePlayerCard('Jordan', 41, '187.96cm');
const playerTwo = generatePlayerCard('Nat', 42, '187.96cm');
const playerThree = generatePlayerCard('Jacob', 11, '187.96cm');
const playerFour = generatePlayerCard('Layla', 9, '187.96cm');

// append those cards to the div
cardWrapper.insertAdjacentHTML('afterbegin', playerOne);
cardWrapper.insertAdjacentHTML('afterbegin', playerTwo);
cardWrapper.insertAdjacentHTML('afterbegin', playerThree);
cardWrapper.insertAdjacentHTML('afterbegin', playerFour);

console.log(cardWrapper);

// put the div into the DOM just before the wrapper element
div.prepend(cardWrapper);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
