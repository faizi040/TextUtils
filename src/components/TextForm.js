import React, { useState } from 'react';
// Hooks let you use state and other React features without writing a class.On the upper line useState
// is an hook used for state management--Hooks allow you to reuse stateful logic without changing your component hierarchy


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Case was Clicked" + text);
        let newText = text.toUpperCase();  //built-in method to convert into uppercase 
        setText(newText);
        props.showAlert("Converted to upperCase", 'Sucess');
    }
    const handleLowClick = () => {

        let newText = text.toLowerCase();  //built-in method to convert into Lowercase 
        setText(newText);
        props.showAlert("Converted to LowerCase", 'Sucess');
    }
    const handleClearClick = () => {

        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", 'Sucess');
    }
    const CopyText = () => {    //function to copy text
        navigator.clipboard.writeText(text);   //main line
        props.showAlert("Text Copied", 'Sucess');
    }
    const RemoveSpaces = () => {    //function to remove extra spaces usig regular Expressions

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", 'Sucess');
    }
    const onChangeHandle = (event) => {
        // console.log("The text was changed");
        setText(event.target.value);
        //to type value in textarea menas change the value of target textarea to value given by user
    }
    const [text, setText] = useState("");
    // Declare a new state variable, which we'll call "text"
    return (

        <div className="container text-center" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1 className=" my-4" >{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onChangeHandle} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                {/* setting textarea value by using state variable */}
                {/* using ternary operator  */}
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={CopyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={RemoveSpaces}>Remove Extra Spaces</button>
            </div>

            <div className=" mt-5 mb-4 ">
                <h1 className=" my-3">Your Text Summary</h1>
                <p className="h5 mt-4">{text.split(/\s+/).filter((element) => { return element.length !== 0; }).length} words or {text.length} characters</p>
                {/* split functions make words array and length function to find the length of array equals to number of words */}
                <p className="h5 mt-4">Time required to read the Text : {(text.split(/\s+/).filter((element) => { return element.length !== 0; })).length * 0.008} Minutes</p>
                {/* as 0.008 minutes are required to read one word */}


                <h2 className='my-4'>Preview</h2>
                <p className=''>{text.length > 0 ? text : 'Nothing to Preview'}</p>

            </div>
        </div>

    )
}


// Definitions: Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.