import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import Journal from "./components/pages/Journal";
import Error from "./components/pages/Error";
import SignUp from "./components/pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="*" element={<Error />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
