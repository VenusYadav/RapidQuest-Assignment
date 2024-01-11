import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes,Switch} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import List1Page from './List1Page';
import List2Page from './List2Page';
import ContactPage from './ContactPage';
import NotificationPage from './NotificationPage';
import LogoutPage from './LogoutPage';

function App() {

  const[isSearchVisible, setIsSearchVisible] = useState(false);

  function toggleSearchInput()
  {
       setIsSearchVisible(!isSearchVisible);
       
  };

  const [activeIcon, setActiveIcon] = useState(null);

  // Update the click handlers to set the active icon
  const handleIconClick = (iconName) => {
    setIsSearchVisible(false); // Close the search bar if open
    setActiveIcon(iconName);
  };

  return (
    <Router >
       <div className='app-container' >
          <div className='sidebar'>
              <div className='butterfly-img'>
                    <img src='https://t4.ftcdn.net/jpg/04/30/16/69/360_F_430166907_bTGu8iOGGII1HvJjvUxcEtMB83f3U3Jv.jpg' width="30px" height="30px"></img>
              </div>
              <div className='search-container'>
                    <div className="search-icon" onClick={toggleSearchInput}>
                          🔍
                      </div>
                      {isSearchVisible && (<input type="text" className="search-input" name="q" placeholder="Search..." autoFocus /> )}
                </div>  
              <div className={`home ${activeIcon === 'home' ? 'active' : ''}`} onClick={() => handleIconClick('home')}>
                    <Link to="/"> <img src='https://cdn-icons-png.flaticon.com/512/846/846449.png' width="22px" height="22px"></img></Link>
              </div>  
              <div className={`list1 ${activeIcon === 'list1' ? 'active' : ''}`} onClick={() => handleIconClick('list1')}>
                      <Link to="/list1"> <img src='https://i.pinimg.com/originals/c2/46/eb/c246ebe54278ac230d528e8bd64d6109.png' width="25px" height="25px"></img></Link>   
              </div>
              <div className={`list2 ${activeIcon === 'list2' ? 'active' : ''}`} onClick={() => handleIconClick('list2')}> 
                      <Link to="/list2"> <img src='https://cdn.icon-icons.com/icons2/2070/PNG/512/notebook_icon_125988.png' width="25px" height="25px"></img></Link>
              </div>
              <div className={`contact ${activeIcon === 'contact' ? 'active' : ''}`} onClick={() => handleIconClick('contact')}>
                      <Link to="/contact"> <img src='https://static.vecteezy.com/system/resources/previews/008/506/400/original/telephone-contact-icon-in-black-circle-shape-free-png.png' width="22px" height="22px"></img></Link>
              </div>
              <div className={`notification ${activeIcon === 'notification' ? 'active' : ''}`} onClick={() => handleIconClick('notification')}>
                      <Link to="/notification"> <img src='https://cdn-icons-png.flaticon.com/512/1827/1827504.png' width="24px" height="24px"></img></Link>
              </div>
              <div className={`logout-icon ${activeIcon === 'logout-icon' ? 'active' : ''}`} onClick={() => handleIconClick('logout-icon')}>
                      <Link to="/logout-icon"> <img src='https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png' width="25px" height="25px"></img></Link>
              </div>
          </div>

          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/list1" element={<List1Page/>} />
            <Route path="/list2" element={<List2Page/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/notification" element={<NotificationPage/>} />
            <Route path="/logout-icon" element={<LogoutPage/>} />
          </Routes>
         </div>
    </Router>
       
  );
}

export default App;
