import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/routes/aboutme/aboutme.component";
import { Resume } from "./components/routes/resume/resume.components";
import { Skills } from "./components/routes/skills/skills.components";
import { ContactMe } from "./components/routes/contact/contactme.component";
import { PrimeReactProvider } from 'primereact/api';
import { Navigation } from "./components/routes/navigation/navigation.component";


function App() {

  return (
    <PrimeReactProvider>
  <Routes>
    <Route path="/" element={ <Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path="/aboutme" element={<AboutMe/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/contactme" element={<ContactMe/>}/>
    </Route>

  </Routes>

    </PrimeReactProvider>

 
  );
}

export default App;
