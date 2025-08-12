
import './App.css';
import { Routes,Route } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Shop from './components/pages/Shop';
function App() {
 

  return (
    <>
     <Routes>
      <Route path="/" element={<RootLayout/>}>
         <Route index element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/shop" element={<Shop/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App;
