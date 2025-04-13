
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router';
import { AppContext, AppContextProvider } from './Context';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>

  )
}

export { App }
