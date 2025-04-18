import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

let audarmalar = {
  en: "Hello!",
  kz: "Сәлем!",
  ru: "Привет!"
}


export default function LanSelect() {
  let { state } = useContext(LanguageContext)
  return (
    <div>
       Audarmasy: {audarmalar[state.Language]}
    </div>
  )
}
