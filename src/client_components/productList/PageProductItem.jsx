import React from 'react'
import { Link } from 'react-router-dom';
import { fixImageUrl } from '../../services/services';

const PageProductItem = (props) => {

    let item = props.item;

  return (
    <div>
       <div className='mb-5 bg-green-500 '>
      <div className=''>
      <div>
            <img src={item.img_url} className='w-[150px]' alt="" />
        </div>
        <h4>{item.name}</h4>
        <div>Category: {item.category}</div>
        <Link className='text-info' to={"/info/"+item._id}>More info</Link>
      </div>
    </div>
    
    </div>
  )
}

export default PageProductItem