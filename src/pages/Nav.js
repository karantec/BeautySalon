import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-6">
              <div>
                
                  <span className="text-xl font-bold text-gray-800">Event Booking</span>
               
              </div>
              <div>
                
                  <span className="text-gray-500 hover:text-gray-800 mr-4">Log in</span>
          
               
                  <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign up</span>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Nav