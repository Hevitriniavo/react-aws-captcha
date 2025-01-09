import ContainerCaptcha from "./components/ContainerCaptcha"
import { useFetchApi } from "./hooks/useFetchApi";

function App() {

  const {fetchApi } = useFetchApi();


  const showCaptcha = async () => {
      try {
        const response = await fetchApi('https://jsonplaceholder.typicode.com/posts', {
          method: 'GET'
        })
        const data = await response.json()
    
        console.log('Données récupérées depuis JSONPlaceholder :', data)
      } catch (error) {
        console.error('Erreur lors de la requête fetch avec captcha :', error)
      }
  }

  return (
    <>
       <ContainerCaptcha />
      <button onClick={showCaptcha}>show captcha</button>
    </>
  )
}

export default App
