import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCQeAA6ipbaYtowlQbHDH3XuaKLzTFcKHc",
  authDomain: "goal-tracker-c2196.firebaseapp.com",
  databaseURL: "https://goal-tracker-c2196.firebaseio.com",
  projectId: "goal-tracker-c2196",
  storageBucket: "goal-tracker-c2196.appspot.com",
  messagingSenderId: "664355665075"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');