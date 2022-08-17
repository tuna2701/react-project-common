import React from "react";
import Nav from "../nav/Nav";

const Home = (props) => {
  const {lang} = props;
  return <div>
    <h1>Home Page</h1>
    <Nav lang={lang}/>

  </div>;
};

export default Home;
