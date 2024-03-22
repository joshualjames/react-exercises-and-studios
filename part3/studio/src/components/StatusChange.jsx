import { useState } from 'react';

export default function StatusChange() {
   const [notes, setNotes] = useState("");
   const [recipeStatus, setRecipeStatus] = useState(false);
   const [journal, setJournal] = useState("");
   
   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      const journalLog = event.target.notesPreview.value;
      setJournal(journalLog);
      setRecipeStatus(true);
      event.preventDefault();
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" name="notesPreview" onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>Preview: {notes}</p>

         {recipeStatus && <p>Notes: {journal}</p>}

         {!recipeStatus &&< p > I have not tried this recipe!</p>}
      </div>
   );
}
