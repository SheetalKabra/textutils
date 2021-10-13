import React,{useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Textform(props) {
    const[text, setText] = useState("");
    //const[isCopied, setIsCopied] = useState(false);
    const handleUpperCaseEvent = ()=>{
        let textValue = text.toUpperCase();
        setText(textValue);
    };
    const handleLowerCaseEvent = ()=>{
        let textValue = text.toLowerCase();
        setText(textValue);
    };
    // const onCopyText = ()=>{
    //     setIsCopied(true);
    //     setTimeout(()=>{
    //         setIsCopied(false);
    //     }, 2000);
    // }
    const handleCopyText = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    };
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
    };
    const handleClearEvent = ()=>{
        let textValue = "";
        setText(textValue);
    };
    const handleOnChangeEvent = (event)=>{
        setText(event.target.value);
    };

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChangeEvent}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpperCaseEvent}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerCaseEvent}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleClearEvent}>Clear Text</button>
                
                {/* <CopyToClipboard text={text} onCopy={onCopyText}>
                    <div className="copy-area">
                    <button className="btn btn-primary">Copy To Clipboard</button>
                        <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                            {isCopied ? "Copied!" : ""} 
                        </span>
                    </div>
                </CopyToClipboard> */}
            </div>
            {/* <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div> */}
        </>
    )
}
