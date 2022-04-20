import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import "./navbar.scss"
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <TranslateIcon className="icon"/>
          </div>
          <div className="item">
            <DarkModeIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <NotificationsIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img 
              src = {require("./images/jasson.jpg")}
              alt=""
              className="avatar"
            />
            <div className="userName">Jasson Molina </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar