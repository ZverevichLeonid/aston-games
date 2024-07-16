import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContext = { theme: Theme; toggleTheme: () => void }

export const ThemeContext = createContext<ThemeContext>({
  theme: 'dark',
  toggleTheme: () => {},
})
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme, setTheme])

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  )

  useEffect(() => {
    const body = document.body
    body.classList.remove('light', 'dark')
    body.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
