
export default function Home() {
  return (
    <>
      <header>
        <h1>Translate app</h1>
      </header>
      <body>
        <div>
          <h3>Enter English Text</h3>
          <input placeholder="Enter your text here"></input>
        </div>
        
        <div>
          <h3>Select desired language</h3>
          <button>Afrikaans</button>
          <button>Arabic</button>
          <button>French</button>
          <button>Hindi</button>
          <button>Japanese</button>
          <button>Portuguese</button>
          <button>Spanish</button>
        </div>

        <div>
          <h3>Output</h3>
          <div></div>
        </div>
      </body>


    </>
  )
}
