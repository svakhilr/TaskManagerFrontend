import React from 'react'
import { useNavigate } from 'react-router-dom';


function Header() {
  
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/signin'); // Redirect after logout
  };
  
  return (
    <header className="bg-gray-700 text-white flex justify-between items-center px-6 py-4 shadow-md">
  <div>
    <a href="/dashboard" className="text-2xl font-bold">Task Manager</a>
  </div>
  <nav>
    <ul className="flex space-x-6">
      <li>
        <a href="/task/create" className="hover:text-teal-400 transition-colors duration-200">
          Create Task
        </a>
      </li>
      <li>
        <button onClick={handleLogout} className="hover:text-red-500 transition-colors duration-200">
          Log Out
        </button>
      </li>
    </ul>
  </nav>
</header>

  )
}

export default Header