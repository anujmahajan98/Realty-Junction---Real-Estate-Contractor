import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import About from "./pages/about"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/Signin"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/about-us" element={<About />}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}
