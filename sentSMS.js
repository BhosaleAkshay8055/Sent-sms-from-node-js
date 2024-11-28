// Import the Twilio library
const twilio = require('twilio');

// Twilio credentials from the Twilio Console
const accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Replace with your Account SID
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx';   // Replace with your Auth Token

// Initialize the Twilio client
const client = new twilio(accountSid, authToken);

// Send a message
client.messages
  .create({
    body: 'Hello! This message from node js.', // Your message body
    from: '+14427776938', // Your Twilio phone number
    to: '+917517723455'    // Recipient's phone number
  })
  .then(message => console.log(`Message sent successfully! SID: ${message.sid}`))
  .catch(error => console.error('Error sending message:', error));
