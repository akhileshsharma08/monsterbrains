import React from 'react'

const SingleProject = ({index,title,setModal,category}) => {
  return (
    <div>
        <div className='transition-all hover:translate-x-4 ease-in 0.3s hover:opacity-60 cursor-pointer py-4 flex justify-between items-center flex-row' onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} >
            <h1 className='font-sembold'>{title}</h1>
            <p className='text-lg capitalize'>{category}</p>
        </div>
            <hr />
    </div>
  )
}

export default SingleProject