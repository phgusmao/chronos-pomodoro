import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark')

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault(); //Não segue o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    })


    //document.documentElement.setAttribute('data-theme', theme)
  }

  // useEffect(() => {
  //   console.log('', Date.now())
  // }) // Executado todas as vezes que o componente redenriza na tela;

  // useEffect(() => {
  //   console.log('useEffect c array dps vazio', Date.now())
  // }, []) //executa apenas quando o react monta o componente na tela pela primeira vez;

  useEffect(() => {
    // console.log('Theme mudou', theme)
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('Este componente será atualizado;')
    }
  }, [theme]); //array de dependência

  return (
    <>
      <nav className={styles.menu}>
        <a className={styles.menuLink} onClick={handleThemeChange} href='#' aria-label='Ir para Home' title='Ir para Home'>
          <HouseIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='Ver histórico' title='Ver histórico'>
          <HistoryIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='Configurações' title='Configurações'>
          <SettingsIcon />
        </a>
        <a href="#" onClick={handleThemeChange} className={styles.menuLink} aria-label='Mudar o tema' title='Mudar o tema'>
          <SunIcon />
        </a>
      </nav>
    </>
  )
}

