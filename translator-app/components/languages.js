const Languages = () => {
    return (
        <div>
          <h3 className="font-sans text-xl font-semibold mt-5 mb-3">Select desired language</h3>
          {LANGUAGES.map(({label, value}) => {
            return (
                <button key={value} className="max-w-sm h-fit bg-blue-500 rounded p-2 mx-4 my-4 text-white">{label}</button>
            )
          })}
        </div>
    );
}

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" }
];

export default Languages;