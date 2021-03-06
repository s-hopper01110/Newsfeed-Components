// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// assign this.domElement to the passed in domElement
    // create a reference to the ".expandButton" class.
// Using your expandButton reference, update the text on your expandButton to say "expand"


class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'Expand Me!!!!';
// Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }



  // Using our reference to the domElement, toggle a class to expand or hide the article.
expandArticle() {
     
  this.domElement.classList.toggle('article-open');
  }
}
  


/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => {
  return new Article(article);
});

// EXTRAS:
const articleHeaders = document.querySelector('.article h2');
articleHeaders.addEventListener('mouseover', (e) => {
  e.target.style.color = 'white';
  // e.target.style.fontSize = '20px';
  e.target.style.background = 'black';
  
  setTimeout(function() {
      e.target.style.color = '';
      e.target.style.fontSize = '';
      e.target.style.background = '';
    }, 400);
  }, false);

  TweenLite.to('.header', 2.5, { ease: Back.easeInOut.config(1.7), y: 15 });