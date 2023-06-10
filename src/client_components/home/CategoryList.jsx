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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {ar.map((item, i) => {
        return (
          <article
            onClick={() => { nav("/category/" + item.category_id);}}
            key={item._id}
            className="col-span-1 md:col-span-3 shadow mt-5">

            <div className=""
             style={{ backgroundImage: `url(${item.img_url})` }}
            >

              <h3>
                <Link to={"/category/" + item.category_id}>{item.name}</Link>
              </h3>

            </div>

          </article>
        );
      })}
    </div>
  );
};

export default CategoryList;
