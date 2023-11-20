import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// *********** Below line is commented out to prevent re-seeding of database ***********
// import { seedDatabase } from "../seed";
// *********** Never uncomment the above line unless you want to re-seed the database **

// we need to seed the database here

// We need a config here

const config = {
  apiKey: "AIzaSyCqO16n0QuVzKND9mPv-b4OKjMN9erbgJk",
  authDomain: "netflix-clone-d6cfb.firebaseapp.com",
  projectId: "netflix-clone-d6cfb",
  storageBucket: "netflix-clone-d6cfb.appspot.com",
  messagingSenderId: "1089467293232",
  appId: "1:1089467293232:web:eb0b0f15c029a4997a57f5",
};

const firebase = Firebase.initializeApp(config);

// *********** Below line is commented out to prevent re-seeding of database ***********
// seedDatabase(firebase);
// *********** Above line is commented out to prevent re-seeding of database ***********
// *********** Never uncomment the above line unless you want to re-seed the database **

export { firebase };
