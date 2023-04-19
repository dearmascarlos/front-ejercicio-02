const Fields = ({ value, onChange }) => {

  

  return (
      <>
        <h3 className="font-sans text-xl font-semibold mb-3">Enter English Text</h3>
        <input
          className="block rounded border border-gray-500 w-3/5 p-2 ml-4"
          type="text"
          id="email"
          placeholder="Enter your text here"
          onChange={(e) => onChange(e.target.value)}
          value={value}
        >
        
        </input>
      </>
  );
}

export default Fields;