import './Login.css';
import './App.css';
import './index.css';
import { About } from './about';
import { Home } from './home';


export default function Div2() {

  return (
    <>
      <Navbar />
      <React.Routes>
        <React.Route path="/" element={<Home />} />
        <React.Route path="about" element={<About />} />
      </React.Routes>

    </>
  )
}