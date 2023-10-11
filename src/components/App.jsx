//imports depencencies,images,styles*//

import { useState } from 'react';
// import  from '../images/react.svg'
// import  from
import '../styles/App.scss';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState('');

  const handleInput = (ev) => {
    const regex = /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/;
    if (regex.test(ev.target.value)) {
      setLastLetter(ev.target.value);
    } else {
      setLastLetter('');
    }

    console.log(ev.target.value);
    setUserLetters([...userLetters, ev.target.value]);
  };

  const handleClick = () => {
    console.log('holi');

    setNumberOfErrors(numberOfErrors + 1);
    return numberOfErrors;
  };

  //funcions,vars,handles

  const renderErrorLetters = () => {
    const wordLetters = word.split('');
    const errorLetters = userLetters.filter(pepino);
    return wordLetters.map((pepino, index) => {
      return (
        <li className='letter' key={index}>
          {userLetters.includes(!pepino) ? pepino : ''}
        </li>
      );
    });
  };

  const renderSolutionLetter = () => {
    const wordLetters = word.split('');
    return wordLetters.map((pepino, index) => {
      return (
        <li className='letter' key={index}>
          {userLetters.includes(pepino) ? pepino : ''}
        </li>
      );
    });
  };

  return (
    <>
      <div className='page'>
        <header>
          <h1 className='header__title'>Juego del ahorcado</h1>
        </header>
        <main className='main'>
          <section>
            <div className='solution'>
              <h2 className='title'>Solución</h2>
              <ul className='letters'>{renderSolutionLetter()}</ul>
            </div>
            <div className='error'>
              <h2 className='title'>Letras falladas:</h2>
              <ul className='letters'>{renderErrorLetters()}</ul>
            </div>
            <form className='form'>
              <label className='title' htmlFor='last-letter'>
                Escribe una letra:
              </label>
              <input
                autoComplete='off'
                className='form__input'
                maxLength='1'
                type='text'
                name='last-letter'
                id='last-letter'
                value={lastLetter}
                onChange={handleInput}
              />
            </form>
          </section>
          <section className={'dummy error-' + numberOfErrors}>
            <span className='error-13 eye'></span>
            <span className='error-12 eye'></span>
            <span className='error-11 line'></span>
            <span className='error-10 line'></span>
            <span className='error-9 line'></span>
            <span className='error-8 line'></span>
            <span className='error-7 line'></span>
            <span className='error-6 head'></span>
            <span className='error-5 line'></span>
            <span className='error-4 line'></span>
            <span className='error-3 line'></span>
            <span className='error-2 line'></span>
            <span className='error-1 line'></span>
          </section>
          <button onClick={handleClick}>Incrementar</button>
        </main>
      </div>
    </>
  );
}

export default App;
