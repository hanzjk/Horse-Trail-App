import firebase from "firebase/app";
import { getStorage, ref } from "firebase/firebase-storage";
import { db } from "../../firestore";

// Create a root reference
const storage = firebase.storage();
function addGpxFiles(name, file) {
  return new Promise((resolve, reject) => {
    storage
      .ref(`trails/gpx/${name}/${file.name}`)
      .put(file)
      .then((docRef) => {
        resolve(docRef);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function addTrailImages(name, file) {
  return new Promise((resolve, reject) => {
    storage
      .ref(`trails/images/${name}/${file.name}`)
      .put(file)
      .then((docRef) => {
        resolve(docRef);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function addTrail(
  atvOrOffroad,
  bannerName,
  bestSeasonsCheck,
  bikers,
  city,
  country,
  description,
  dogs,
  elevationGain,
  gpxName,
  hikers,
  imageGal1Name,
  imageGal2Name,
  imageGal3Name,
  keywords,
  longitude,
  latitude,
  miles,
  obstaclesCheck,
  parkName,
  parkingImageName,
  parkingNotes,
  parkingSpots,
  restrictions,
  state,
  trailHeadCheck,
  trailMap,
  trailMapName,
  trailName,
  trailNotes,
  trailType,
  userId
) {
  return new Promise((resolve, reject) => {
    const data = {
      atvOrOffroad: atvOrOffroad,
      bannerName: bannerName,
      bestSeasonsCheck: bestSeasonsCheck,
      bikers: bikers,
      city: city,
      country: country,
      description: description,
      dogs: dogs,
      elevationGain: elevationGain,
      gpxName: gpxName,
      hikers: hikers,
      imageGal1Name: imageGal1Name,
      imageGal2Name: imageGal2Name,
      imageGal3Name: imageGal3Name,
      keywords: keywords,
      longitude: longitude,
      latitude: latitude,
      miles: parseFloat(miles),
      obstaclesCheck: obstaclesCheck,
      parkName: parkName,
      parkingImageName: parkingImageName,
      parkingNotes: parkingNotes,
      parkingSpots: parkingSpots,
      restrictions: restrictions,
      state: state,
      trailHeadCheck: trailHeadCheck,
      trailMap: trailMap,
      trailMapName: trailMapName,
      trailName: trailName,
      trailNotes: trailNotes,
      trailType: trailType,
      userId: userId,
    };
    db.collection("trails")
      .add(data)
      .then((docRef) => {
        resolve(docRef);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function getAllTrails() {
  return new Promise((resolve, reject) => {
    db.collection("trails")
      .get()
      .then((allTrails) => {
        resolve(allTrails);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

//get gpx file as a url to download
function getGpxFiles(name, fileName) {
  return new Promise((resolve, reject) => {
    storage
      .ref(`trails/gpx/${name}/${fileName}`)
      .getDownloadURL()
      .then((url) => {
        resolve(url);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

//get image file as a url to download
function getTrailImages(name, imageName) {
  return new Promise((resolve, reject) => {
    storage
      .ref(`trails/images/${name}/${imageName}`)
      .getDownloadURL()
      .then((url) => {
        resolve(url);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function getTrail(id) {
  return new Promise((resolve, reject) => {
    db.collection("trails")
      .doc(id)
      .get()
      .then((trail) => {
        resolve(trail);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function addRatings(id, rate) {
  return new Promise((resolve, reject) => {
    const data = {
      id: id,
      rate: parseInt(rate),
    };
    db.collection("trailsRatings")
      .add(data)
      .then((docRef) => {
        resolve(docRef);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function getRating(id) {
  return new Promise((resolve, reject) => {
    var query = db.collection("trailsRatings");
    query = query.where("id", "==", id);
    query
      .get()
      .then((ratings) => {
        resolve(ratings);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export default {
  addRatings,
  addTrail,
  addTrailImages,
  addGpxFiles,
  getAllTrails,
  getGpxFiles,
  getRating,
  getTrailImages,
  getTrail,
};
