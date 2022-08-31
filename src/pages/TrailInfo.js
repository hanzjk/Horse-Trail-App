import { React, useState, useEffect } from "react";
import { BodyContent } from "../globalStyles";
import FireStoreService from "../utils/services/trails/FireStoreService";

function TrailInfo(props) {

  const [trail, setTrail] = useState({});
  const [trailID, setTrailID] = useState();

  const getTrail = async (id) => {
    const data = await FireStoreService.getTrail(id);
    setTrail(data);
  };
 
 
  
  useEffect(() => {
    var url = document.location.href;
    var id = url.toString().split("/")[4];
    setTrailID(id);
    getTrail(trailID);
  }, []);
  return (
    <BodyContent>
      <p>Trial Info</p>
      {trailID}
      {JSON.stringify(trail)}
    </BodyContent>
  );
}

export default TrailInfo;
