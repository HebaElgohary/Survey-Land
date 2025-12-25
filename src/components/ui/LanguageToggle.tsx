import {useState} from "react"

const LanguageToggle=()=>{
    const [lang,setLang]=useState("EN")
    return(
        <button onClick={()=> setLang(lang=== "EN" ? "العربية": "EN")}
        className="p-2 px-3 rounded-md text-sm font-medium">
            {lang}
            </button>
    )
}
export default LanguageToggle;