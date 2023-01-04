// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
// Select the file input element
var data = {};
var fileInput = d3.select('#file-input');

// Use D3.js to read the contents of the file
fileInput.on('change', function() {
  var file = fileInput.property('files')[0];
  var reader = new FileReader();
  reader.onload = function() {
    var contents = reader.result;

    // Parse the file contents as CSV data
    var data = d3.json(contents);

    console.log(data);
  };
  reader.readAsText(file);
  //createTree(reader.result);
});
})

function createTree(data)
{

}