import { BrowserRouter , Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout ><Home /></Layout>} />
          <Route path="*" element={<Layout ><NotFound /></Layout>} />
          {/* <Route path="*" element={<NotFound />} /> */} 
          {/* DEFINE YOUR ROUTES AS <Layout><ComponentName></Layout> */}
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
