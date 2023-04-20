import Fields from "@/components/fields"
import Languages from "@/components/languages"
import Translate from "@/components/translate"
import { useEffect, useState } from "react"

export default function Home() {
  const [text, setText] = useState('')
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    console.log('Mi idioma es, ', language);
  }, [text, language])

  return (
    <>
      <header className="my-8 ml-5">
        <h1 className="font-sans text-4xl font-semibold">Translate app</h1>
      </header>
      <main className="ml-5">
        <Fields onChange={setText}/>
        <Languages language={language} onLanguageChange={setLanguage}/>
        <Translate  language={language} text={text}/>
      </main>
    </>
  )
}
