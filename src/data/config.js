import firebase from "firebase";
const settings = { timestampsInSnapshots: true };
var firebaseConfig = {
  apiKey: "AIzaSyDiEaYnr8tVXyok_zaZkiff21td0EF6B9I",
  databaseURL: "https://ticket-system-react-default-rtdb.firebaseio.com",
  projectId: "ticket-system-react",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
export default firebase;
