//imports depencencies,images,styles*//

import { useEffect, useState } from 'react';
// import  from '../images/react.svg'
// import  from
import '../styles/App.scss';

function App() {
  // const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);

  useEffect(() => {
    fetch('https://dev.adalab.es/api/random/word')
      .then((response) => response.json())
      .then((info) => {
        setWord(info.word);
      });
  }, []);





  const handleInput = (ev) => {
    const regex = /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/;
    if (regex.test(ev.target.value)) {
      setLastLetter(ev.target.value);
    } else {
      setLastLetter('');
    }

    setUserLetters([...userLetters, ev.target.value]);
  };

  const getNumberOferrors = () => {
    const numberErrors = userLetters.filter(
      (pepino) => word.includes(pepino) === false
    );

    return numberErrors.length;
  };

  //funcions,vars,handles

  //const renderNumberOfErrors =() => {
  //numberOfErrors =  !errorLetters.filter(pepino =>)

  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter((pepino) => !word.includes(pepino));
    return (
      <ul className="letters">
        {errorLetters.map((pepino, index) => (
          <li className="letter" key={index}>
            {pepino}
          </li>
        ))}
      </ul>
    );
  };

  const renderSolutionLetter = () => {
    const wordLetters = word.split('');
    return wordLetters.map((pepino, index) => {
      return (
        <li className="letter" key={index}>
          {userLetters.includes(pepino) ? pepino : ''}
        </li>
      );
    });
  };

  return (
    <>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución</h2>
              <ul className="letters">{renderSolutionLetter()}</ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              {renderErrorLetters()}
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                value={lastLetter}
                onChange={handleInput}
              />
            </form>
          </section>
          <section className={'dummy error-' + getNumberOferrors()}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
