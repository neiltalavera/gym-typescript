import Benefits from "@/scenes/benefits/";
import Navbar from "@/scenes/navbar/";
import Home from "@/scenes/home/";
import OurClasses from "@/scenes/ourClasses/";
import ContactUs from "@/scenes/contactUs/";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    // when we're handling window type objects, we always want to add the event listener
    window.addEventListener("scroll", handleScroll);
    // return is whenever the component disappears 
    return () => window.removeEventListener("scroll", handleScroll); // this will allow to remove when they leave the page 
    // if not done, this could lead to memory leaks and certain bugs that are not ideal.(?)
  }, []);

  return <div className="app bg-gray-20">
    <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
    <Footer setSelectedPage={setSelectedPage} />
  </div>;
}

export default App;
