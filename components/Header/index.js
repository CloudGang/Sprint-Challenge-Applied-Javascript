// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    var header = document.createElement('div');
    var date = document.createElement('span');
    var title = document.createElement('h1');
    var temp = document.createElement('span');
  
    header.append(date, title, temp);

    header.classList.add('header');
    date.classList.add('date');
    date.textContent = 'MAY 17, 2020';
    title.textContent = 'Lambda Times';
    temp.classList.add('temp');
    temp.textContent = '98°';
  
    return header;
}
  
var divHeader = document.querySelector('div.header-container');  
divHeader.append(Header());
