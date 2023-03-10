import React, { useState } from 'react'

export default function TextArea(props) {
    const handleUpClick = () => {
        // console.log("you have clicked"+ text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("enable to upper case","success");
    }
    const handleLoClick = () => {
        // console.log("you have clicked"+ text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("enable to lower case","success")
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
            <textarea className="Box" placeholder="Leave a comment here" style={{backgroundColor:props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'black'}} id="Box" value={text} onChange={handleOnChange} rows="8" cols="100" defaultValue={""} />
            <div>
                <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Lowercase</button>
            </div>
            <div className="container my-3">
                <h4 > This is text Summery</h4>
                <p>No of word is {text.split(" ").length} and No of character is {text.length}</p>
                <p> Time taken by the reader to read the above stuff  { 0.08 * text.split(" ").length} minutes</p>
            </div>
            </div>

        </>


    )
}
