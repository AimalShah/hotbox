import Header from './components/Header'
import { ThemeProvider } from "@/components/theme-provider"
import Hero from './components/Hero'
import Menu from './components/Menu'

function App() {
 

  return (
    <div className='font-body'>  
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="border-b z-10 mx-auto p-2 sticky top-0 bg-background/60 backdrop-blur-md z-index-2">
      <Header/>
    </div>
    <Hero/>
    <Menu/>
     </ThemeProvider>
    </div>
      )
}

export default App
