const accountSid = "AC2d5041587b35c643ca1e0e81c0ecf862";
const authToken = "f05d61df3b10fceac9c9310bba22cfb0"
const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true,
});

client.messages
  .create({
     body: 'Bem-Vindo Beno Fernandes',
     from: '+19569486944',
     to: '+244939109040'
   })
  .then(message => console.log(message.sid));
