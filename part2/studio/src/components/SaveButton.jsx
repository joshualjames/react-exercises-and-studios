import "./styling.css";
import Button from "./Button"

function SaveButton(props) {
  function handleClick() {
    alert("You are saving this pin!");
    props.handleClick(true);
  }
  return (
    <button id="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
