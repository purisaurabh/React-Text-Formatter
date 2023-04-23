import React, { useState } from 'react'

const TextForm = (props) => {
  const [text, setText] = useState('Enter the text')

  const handleUpClick = () => {
    console.log('On Click')
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to UpperCase' , 'success')
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to LowerCase' , 'success')
  }

  const handleOnChange = (event) => {
    console.log('On Change')
    setText(event.target.value)
  }

  const handleCopyText = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert('Text Has Been Copy' , 'success')
  }

  const handleClearText = () =>{
    let b = text.substring(text.length)
    setText(b)
    props.showAlert('Text Has Been Cleared' , 'success')
  }

  const handleRemoveSpace = () =>{
      let new_t = text.replace(/\s+/g , ' ').trim();
      setText(new_t);
      props.showAlert('White Spaces are removed' , 'success')
  }

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor : props.mode === 'light' ? 'white' : '#13466e' , color:props.mode === 'dark' ? 'white' : 'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button disabled ={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled ={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>

        <button disabled ={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
          Copy Text
        </button>

        <button disabled ={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          CLear Text
        </button>

        <button disabled ={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>
          Remove Extra Space
        </button>

      </div>

      <div className="container my-4" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words & {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Required to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something In Text Box To Preview Here"}</p>
      </div>
    </>
  )
}

export default TextForm
