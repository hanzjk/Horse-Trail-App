import React from 'react';
import { BodyContent } from "../globalStyles"; 


// Hero Feature Content Carousel

const Home = () => {
	return (
    <>
      {/* Add Body tag before each component otherwise it won't render :(*/}
      <BodyContent>
        <p>home</p>
      </BodyContent>{" "}
    </>
  );
};

export default Home;
