import { React, useEffect, useState } from "react";
import FireStoreService from "../utils/services/camps/FireStoreService";
import { Card } from "react-bootstrap";

export default function DisplayCamp() {
  const [campDetails, setCampDetails] = useState({});
  useEffect(() => {
    FireStoreService.getCamp("Q1QXQTNfuoCu7d1IdI7Q")
      .then((response) => {
        console.log(response.data());
        setCampDetails(response.data());
        const pathBanner = campDetails.campName;
        FireStoreService.getCampImages(
          "banners/" + pathBanner,
          campDetails.bannerName
        )
          .then((res) => {
            const bannerImg = document.getElementById("banner");
            bannerImg.setAttribute("src", res);
          })
          .catch((e) => {
            console.log(e);
          });

        FireStoreService.getCampImages(
          "gallery/" + campDetails.campName,
          campDetails.imageGal1Name
        )
          .then((gal1) => {
            const imageGal1 = document.getElementById("imageGal1");
            imageGal1.setAttribute("src", gal1);
          })
          .catch((e) => {
            console.log(e);
          });

        FireStoreService.getCampImages(
          "gallery/" + campDetails.campName,
          campDetails.imageGal2Name
        )
          .then((gal2) => {
            const imageGal2 = document.getElementById("imageGal2");
            imageGal2.setAttribute("src", gal2);
          })
          .catch((e) => {
            console.log(e);
          });

        FireStoreService.getCampImages(
          "gallery/" + campDetails.campName,
          campDetails.imageGal3Name
        )
          .then((gal3) => {
            const imageGal3 = document.getElementById("imageGal3");
            imageGal3.setAttribute("src", gal3);
          })
          .catch((e) => {
            console.log(e);
          });

        displayCampUsers("reservation", campDetails.reservation);
        displayCampUsers("paperworkRequired", campDetails.paperworkRequired);
        displayCampSites(campDetails.campSiteTypesCheck.campSiteTypes);
        displaySeasons(campDetails.bestSeasonsCheck.bestSeasons);
        displayAmenities(campDetails.amenitiesCheck.amenities);
      })
      .catch((e) => console.log(e));
  }, []);

  function displayCampUsers(name, value) {
    const reservation = document.getElementById("reservation");
    const paperWork = document.getElementById("paperWorkRequired");
    if (name === "reservation" && value === "Yes") {
      reservation.setAttribute(
        "src",
        "https://img.icons8.com/ios-filled/50/000000/reservation.png"
      );
    } else if (name === "reservation" && value === "No") {
      reservation.setAttribute(
        "src",
        "https://img.icons8.com/ios/50/000000/reservation.png"
      );
    }

    if (name === "paperworkRequired" && value === "Yes") {
      paperWork.setAttribute(
        "src",
        "https://img.icons8.com/ios-filled/50/000000/assignment-turned-in.png"
      );
    } else if (name === "paperworkRequired" && value === "No") {
      paperWork.setAttribute(
        "src",
        "https://img.icons8.com/ios/50/000000/assignment-turned-in.png"
      );
    }
  }

  function displayCampSites(check) {
    const dispersed = document.getElementById("dispersed");
    const tentSite = document.getElementById("tentSite");
    const rvSite = document.getElementById("rvSite");
    dispersed.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/bridge.png"
    );
    tentSite.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/wave-lines.png"
    );
    rvSite.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/landslide.png"
    );

    for (var i = 0; i < check.length; i++) {
      if (check[i] === "Dispersed") {
        dispersed.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/bridge.png"
        );
      } else {
      }
      if (check[i] === "Tent Site") {
        tentSite.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/wave-lines.png"
        );
      } else if (check[i] === "Rv Site") {
        rvSite.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/landslide.png"
        );
      }
    }
  }

  function displaySeasons(check) {
    const spring = document.getElementById("spring");
    const summer = document.getElementById("summer");
    const fall = document.getElementById("fall");
    const winter = document.getElementById("winter");
    spring.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/spring.png"
    );
    summer.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/summer--v1.png"
    );
    fall.setAttribute("src", "https://img.icons8.com/ios/50/000000/autumn.png");
    winter.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/winter.png"
    );
    for (var i = 0; i < check.length; i++) {
      if (check[i] === "Spring") {
        spring.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/spring.png"
        );
      } else if (check[i] === "Summer") {
        summer.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/summer.png"
        );
      } else if (check[i] === "Fall") {
        fall.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/autumn.png"
        );
      } else if (check[i] === "Winter") {
        winter.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/winter.png"
        );
      }
    }
  }

  function displayAmenities(check) {
    const restroom = document.getElementById("restrooms");
    const water = document.getElementById("water");
    const corrals = document.getElementById("corrals");
    const restaurant = document.getElementById("restaurant");
    const hookup = document.getElementById("hookup");
    restroom.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/cottage--v1.png"
    );
    water.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/bottle-of-water.png"
    );
    corrals.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/coral.png"
    );
    restaurant.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/restaurant--v1.png"
    );
    hookup.setAttribute(
      "src",
      "https://img.icons8.com/ios/50/000000/wired-network-connection.png"
    );

    for (var i = 0; i < check.length; i++) {
      if (check[i] === "Restrooms") {
        console.log("lk");
        restroom.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/cottage--v1.png"
        );
      } else if (check[i] === "Water") {
        water.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/bottle-of-water.png"
        );
      } else if (check[i] === "Corrals") {
        corrals.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/coral.png"
        );
      } else if (check[i] === "Restaurant") {
        restaurant.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/restaurant--v1.png"
        );
      } else if (check[i] === "Hookup") {
        hookup.setAttribute(
          "src",
          "https://img.icons8.com/ios-filled/50/000000/wired-network-connection.png"
        );
      }
    }
  }

  return (
    <div
      className="container"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Title>
            <h1 className="text-center">{campDetails.campName}</h1>
            <h2 className="text-center">
              {campDetails.city}&nbsp;{campDetails.state}
            </h2>
            <h3 className="text-center">{campDetails.campType}</h3>
          </Card.Title>
          <div className="row p-3">
            <img
              alt="Banner Image"
              id="banner"
              style={{
                display: "block",
                width: "20%",
                height: "auto",
                margin: "0px auto",
              }}
            ></img>
          </div>
          <div className="row text-center">
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Road to Camp
                  </Card.Title>
                  <div>
                    <h5>{campDetails.roadToCamp}</h5>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Park Name
                  </Card.Title>
                  <div>{campDetails.parkName}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Phone
                  </Card.Title>
                  <div>{campDetails.phone}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Email
                  </Card.Title>
                  <div>{campDetails.email}</div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <div className="row text-center">
            <div className="col md-8">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Amenities
                  </Card.Title>
                  <div className="row">
                    <div className="col md-2">
                      <img alt="Restrooms" id="restrooms"></img>
                    </div>
                    <div className="col md-2">
                      <img alt="Water" id="water"></img>
                    </div>
                    <div className="col md-2">
                      <img alt="Corrals" id="corrals"></img>
                    </div>
                    <div className="col md-2">
                      <img alt="Restaurant" id="restaurant"></img>
                    </div>
                    <div className="col md-2">
                      <img alt="Hookup" id="hookup"></img>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-4">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Camp Users
                  </Card.Title>
                  <div className="row">
                    <div className="col md-2">
                      <img alt="Reservation" id="reservation"></img>
                    </div>
                    <div className="col md-2">
                      <img
                        alt="PaperWork Required"
                        id="paperWorkRequired"
                      ></img>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <div className="row text-center">
            <div className="col md-4">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Seasons
                  </Card.Title>
                  <div className="row">
                    <div className="col md-3">
                      <img alt="Spring" id="spring"></img>
                    </div>
                    <div className="col md-3">
                      <img alt="Summer" id="summer"></img>
                    </div>
                    <div className="col md-3">
                      <img alt="Fall" id="fall"></img>
                    </div>
                    <div className="col md-3">
                      <img alt="Winter" id="winter"></img>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-4">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Camp Site Types
                  </Card.Title>
                  <div className="row">
                    <div className="col md-3">
                      <img alt="Dispersed" id="dispersed"></img>
                    </div>
                    <div className="col md-3">
                      <img alt="Tent Site" id="tentSite"></img>
                    </div>
                    <div className="col md-3">
                      <img alt="Rv Site" id="rvSite"></img>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <div className="row text-center">
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Website
                  </Card.Title>
                  <div>{campDetails.website}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Facebook
                  </Card.Title>
                  <div>{campDetails.facebook}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Instagram
                  </Card.Title>
                  <div>{campDetails.instagram}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Twitter
                  </Card.Title>
                  <div>{campDetails.twitter}</div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <div className="row text-center">
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Restrictions
                  </Card.Title>
                  <div>{campDetails.restrictions}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Pet policy
                  </Card.Title>
                  <div>{campDetails.petPolicy}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Reservation Link
                  </Card.Title>
                  <div>{campDetails.reservationLink}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Reservation Call
                  </Card.Title>
                  <div>{campDetails.reservationCall}</div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <div className="row text-center">
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Reservation Description
                  </Card.Title>
                  <div>{campDetails.reservationDescription}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Reservation Email
                  </Card.Title>
                  <div>{campDetails.reservationEmail}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Horse Site
                  </Card.Title>
                  <div>{campDetails.horseSite}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Cost Per Night
                  </Card.Title>
                  <div>{campDetails.costPerNight}</div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <div className="row text-center">
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Camp Notes
                  </Card.Title>
                  <div>{campDetails.campNotes}</div>
                </Card.Body>
              </Card>
            </div>
            <div className="col md-3">
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      backgroundColor: "#101522",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Nearby Places to Ride
                  </Card.Title>
                  <div>{campDetails.nearbyPlaces}</div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <div className="row text-center">
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title
                  style={{
                    backgroundColor: "#101522",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  Camp Gallery
                </Card.Title>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="true"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        alt="Gallery Image 01"
                        id="imageGal1"
                        className="d-block w-25"
                        alt="..."
                        style={{
                          height: "auto",
                          margin: "0px auto",
                        }}
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        alt="Gallery Image 02"
                        id="imageGal2"
                        className="d-block w-25"
                        alt="..."
                        style={{
                          height: "auto",
                          margin: "0px auto",
                        }}
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        alt="Gallery Image 03"
                        id="imageGal3"
                        className="d-block w-25"
                        alt="..."
                        style={{
                          height: "auto",
                          margin: "0px auto",
                        }}
                      ></img>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
