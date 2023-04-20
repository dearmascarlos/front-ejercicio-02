import { useState } from "react";

const Fields = ({ onChange }) => {
  const [clearText, setClearText] = useState('')
  
  const clearHandler = () => {
    setClearText('')
    onChange('')
  }

  

  return (
      <>
        {/* <h3 className="font-sans text-xl font-semibold mb-3">Enter English Text</h3> */}
        <textarea 
          className="block rounded border-gray-500 w-1/2 p-2 ml-4 resize-none outline-none"
          type="text"
          id="email"
          placeholder="Enter your text here"
          onChange={(e) => {
            onChange(e.target.value)
            setClearText(e.target.value)
          }}
          value={clearText}
        >
        
        </textarea>
        <button 
          className="bg-transparent h-6 w-6"
          onClick={clearHandler}
        > X 
        </button>
      </>
  );
}

export default Fields;