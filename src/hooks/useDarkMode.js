import React, { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

export const useDarkMode = (useLocalStorage, localStorageValue) => {

    const [someValue, setSomeValue] = useLocalStorage(key)
    const body = document.querySelector('body')

    useEffect(() => {
        useLocalStorage ? body.classList.add("dark-mode") : body.classList.remove("dark-mode")
    }), []


    return[]
}