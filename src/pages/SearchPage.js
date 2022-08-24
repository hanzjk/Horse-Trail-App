import { React, useState, useEffect } from "react";
import { BodyContent } from "../globalStyles";
import TrailResultList from "./TrailResultList";
import { FaListUl, FaMapMarkedAlt } from "react-icons/fa";

function SearchPage() {
  const [inputs, setInputs] = useState({});
  const [type, setType] = useState("map");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code
    alert(JSON.stringify(inputs));
  };

  const displayList = (event) => {
    // event.preventDefault();
    setType(event.target.id);
    alert(type);
    // code
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <div className="container">
        <BodyContent>
          <form onSubmit={handleSubmit}>
            <div className="row">
              
              <div className="form-group col-lg-2 col-md-6  mb-4">
                <select
                  id="inputTrailType"
                  name="inputTrailType"
                  className="form-select"
                  value={inputs.inputTrailType || ""}
                  onChange={handleChange}
                >
                  <option selected>Any Trail Type</option>
                  <option value="Loop">Loop</option>
                  <option value="Out & Back">Out & Back</option>
                  <option value="Lollipop">Lollipop</option>
                  <option value="One Way"> One Way</option>
                </select>
              </div>

              <div className="form-group col-lg-2 col-md-6  mb-4">
                <select
                  id="inputSeason"
                  name="inputSeason"
                  className="form-select"
                  value={inputs.inputSeason || ""}
                  onChange={handleChange}
                >
                  <option selected>Any Season</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter"> Winter</option>
                </select>
              </div>

              <div className="form-group col-lg-2 col-md-6 col mb-4">
                <input
                  type="text"
                  name="inputTrailName"
                  className="form-control"
                  placeholder="Park/Trail Name"
                  value={inputs.inputTrailName || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-lg-2 col-md-6 col mb-4">
                <input
                  type="text"
                  name="inputTag"
                  className="form-control"
                  placeholder="Tags"
                  value={inputs.inputTag || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-lg-2 col-md-6  mb-4">
                <select
                  id="inputBikes"
                  name="inputBikes"
                  className="form-select"
                  value={inputs.inputBikes || ""}
                  onChange={handleChange}
                >
                  <option selected>Bikes</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="form-group col-lg-2 col-md-6  mb-4">
                <select
                  id="inputState"
                  name="inputState"
                  className="form-select"
                  value={inputs.inputState || ""}
                  onChange={handleChange}
                >
                  <option selected>State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="District of Columbia">
                    District of Columbia
                  </option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Guam">Guam</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Northern Marianas Islands">
                    Northern Marianas Islands
                  </option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Virgin Islands">Virgin Islands</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="text-center col">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Search for Trails"
                />
              </div>
            </div>
            <br></br>
            <div
              class="btn-group btn-group-toggle col-12"
              data-toggle="buttons"
            ></div>
          </form>

          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item col-6" role="presentation">
              <button
                class="btn btn-primary active col-12"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                style={{ "border-radius": "4px" }}
              >
                <FaMapMarkedAlt /> &nbsp;Map&nbsp;
              </button>
            </li>
            <li class="nav-item col-6" role="presentation">
              <button
                class=" btn btn-primary col-12"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                style={{ "border-radius": "4px" }}
              >
                <FaListUl /> &nbsp; List &nbsp;
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              Map
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row mt-5 justify-content-center">
                <TrailResultList />
              </div>
            </div>
          </div>
        </BodyContent>
      </div>
    </>
  );
}

export default SearchPage;
