/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');
  useEffect(() => {
    fetchData();
  }
    , [])

  function fetchData() {

    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((item) => setAdvice(item.slip))
  }

  function handelClick() {
    fetchData();
  }
  return (
    <div className="App container">
      <div className='row'>
        <div className='content text-center mt-5 col-md-6 mx-auto'>
          <h3 className='py-3'>Advice #{advice.id}</h3>
          <p className='advice'>"{advice.advice}"</p>
          <img className='line' />
          <a className='btn controler' onClick={handelClick}>
            <img src='./img/icon-dice.svg'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
