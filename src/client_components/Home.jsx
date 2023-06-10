import React from "react";
import ImgStrip from "./home/ImgStrip";
import CategoryList from "./home/CategoryList";

const Home = () => {
  return (
    <React.Fragment>

      <ImgStrip/>

      <main>
        <CategoryList/>
      </main>
    </React.Fragment>
  );
};

export default Home;
