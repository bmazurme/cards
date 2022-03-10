import Button from "./Button";

function Form(props) {
  return(
    <form className="form" name='form' noValidate>
      {props.collection.map((card, index) => 
        <Button card={card} 
                key={index}
                handleClick={props.handleClick}
                disabled={props.disabled}
        />
      )}
    </form>
  );
}

export default Form;