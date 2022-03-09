import React from "react";
import Form from "./Form";
import { cards } from "../utils/initialCards";

function Main() {
  const [score, setScore] = React.useState(0);
  const [collection, setCollection] = React.useState(cards);
  const [riddle, setRiddle] = React.useState({key:'', value: ''});
  const [result, setResult] = React.useState('');
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

    arr.forEach(element => {
      collection.push(cards[element]);
    });
    setCollection(collection);
    let index = Math.floor(Math.random() * 4);
    setRiddle(collection[index]);
  }

  function check(value) {
    setDisabled(true);

    if (value === riddle.value) {


      
         setScore( () => {return( score + 1)})

        console.log(score)  ;
      
      setResult('Yes');
    } else {
      setResult('No');
    }
    
    setTimeout(clearResult, 1000);
  }

  function clearResult() {
    setDisabled(false);
    setResult('');
    //if (score === 10){alert('Score 10!')}
    reload();
  }

  return(
    <>
      <button aria-label="reload" 
        type="button" 
        onClick={reload}>Reload</button>
      <h2>{riddle.key}</h2>
      <Form
        disabled={disabled}
        result={result}
        score={score}
        handleClick={check}
        first={collection[0].value}
        second={collection[1].value}
        third={collection[2].value}
        fourth={collection[3].value}
      />
    </>
  );
}

export default Main;