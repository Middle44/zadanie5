var mainContainer = document.getElementById("myData");
fetch('http://147.175.19.200:8765/json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });