import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

import styles from './styles.module.css'

type AvailableThemes = 'dark' | 'light'

export function Menu() {

  //inicialização preguiçosa do useState
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  })

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <a className={styles.menuLink} href='#' aria-label='Ir para Home' title='Ir para Home'>
          <HouseIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='Ver histórico' title='Ver histórico'>
          <HistoryIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='Configurações' title='Configurações'>
          <SettingsIcon />
        </a>
        <a href="#" onClick={handleThemeChange} className={styles.menuLink} aria-label='Mudar o tema' title='Mudar o tema'>
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  )
}

