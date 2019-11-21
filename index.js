const WMSCapabilities = ol.format.WMSCapabilities;
var parser = new WMSCapabilities();
const layersToShow = [];
function Layers() 
{
  fetch('http://localhost:8080/geoserver/Blasko/wms?service=WMS&version=1.3.0&request=GetCapabilities').then(function (response) 
  {
    return response.text();
  }).then(function (text) 
  {
    var data = parser.read(text);
    //console.log(data.Capability.Layer.Layer);
    //console.log(data.Capability.Layer.Layer[1].Name);
    data.Capability.Layer.Layer.forEach(layer => 
      {
        //console.log(layer.Name, layer.queryable)
      });
    var table = "<tr><th>Name</th><th>Queryable</th><th>Checkbox</th></tr>";
    var rows = data.Capability.Layer.Layer.length;
    //var cols = test;
    for (var r = 1; r < rows; r++) 
    {
      table += '<tr>';
      for (var c = 1; c <= 1; c++) 
      {
        table += '<tr>' + '<td>' + data.Capability.Layer.Layer[r - 1].Name + '</td>' + '<td>' + data.Capability.Layer.Layer[r - 1].queryable + '</td>' + '<td>' + `<input onclick="showLayer('` + data.Capability.Layer.Layer[r - 1].Name +`')" type = "checkbox"/>` + '</td>' + '</tr>';
      }
      table += '</tr>'; 
    }
    document.body.insertAdjacentHTML('beforeend','<table border = "2"> ' + table + '</table>')
  })
}
function showLayer(layerToShow) 
{
  layersToShow.push(layerToShow);
}
function AddLayers() 
{  
  console.log(layersToShow)
}