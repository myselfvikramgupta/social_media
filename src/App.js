import { Routes, Route}  from "react-router-dom";      
import Header from './components/Header'
import Home from './Pages/Home'
import PostCreate from './Pages/PostCreate'
import './App.css'

function App() {
  return (
    <>
    {/* <Header />
    <Home /> */}
     <Routes>
       <Route path="/" element={<Header />}>
         <Route index  element={<Home />} />
         <Route  path="/post/create" element={<PostCreate />} />
         </Route>
     </Routes>
    </>
    
  );
}

export default App;
