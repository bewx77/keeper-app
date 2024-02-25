import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title : "",
        content : ""
    })

    function handleChange(event){
        const {value, name} = event.target;
        console.log(`${value},${name} `)

        setNote(prevValue => {
            return {
                ...prevValue,
                [name] : value 
            }
        })
    }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={(event) => {
            setNote({
                title:"",
                content:""
            })
            props.addItem(note);
            event.preventDefault();
        }
        }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
