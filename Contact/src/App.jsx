
import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Navigation from './Components/Navigation/Navigation'

function App() {

  return (
    <>

    <Navigation/>
    <main className='mainContainer'>
    <ContactHeader/>
    <ContactForm/>
    </main>
    

     </>

    
  )
}

export default App
