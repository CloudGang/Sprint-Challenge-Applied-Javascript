// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


var cardsC = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    var { articles } = response.data;
    for (var articlesKey in articles) {
      for (var articleData of articles[articlesKey]) {
        var card = Card(articleData);
        card.dataset.topic = articlesKey;
        cardsC.append(card);
      }
    }
  });

function Card(obj) {

    var card = document.createElement('div');
    var headline = document.createElement('div');
    var author = document.createElement('div');
    var imgContainer = document.createElement('div');
    var img = document.createElement('img');
    var authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    headline.textContent = obj.headline;
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    img.src = obj.authorPhoto;
    authorName.textContent = `By ${obj.authorName}`;

    card.append(headline, author);
    author.append(imgContainer, authorName);
    imgContainer.append(img);

    return card;
}