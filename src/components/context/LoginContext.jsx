import React from 'react'

const initialState = {
    Search: false,
    log: false,
    toggle: () => {},
    toggleS: () => {},
  }
  const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [log, setLog] = React.useState(true) 
    const [Search,setSearch] = React.useState(true)
  
    // On mount, read the preferred theme from the persistence
    React.useEffect(() => {
      const isDark = localStorage.getItem('log') === 'true'
      setLog(isDark)
    }, [log])
    
    React.useEffect(() => {
        const isDark = localStorage.getItem('S') === 'true'
        setSearch(isDark)
      }, [Search])
    // To toggle between dark and light modes
    const toggle = (th) => {
      const isDark = !log
      localStorage.setItem('log', JSON.stringify(isDark))
      setLog(isDark)
    }

    const toggleS = (th) => {
        const isDark = !Search
        localStorage.setItem('S', JSON.stringify(isDark))
        setSearch(isDark)
    }

    return (
      <ThemeContext.Provider value={{ log, toggle,Search,toggleS }}>
        {children}
      </ThemeContext.Provider>
    )
  }
  
  export { ThemeProvider, ThemeContext }