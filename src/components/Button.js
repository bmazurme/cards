function Button(props) {
  return(
    <button 
      className={`button ${props.disabled && 'button_disabled'} 
                         ${props.card.isCorrect && 'button_correct'}
                         ${props.card.isInCorrect && 'button_incorrect'}`
                        } 
      card={props.card}
      aria-label={props.index}
      disabled={props.disabled}
      type="button"
      onClick={(evt)=>props.handleClick(props.card, props)}
    >
    {props.card.value}
  </button> 
  );
}

export default Button;