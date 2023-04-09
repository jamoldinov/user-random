import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/form/Form";
import { useFetch } from "./hooks/useFetch";
import Footer from "./components/footer/Footer";
import NotFound from "./components/pages/notFound";

function App() {
  const {data, error, isPending} = useFetch ('https://randomuser.me/api/?results=9')

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="*" element={ <NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
