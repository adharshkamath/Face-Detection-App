 const Clarifai = require('clarifai');
 const app = new Clarifai.App({
 apiKey: '176f24ec69524f56b7d177dd15ba02ff'
});
app.models.predict("a403429f2ddf4b49b307e318f00e528b",document.getElementById("exampleFormControlInput1").value).then(
    function(response) {
      // do something with response
      alert("Hello");
    },
    function(err) {
      // there was an error
    }
  );

