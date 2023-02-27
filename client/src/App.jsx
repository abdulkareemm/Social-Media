import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { divBlur } from "./utils/CommenCss";
import { Home, Profile } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);
  return (
    <div className="bg-background overflow-hidden p-[1rem]">
      <div className={`${divBlur} top-[-18%] right-0`}></div>
      <div className={`${divBlur} top-[36%] left-[-8rem]`}></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
