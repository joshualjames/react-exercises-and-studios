import "./styling.css";
import Button from "./Button"

function ClickedButton(props) {
  function handleClick() {
    alert("You are removing this pin!");
    props.handleClick(false);
  }
  return (
    <button id="clickedButton" onClick={handleClick}>
      Saved
    </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
