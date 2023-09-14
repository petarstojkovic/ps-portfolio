import { useState, useEffect } from "react"
import Header from "./Header"
import Loading from "./Loading"
import About from "./About"
import TypingEffect from "./TypingEffect"
import Skills from "./Skills"
import Footer from "./Footer"

function App() {
const [loading, setLoading] = useState(true)
const [showContent, setShowContent] = useState(false);
  const toggleContent = () => {
    setShowContent(true)
  }

useEffect(() => {
  setTimeout(()=>{
    setLoading(false)
  }, 2000)
}, [])

  return <>
    <div className="container">
      {loading ? <Loading /> : showContent ? (
        <div>
{loading ? <Loading /> : <><div className="content"><Header /><Skills /><About /><Footer /></div></>}
        </div>
      ) : (
        <>
          <div>
        <TypingEffect />
        <button onClick={toggleContent}>click here to continue</button>
          </div>
        </>
    )}
    </div>
    </>
}

export default App
