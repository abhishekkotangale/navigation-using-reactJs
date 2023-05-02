import React from 'react'

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
        <nav className='navbar'>
            <div>
                {
                    menuList.map((curElem) => {
                        return(
                            <button onClick={() => filterItem(curElem)}>{curElem}</button>
                        )
                    })
                }
                
                
            </div>
        </nav>
    </>
  )
}

export default Navbar