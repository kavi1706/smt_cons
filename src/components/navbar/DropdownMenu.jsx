import { useState, useRef, useEffect } from 'react';
import './DropdownMenu.css';
import userImage from '../../images/user.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/useUserContext';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null); // create a ref

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const { user, userLogout } = useUserContext();
  const handleLogout = () => {
    localStorage.removeItem('userDetails');
    userLogout(null);
    navigate('/login');
  };

  // attach event listener on mount and remove it on unmount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false); // set isOpen to false if the click is outside the component
    }
  };

  return (
    <div className="dropdown" ref={ref}>
      <button className="dropbtn" onClick={handleToggle}>
        <img src={userImage} alt="" />
        <p>{user}</p>
      </button>
      {isOpen && user!="KAVIPRIYA M" && (
        <div className="dropdown-content">
          <Link to="/cart">Your Cart</Link>
          <Link to="/orders">Ordered Items</Link>
          <Link onClick={handleLogout} to="/login">
            Logout
          </Link>
        </div>
      )}
      {isOpen && user=="KAVIPRIYA M" &&(
        <div className="dropdown-content">
        <Link to="/admin">Admin options</Link>
        <Link onClick={handleLogout} to="/login">
          Logout
        </Link>
      </div>
      )
      }
    </div>
  );
}

export default DropdownMenu;
