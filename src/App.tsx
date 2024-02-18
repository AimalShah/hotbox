import Header from './components/Header'
import { ThemeProvider } from "@/components/theme-provider"
import Hero from './components/Hero'
import Menu from './components/Menu'

function App() {
 

  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="border-b mx-auto p-2 ">
      <Header/>
    </div>
    <Hero/>
    <Menu/>
     </ThemeProvider>
    </>
  )
}

export default App
