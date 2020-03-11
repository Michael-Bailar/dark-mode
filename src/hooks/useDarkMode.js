import useLocalStorage from "./useLocalStorage"
import {useEffect} from "react"

export default useDarkMode = (booleanValue) => {

    const [storedValue, setValue] = useLocalStorage(darkMode, booleanValue)
    const body = document.querySelector("body")

    const useEffect = () => {
        //check use storage value
        if (storedValue === true) {
            body.classList.remove("dark-mode")
        } else {
            body.classList.add("dark-mode")
        }
        
    }, [booleanValue]
    
    return [storedValue, setValue]

}

