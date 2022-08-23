import React from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TrailResultList from './TrailResultList';

function SearchPage() {
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        defaultActiveKey="map"
        className="mb-3"
      >
        <Tab eventKey="map" title="Map">
          Map
        </Tab>
        <Tab eventKey="list" title="List">
          <TrailResultList/>
        </Tab>
        
      </Tabs>
    </>
  );
}

export default SearchPage