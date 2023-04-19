import Fields from "@/components/fields"
import Languages from "@/components/languages"
import Translate from "@/components/translate"
import { useState } from "react"


export default function Home() {
  const [text, setText] = useState('')

  return (
    <>
      <header className="my-8 ml-5">
        <h1 className="font-sans text-4xl font-semibold">Translate app</h1>
      </header>

      <main className="ml-5">
        <Fields/>
        <Languages/>
        <Translate/>
      </main>
    </>
  )
}
