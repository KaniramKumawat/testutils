import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //convert lower case to upper case
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }
  const handleLowClick = ()=>{
    //convert upper case to lower case
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }
  const handleClearClick = ()=>{
    //convert upper case to lower case
    let newText = '';
    setText(newText);
    props.showAlert("Cleared text", "success");
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
  const [text, setText] = useState('');

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
}

const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Removed extra spaces", "success");
}

  return (
    <>
    <div className="container" >
      <h1>{props.heading}</h1>
      <div className="mb-3"> 
        <label htmlFor="myBox" className="form-label">Example TextArea</label>
        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} 
          style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
          color: props.mode === 'dark' ? 'white' : 'black'}} rows="8">
        </textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lower case</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes reading</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
