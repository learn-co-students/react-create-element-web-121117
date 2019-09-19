import React from 'react'
import ReactDOM from 'react-dom'

// let title = React.createElement('h1', {}, 'My First React Code')
// let paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!')
// let container = React.createElement('div', {}, [title, paragraph])
//
// ReactDOM.render(
//   container,
//   document.getElementById('global')
// )

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { id: 1, className: 'brown' }, 'Chocolate'),
        React.createElement('li', { id: 2, className: 'white' }, 'Vanilla'),
        React.createElement('li', { id: 3, className: 'yellow' }, 'Banana')
      ]
    )
  );

ReactDOM.render(
  list,
  document.getElementById('global')
);
