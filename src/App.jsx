import Footer from './component/Footer'
import Header from './component/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateMenu from './component/CreateMenu'
import CreateMenuItem from './component/CreateMenuItem'
import Menu from './component/Menu';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/create-menu" element={<CreateMenu />} />
        <Route path="/create-menu-item/:id" element={<CreateMenuItem />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
