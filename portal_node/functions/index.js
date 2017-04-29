// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//insert data through CLI like this:
//firebase database:push -d "{\"isOpen\": false}" "//doors"

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push it into the Realtime Database then send a response
  admin.database().ref('/messages').push({original: original}).then(snapshot => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref);
  });
});

exports.doorQuery = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push it into the Realtime Database then send a response
  admin.database().ref('/doors/-KhskZa0FNVogYdi51JS')
  // .catch((reason) => {res.send(404, reason)})
  .on("value", function(snapshot) {
    console.log(snapshot.val());
    res.setHeader('Content-type', 'application/json');
    res.send(200, snapshot.val().isOpen 
      ? {speech: 'The door is open', displayText: 'The door is open'}
      : {speech: 'The door is closed', displayText: 'The door is closed'})
  });
 
});
