import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL, doApiGet } from "../../services/services";

const CategoryList = () => {
  const nav = useNavigate();
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = API_URL + "/categories";
    let data = await doApiGet(url);
    console.log(data);
    setAr(data);
  };

  return (
    <div className="w-full">
      {ar.map((item, i) => {
        return (

          <div className="py-1 w-[1300px] justify-center"
            onClick={() => { nav("/category/" + item.category_id);}}
            key={item._id} >

            <div className="h-[500px] w-[1300px] text-center justify-center font-semibold  object-contain bg-no-repeat items-center"
             style={{ backgroundImage: `url(${item.img_url})` }} >

              <h3 className="">
                <Link to={"/category/" + item.category_id}>{item.name}</Link>
              </h3>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
