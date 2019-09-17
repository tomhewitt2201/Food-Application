"use strict";

const container = document.querySelector('.container');
const button = document.querySelector('button');
const splicedList = []

function generateNumber (array) {
    return Math.floor(Math.random() * array.length);
}
function createList (array, number, listName) {
    const title = document.createElement('h2');

    title.textContent = `${listName} Dinners`;
    container.appendChild(title);

    const list = document.createElement('ul');
    
    container.appendChild(list);
    container.classList.add('list');
    
    for (let i = 0; i <= number; i++) {
        let index = generateNumber(array);
        let listItem = document.createElement('li');
        
        
        listItem.textContent = `${array[index]}`;
        list.appendChild(listItem);
        
        splicedList.push(...array.splice(index, 1));
    }
}

function runMealList (event) {
    event.preventDefault();
    button.style.display = 'none';
    createList(veg, 4, 'Vegetable');
    createList(meat, 1, 'Meat');
}

button.addEventListener('click', runMealList);

// To Do 

/* 

1. You need to add a button next to each of the list items so that once you've created the list you can change a dinner if you don't want it
2. Start brushing up on your classes so that you can start adding more actual details to each dinner option ie. ingredients and method
3. Instead of hiding the button, make it smaller and push it to the bottom. 
4. Find out how to save data using JavaScript so that someone can add something to the array and it'll save that information. http://archive.oreilly.com/oreillyschool/courses/javascript2/SavingData.html

*/
