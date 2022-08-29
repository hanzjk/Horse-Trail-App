import firebase from "firebase/app";
import { getStorage, ref } from "firebase/firebase-storage";
import { db } from "../../firestore";

const storage = firebase.storage();

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
  nearByPlaces,
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
      nearByPlaces: nearByPlaces,
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

function getAllCamps() {
  return new Promise((resolve, reject) => {
    db.collection("camps")
      .get()
      .then((allCamps) => {
        resolve(allCamps);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

//get image file as a url to download
function getCampImages(name, imageName) {
  return new Promise((resolve, reject) => {
    storage
      .ref(`camps/images/${name}/${imageName}`)
      .getDownloadURL()
      .then((url) => {
        resolve(url);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function getCamp(id) {
  return new Promise((resolve, reject) => {
    db.collection("camps")
      .doc(id)
      .get()
      .then((camp) => {
        resolve(camp);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export default {
  addCamp,
  addCampImages,
  getAllCamps,
  getCamp,
  getCampImages,
};
