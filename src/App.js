// import './App.css';

// import { useState } from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './page/AboutPage'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import AboutIconLink from './components/AboutIconLink'
import { Routes } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext'


function App() {
  // const [feedback, setFeedback] = useState(FeedbackData)



  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
