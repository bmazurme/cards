import React from "react";
import Form from "./Form";
import { cards } from "../utils/initialCards";

function Main() {
  const [score, setScore] = React.useState(0);
  const [collection, setCollection] = React.useState([]);
  const [riddle, setRiddle] = React.useState({key:'', value: ''});
  const [disabled, setDisabled] = React.useState(false);

  function reload() {
    const arr = [];
    const collection = [];

    while (arr.length<4) {
      let val = Math.floor(Math.random() * cards.length);
      if (!arr.includes(val)) {
        arr.push(val);
      }
    }

    arr.forEach((element, index) => {
      const item = cards[element];
      item['isCorrect'] = false;
      item['isInCorrect'] = false;
      item['id'] = index;
      collection.push(item);
    });

    setCollection(collection);
    let index = Math.floor(Math.random() * 4);
    setRiddle(collection[index]);
  }

  function check(button, props) {
    setDisabled(true);
    let newRows = [];

    if (button.value === riddle.value) {
      collection.map(
        row => {
          if (row.id === props.card.id) {
              let editedRow = { ...row, isCorrect: true };
              return newRows.push(editedRow);
          } else {
              return newRows.push(row);
          }
        });
      setScore( () => {return( score + 1)});
    } else {
      collection.map(
        row => {
          if (row.id === props.card.id) {
              let editedRow = { ...row, isInCorrect: true };
              return newRows.push(editedRow);
          } else {
              return newRows.push(row);
          }
        });
    }
    setCollection(newRows);
    setTimeout(clearResult, 1000);
  }

  function clearResult() {
    setDisabled(false);
    reload();
  }

  return(
    <div className="container">
      <div className="sidebar">
        <button className="button" 
          aria-label="reload" 
          type="button" 
          onClick={reload}>Start</button>

        <h3>Score: {score}</h3>
        <h4>{riddle.key}</h4>
      </div>

      <div className="sidebar_right">
        <Form
          disabled={disabled}
          score={score}
          handleClick={check}
          collection={collection}
        />
      </div>

    </div>
  );
}

export default Main;