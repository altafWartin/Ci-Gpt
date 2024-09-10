import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPopup from "./pages/LoginPopup";
import HomePage1 from "./pages/HomePage1";
import Desktop from "./pages/Desktop";
import CiGpt from "./pages/CiGpt/CiGpt";
import Gpt from "./pages/CiGpt/gpt";
import Navbar from "./Component/Navbar";
import ChatScreen from "./pages/CiGpt/ChatScreen";

function App() {
  return (
    <div className="w-full relative bg-gray-600 overflow-hidden flex flex-col items-end justify-start pt-[1.687rem] px-[0rem] pb-[0rem] box-border gap-[1.25rem] leading-[normal] tracking-[normal] text-center text-[2.188rem] text-white font-archivo-semiexpanded">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login-popup" element={<LoginPopup />} />
        <Route path="/" element={<HomePage1 />} />
        <Route path="/Cigpt" element={<CiGpt />} />
        <Route path="/gpt" element={<Gpt/>} />  
        <Route path="/chat" element={<ChatScreen />} />  
        <Route path="/desktop-1" element={<Desktop />} />
      </Routes>
    </div>
  );
}

export default App;
