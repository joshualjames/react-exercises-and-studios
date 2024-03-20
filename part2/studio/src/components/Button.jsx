import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
import { useState } from "react";

function Button() {
  const [isSaved, setIsSaved] = useState(false);
  return isSaved ? <ClickedButton handleClick={setIsSaved} /> : <SaveButton handleClick={setIsSaved} />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
