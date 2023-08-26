import {Route, Routes} from "react-router-dom"
import Home from "./page/home";
import Education from "./page/education";
import Layout from "./page";
import "./global.scss"

function App() {
  return (
    <main className="app-container">
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route  path="education" element={<Education/>}/>
      </Route>
     </Routes>
    </main>
  );
}

export default App;
