import {useLocalStorage} from "./useLocalStorage"
import {useEffect} from "react"

export const useDarkMode = darkModeBoolean => {

    const [storedValue, setValue] = useLocalStorage('darkModeEnabled', darkModeBoolean);
    const body = document.querySelector("body");

    useEffect(() => {
        //check use storage value
        if (storedValue === true) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
        
    }, [darkModeBoolean]);
    
    return [storedValue, setValue];

}

