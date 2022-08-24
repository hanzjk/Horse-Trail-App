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

function addCampImages(name, file) {
  return new Promise((resolve, reject) => {
    storage
      .ref(`camps/images/${name}/${file.name}`)
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
  trailName,
  trailNotes,
  trailType
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
      miles: miles,
      obstaclesCheck: obstaclesCheck,
      parkName: parkName,
      parkingImageName: parkingImageName,
      parkingNotes: parkingNotes,
      parkingSpots: parkingSpots,
      restrictions: restrictions,
      state: state,
      trailHeadCheck: trailHeadCheck,
      trailMap: trailMap,
      trailName: trailName,
      trailNotes: trailNotes,
      trailType: trailType,
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

function addCamp(
  amenitiesCheck,
  bannerName,
  bestSeasonsCheck,
  campName,
  campNotes,
  campSiteTypesCheck,
  campType,
  city,
  costPerNight,
  description,
  email,
  facebook,
  horseSite,
  imageGal1Name,
  imageGal2Name,
  imageGal3Name,
  instagram,
  keywords,
  longitude,
  latitude,
  paperworkRequired,
  parkName,
  petPolicy,
  phone,
  reservation,
  reservationCall,
  reservationDescription,
  reservationEmail,
  reservationLink,
  restrictions,
  roadToCamp,
  state,
  twitter,
  website
) {
  return new Promise((resolve, reject) => {
    const data = {
      amenitiesCheck: amenitiesCheck,
      bannerName: bannerName,
      bestSeasonsCheck: bestSeasonsCheck,
      campName: campName,
      campNotes: campNotes,
      campSiteTypesCheck: campSiteTypesCheck,
      campType: campType,
      city: city,
      costPerNight: costPerNight,
      description: description,
      email: email,
      facebook: facebook,
      horseSite: horseSite,
      imageGal1Name: imageGal1Name,
      imageGal2Name: imageGal2Name,
      imageGal3Name: imageGal3Name,
      instagram: instagram,
      keywords: keywords,
      longitude: longitude,
      latitude: latitude,
      paperworkRequired: paperworkRequired,
      parkName: parkName,
      petPolicy: petPolicy,
      phone: phone,
      reservation: reservation,
      reservationCall: reservationCall,
      reservationDescription: reservationDescription,
      reservationEmail: reservationEmail,
      reservationLink: reservationLink,
      restrictions: restrictions,
      roadToCamp: roadToCamp,
      state: state,
      twitter: twitter,
      website: website,
    };
    db.collection("camps")
      .add(data)
      .then((docRef) => {
        resolve(docRef);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export default {
  addTrail,
  addCamp,
  addCampImages,
  addTrailImages,
  addGpxFiles,
};
