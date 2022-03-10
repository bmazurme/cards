import React from "react";
import Form from "./Form";
import { cards } from "../utils/initialCards";

function Main() {
  const [score, setScore] = React.useState(0);
  const [collection, setCollection] = React.useState([]);
  const [riddle, setRiddle] = React.useState({key:'', value: ''});
  const [disabled, setDisabled] = React.useState(false);

  function reload() {
    const choises = generateChoises(cards);
    const collection = getCollection(choises, cards);
    setCollection(collection);
    getRiddle(collection);
  }

  function generateChoises(cards) {
    const arr = [];
    while (arr.length<4) {
      let val = Math.floor(Math.random() * cards.length);
      if (!arr.includes(val)) {
        arr.push(val);
      }
    }
    return arr;
  }

  function getCollection(choises, cards) {
    const collection = [];
    choises.forEach((element, index) => {
      const item = cards[element];
      item['isCorrect'] = false;
      item['isInCorrect'] = false;
      item['id'] = index;
      collection.push(item);
    });
    return collection;
  }

  function getRiddle(collection) {
    let index = Math.floor(Math.random() * 4);
    setRiddle(collection[index]);
  }

  function getNewCollection(collection, props, correct) {
    let newCollection = [];
    collection.map(
      row => {
        if (row.id === props.card.id) {
            const editedRow = correct
             ? { ...row, isCorrect: true }
             : { ...row, isInCorrect: true };
          return newCollection.push(editedRow);
        } else {
          return newCollection.push(row);
        }
      });
    return newCollection;
  }

  function check(button, props) {
    setDisabled(true);
    let newCollection = [];

    if (button.value === riddle.value) {
      newCollection = getNewCollection(collection, props, true);
      setScore( () => {return( score + 1)});
    } else {
      newCollection = getNewCollection(collection, props, false);
    }
    
    setCollection(newCollection);
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