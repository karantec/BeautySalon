import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-6">
              <div>
                
              <span className="text-xl font-bold text-gray-800">
                   <span className='uppercase text-blue-500  font-sans font-bold text-center ml-9'>DD Planners </span>
                   <br/>
                   <span className='text-lg italic font-serif'>(Dream Day Event Planner)</span>
                  </span>
               
               
              </div>
              <div>
                
                 <a href="/"> <span className="text-gray-500 hover:text-gray-800 mr-4">Home</span></a>
          
               
                 <a href="https://drive.google.com/file/d/1XVF0Z02VDhmX22bnuP1S7pXOH7Am7Up-/view?usp=share_link"> <span className=" hover:bg-blue-700 text-white py-2 px-4 rounded">About</span>
  </a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Nav
