import Fields from "@/components/fields"
import Languages from "@/components/languages"


export default function Home() {
  return (
    <>
      <header className="my-8 ml-5">
        <h1 className="font-sans text-4xl font-semibold">Translate app</h1>
      </header>

      <main className="ml-5">
        <Fields/>

        <Languages/>
        
        

        <div>
          <h3 className="font-sans text-xl font-semibold mb-3">Output</h3>
          <div className='bg-gray-100 w-full h-20 w-3/5 rounded'></div>
        </div>
      </main>


    </>
  )
}
