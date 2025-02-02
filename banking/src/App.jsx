//importing react router to navigate between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; //Navigation bar
import Home from './Pages/Home'; //Home page
import Trends from './Pages/Trends'; //Trends page
import Subscriptions from './Pages/Subscriptions'; //Subscriptions page
import Profile from './Pages/Profile'; //Profile
import Contest from './Pages/Contest'; //Contest

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contest" element={<Contest />} />
        </Routes>
      </Router>
  )
}
export default App
