import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkmode", false);
    const body = document.querySelector("body");
    console.log(body.classList);

    useEffect(() => {
        darkMode ? //should this reference state or local storage?
            body.classList.add("dark-mode") :
            body.classList.remove("dark-mode");
    },[darkMode]);

    return [darkMode, setDarkMode];
}