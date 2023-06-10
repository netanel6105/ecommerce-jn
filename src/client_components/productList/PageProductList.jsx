import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, doApiGet } from "../../services/services";
import Loading from "../../global/Loading";
import PageProductItem from "./PageProductItem";

const PageProductList = () => {
  const [ar, setAr] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [catInfo, setCatInfo] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    setLoading(true);
    let catName = params["catName"];
    let urlCat = `${API_URL}/categories/byCat/${catName}`;
    let dataCat = await doApiGet(urlCat);
    console.log(dataCat);
    setCatInfo(dataCat)

    let url = `${API_URL}/products/?cat=${catName}`;
    let data = await doApiGet(url);
    console.log(data);
    setAr(data);
    setLoading(false)
  };


  
  return (

    <div className=''>
    {loading && <Loading/>}

    <React.Fragment>
    <h1 className=''>product list: {catInfo.name}</h1>
    <p className='mb-5'>{catInfo.info}</p>
    <div className=''>

        {ar.map(item =>{
            return(
                <PageProductItem key={item._id} item={item}/>
            )
        })}
    </div>
    </React.Fragment>
</div>
  )
};

export default PageProductList;
