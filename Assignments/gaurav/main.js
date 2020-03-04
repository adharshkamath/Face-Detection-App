var imageurl = document.getElementById('URL').value;
  
const Clarifai = require('clarifai');

const app = new Clarifai.App({
apiKey: '2f76f357bc5842daa2ccc2c708886327'
});
app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
