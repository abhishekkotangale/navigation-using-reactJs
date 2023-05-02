import React from 'react'

const MenuCard = ({menuData}) => {
   // console.log(menuData); 
  return (
    <>
    {menuData.map((curElem)=>{
        const {id,name,category,image,description} = curElem;
        return (
            <div className='card-container' key={id}>
            <div className='card'>
                <div className='card-body'>
                    <span className='number'>{id}</span>
                    <span className='card-author'>{category}</span>
                    <h2 className='card-title'>{name}</h2>
                    <span className='card-description'>
                    {description}
                    </span>
                </div>

                <img src={image} alt='images' className='card-media'/>
                <span className='card-tag'>Order Now</span>
            </div>
        </div>
        )
    })}
    </>
  )
}

export default MenuCard