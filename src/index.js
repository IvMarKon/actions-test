// ## Play with assets ##

// import _ from 'lodash';
// import './style.css';
// import Icon from './giphy.gif';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Webpack is hard', '🤔'], ' ');
//     element.classList.add('hello');

//   // Add the image to our existing div.
//    const myIcon = new Image();
//    myIcon.src = Icon;

//    element.appendChild(myIcon);
  
//     return element;
//   }
  
//   document.body.appendChild(component());
// --------------------------------------------------------------------------------------------
// ## Play with output management ##
// import _ from 'lodash';
//  import printMe from './print.js';

//   function component() {
//     const element = document.createElement('div');
//    const btn = document.createElement('button');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//    btn.innerHTML = 'Click me and check the console!';
//    btn.onclick = printMe;

//    element.appendChild(btn);

//     return element;
//   }

//   document.body.appendChild(component());
// --------------------------------------------------------------------------------------------
// ## Play with code splitting ##
function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

  }).catch(error => 'An error occurred while loading the component');
 }

getComponent().then(component => {
 document.body.appendChild(component);
});