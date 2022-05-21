import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

/**
 * Create ThemeContext with all data user
 * @param {*}
 * @returns ThemeContext with states for children components in prop value
 */
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        if (!localStorage.getItem('theme')) return
        setTheme(localStorage.getItem('theme'))
    }, [])
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
