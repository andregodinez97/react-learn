// import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const App = () => {
  const labelText = 'Enter Name:';
  const buttonName = 'Click me!';
  const style = {
    backgroundColor: 'blue',
    color: 'white'
  };
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input type="text" id="name" />
      <button style={style}> {buttonName} </button>
    </div>
  );
};
// take react component and show it to screen
ReactDOM.render(<App />, document.querySelector('#root'));
