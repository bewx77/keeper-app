import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [ notes, setNotes ] = useState([]);

    function addItem(item){
        setNotes((prevValue) => [...prevValue, item])
    }

    function deleteItem(id){
        console.log(id);
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
        <Header />
        <CreateArea addItem={addItem}/>
        {notes.map((note, index) => {
            return <Note key={index} id={index} title={note.title} content={note.content} deleteItem={deleteItem} />
        })}
        <Footer />
        </div>
    );
}

export default App;
