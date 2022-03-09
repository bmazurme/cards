function Form(props) {
  return(
    <form name='form' noValidate>
      <h2>Form {props.result}</h2>
      <h3>Score: {props.score}</h3>
      <button aria-label="1" type="button" disabled={props.disabled} onClick={()=>props.handleClick(props.first)}>{props.first}</button>
      <button aria-label="2" type="button" disabled={props.disabled} onClick={()=>props.handleClick(props.second)}>{props.second}</button>
      <button aria-label="3" type="button" disabled={props.disabled} onClick={()=>props.handleClick(props.third)}>{props.third}</button>
      <button aria-label="4" type="button" disabled={props.disabled} onClick={()=>props.handleClick(props.fourth)}>{props.fourth}</button>
    </form>
  );
}

export default Form;