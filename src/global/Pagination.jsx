import React, { useEffect, useState } from 'react'
import { doApiGet } from '../services/services';
import { Link } from 'react-router-dom';



const Pagination = (props) => {

    const [pages, setPages] = useState();

    useEffect(()=>{
      doApi();
    })

    const doApi = async() => {
        //   let url = `http://localhost:3001/products/count?perPage=5`
          
          let resp = await doApiGet(props.apiPages);
          console.log(resp);
          setPages(resp.pages);
        }// all props from productAdmin
        
        

  return (
    <div>
    <span className='text-white font-medium' >Page: </span>
   {[...Array(pages)].map((item,i) => {
     return(
       <Link to={props.linkTo+(i+1)} key={i} className={props.linkCss}>{i+1}</Link>
     )
   })}

 </div>
  )
}

export default Pagination