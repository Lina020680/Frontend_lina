import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux'; 
import { RootState } from "store/store";
import Layout from "pages/Layout/Layout";
import Home from "pages/Home/Home";
import Guide from "pages/Guide/Guide";
import MyPots from "pages/MyPots/MyPots";
import Pot1 from "pages/MyPots/Pot1/Pot1";
import Pot2 from "pages/MyPots/Pot2/Pot2"; 
import Pot3 from "pages/MyPots/Pot3/Pot3";
import LoginForm from "pages/LoginForm/LoginForm";
import RegisterForm from "pages/RegisterForm/RegisterForm";

function App() {
  const isUserLoggedIn = useSelector((state: RootState) => state.auth.isUserLoggedIn);
  return (
    <BrowserRouter>
       <Layout isUserLoggedIn={isUserLoggedIn}>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/guide" element={<Guide />} />
          <Route path="/mypots" element={<MyPots />} />
          <Route path="/mypots/pot1" element={<Pot1 />} /> 
          <Route path="/mypots/pot2" element={<Pot2 />} /> 
          <Route path="/mypots/pot3" element={<Pot3 />} />           
          <Route path="/login" element={<LoginForm />} /> 
          <Route path="/register" element={<RegisterForm />} /> 
          <Route path="*" element={<div>Page Not Found</div>} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App; 