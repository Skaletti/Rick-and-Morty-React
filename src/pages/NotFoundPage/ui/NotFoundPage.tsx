import { useEffect } from 'react'

export const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Страница не найдена'
  }, [])

  return (
    <div>
      <h1>Страница не найдена</h1>
      <p>404 ошибка</p>
    </div>
  )
}