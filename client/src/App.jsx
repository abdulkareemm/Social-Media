import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);
  return <div className="">run</div>;
};

export default App;
