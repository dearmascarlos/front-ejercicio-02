import axios from 'axios'
import { useEffect, useState } from 'react';


const Translate = ({ language, text }) => {
  const [translated] = useTranslation( text, language)
  const translate = translated.data.translations[0].translatedText;
    return (
        <div>
          <h3 className="font-sans text-xl font-semibold mb-3">Output</h3>
          <div className='bg-gray-100 h-20 w-3/5 rounded ml-4 border border-gray-600 p-2'>{translate}</div>
        </div>
    );
}

const useTranslation = (text, language) => {
  const [translated, setTranslated] = useState('')

  useEffect(() => {
    if(!text) {
      return
    }
    const cancelToken =  axios.CancelToken.source()
    doTranslation(text, language, cancelToken, setTranslated)
  },[text, language])

  return [translated]
}

// mover a la carpeta utils
const debounce = (fn) => {
  let id = null;

  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
}

const doTranslation = debounce(
  async (input, languageCode, cancelToken, callback) => {

    try {
      const {data} = await axios.post(
        "https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNltKX8oKTEQWRYGUtc4zzFWfNjFV2DvI", 
        {
          q: input,
          target: languageCode
        },
        {
          cancelToken: cancelToken.token
        }
      )
      callback(data)

    } catch (error) {
      console.log('ERROR:', error);
    }
  }
)

export default Translate;