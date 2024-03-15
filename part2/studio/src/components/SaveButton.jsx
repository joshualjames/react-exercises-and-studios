import "./styling.css";
import Button from "./Button"

function SaveButton(props) {
  function handleClick() {
    alert("You are saving this pin!");
    let saved = props;
    console.log(saved);
    Button(saved);
  }
  return (
    <button id="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
