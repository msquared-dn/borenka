import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ContextProvider } from "./context-api/upload-context";
import { Contact } from "./components/contact/Contact";
import { useEffect, useState, Suspense, lazy } from "react";
import { Preload } from "./components/Preload/Preload";
import Loader from "./components/loader/Loader";

function App() {
  const [firstFlowAni, setFirstFlowAni] = useState(false);

  const ChooseRegion = lazy(
    () => import("./components/choose-region/ChooseRegion")
  );
  const About = lazy(() => import("./components/about/About"));
  const Home = lazy(() => import("./components/home/Home"));
  const Organizations = lazy(
    () => import("./components/organizations/Organizations")
  );
  const Region = lazy(() => import("./components/region/Region"));

  useEffect(() => {
    if (localStorage.getItem("firstFlowAnimation")) {
      setFirstFlowAni(false);
    } else {
      setFirstFlowAni(true);
      setTimeout(() => {
        setFirstFlowAni(false);
        localStorage.setItem("firstFlowAnimation", "false");
      }, 7000);
    }
  }, []);

  return (
    <>
      {firstFlowAni ? (
        <Preload />
      ) : (
        <ContextProvider>
          <div className="App">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/map" element={<ChooseRegion />} />
                <Route path="/about" element={<About />} />
                <Route path="/organizations" element={<Organizations />} />
                <Route path="/map/:regionId" element={<Region />} />
              </Routes>
            </Suspense>
          </div>
        </ContextProvider>
      )}
    </>
  );
}

export default App;
