import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
             setText(newText)
    }

    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
             setText(newText)
    }

    const handleTiClick = ()=>{
        console.log("Titlecase was clicked" + text);
        let newText = text.toTitleCase();
             setText(newText)
    }

    const handleCopy = ()=>{
        var text = document.getElementById("Mybox");
        text.ariaSelected();
        navigator.clipboard.writeText(text.value);
    }

    const handleClearClick = ()=>{
        console.log("Clear was clicked" + text);
        let newText = '';
        setText(newText)
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');

  return (
    <> 
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="Textbox" rows="10"></textarea>
</div>

<button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
<button type="button" className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Lower case</button>
<button type="button" className="btn btn-primary mx-1 my-2" onClick={handleTiClick}>Title case</button>
<button type="button" className="btn btn-primary mx-1 my-2" onClick={handleTiClick}>Sentence case</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spces</button>
    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
    </>
  )
}
