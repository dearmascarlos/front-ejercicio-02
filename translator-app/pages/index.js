import Fields from "@/components/fields"
import Languages from "@/components/languages"
import Translate from "@/components/translate"
import NavBar from "@/components/navBar"
import { useEffect, useState } from "react"

export default function Home() {
  const [text, setText] = useState('')
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    console.log(text);
  }, [text, language])

  return (
    <>
        <NavBar/>
      <main className="mx-5">
        <Languages language={language} onLanguageChange={setLanguage}/>
        <div className="flex">
          <Fields onChange={setText}/>
          <Translate  language={language} text={text}/>
        </div>
      </main>
    </>
  )
}
