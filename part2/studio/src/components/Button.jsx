import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";

function Button(props) {
  let saveButton = props;
  saveButton = false;
  return saveButton ? <SaveButton saved={false} /> : <ClickedButton saved={true} />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
