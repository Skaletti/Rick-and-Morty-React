import { useEffect } from 'react'
import '../HomePage.module.scss'

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Главная страница'
  }, [])

  return (
    <h1>
      Главная страница
    </h1>
  )
}