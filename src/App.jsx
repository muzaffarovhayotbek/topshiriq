import React, { useState } from 'react';
import './App.css';

const statesData = [
  { number: 1, name: 'Alabama', description: 'Alabama is the 1st state.' },
  { number: 2, name: 'Alaska', description: 'Alaska is the 2nd state.' },
  { number: 3, name: 'Arizona', description: 'Arizona is the 3rd state.' },
  { number: 52, name: 'Wyoming', description: 'Wyoming is the 52nd state.' },
];

function App() {
  const [shtatNumber, setShtatNumber] = useState('');
  const [stateInfo, setStateInfo] = useState(null);

  function validate() {
    if (shtatNumber === '') {
      alert('Iltimos, shtat raqamini kiriting.');
      return false;
    }

    const number = Number(shtatNumber);
    if (isNaN(number)) {
      alert('Faqat raqam kiriting.');
      return false;
    }

    if (number < 1 || number > 52) {
      alert("Shtat raqami 1 dan 52 gacha bo'lishi kerak.");
      return false;
    }

    return true;
  }

  function handleSearch(event) {
    event.preventDefault();

    if (!validate()) return;

    const foundState = statesData.find(
      (state) => state.number === parseInt(shtatNumber)
    );
    if (foundState) {
      setStateInfo(foundState);
    } else {
      alert('Shtat topilmadi.');
    }
  }

  return (
    <div>
      <form className="container form" onSubmit={handleSearch}>
        <label className="form-label">Amerika shtati (raqam):</label>
        <input
          value={shtatNumber}
          onChange={(e) => setShtatNumber(e.target.value)}
          className="form-input"
          type="number"
          placeholder="1 dan 52 gacha raqam "
        />
        <button type="submit" className="search">
          Search
        </button>
      </form>

      {stateInfo && (
        <div>
          <h2>Shtat nomi: {stateInfo.name}</h2>
          <p>{stateInfo.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
