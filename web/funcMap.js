var map;
var buttom = document.querySelector("#satellite");
buttom.addEventListener("click", function () {
  map.setMapTypeId("satellite");
});
function initMap() {
  //passa os parametros do mapa
  var mapOptions = {
    center: { lat: 0, lng: 0 },
    zoom: 8,
    //essa opção configura o tipo de mapa a ser carregador automaticamente
    mapTypeId: "satellite", //roadmap, satellite, hybrid, terrain
  };
  //cria o mapa
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
