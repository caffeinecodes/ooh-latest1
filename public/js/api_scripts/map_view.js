var current_markers = []
L.mapbox.accessToken = 'pk.eyJ1IjoiYWZ6YWwiLCJhIjoiY2oyMGx2dzE0MDA1cTJ3cW1kOGVwcG1wdSJ9.dCq8m2ZL0ZOLH1qynjnUwg';
var map = L.mapbox.map('map', 'mapbox.streets').setView([-24.994167,134.866944], 5);
// L.marker([37.775408, -122.413682]).addTo(map).bindPopup('<strong>Science Hall</strong><br>Where the GISC was born.')
$(function(){ 
 var  maptype ="Static";
 var kumulos_init= Kumulos.initWithAPIKeyAndSecretKey('05a0cda2-401b-4a58-9336-69cc54452eba', 'EKGTFyZG5/RQe7QuRridgjc0K8TIaKX3wLxC');
 kumulos_init.call('mapviewfilter',{jwt_token:localStorage['ooh-jwt-token'],type:maptype},function(res){
  for(i=0;i<res.length;i++){
    console.log(res)
    var marker = L.marker([res[i].latitude, res[i].longitude]).addTo(map).bindPopup(res[i].location).on('mouseover', function (e) {
      this.openPopup();
    }).on('mouseout', function (e) {
      this.closePopup();
    })
    current_markers.push(marker)
  }
})
})



$(document).on("click","#show-static",function(){
  var  maptype ="Static";
  for(i=0;i<current_markers.length;i++){
    map.removeLayer(current_markers[i]);
  }
  current_markers = []
  var kumulos_init= Kumulos.initWithAPIKeyAndSecretKey('05a0cda2-401b-4a58-9336-69cc54452eba', 'EKGTFyZG5/RQe7QuRridgjc0K8TIaKX3wLxC');
  kumulos_init.call('mapviewfilter',{jwt_token:localStorage['ooh-jwt-token'],type:maptype},function(res){
    for(i=0;i<res.length;i++){
      console.log(res)
       var marker = L.marker([res[i].latitude, res[i].longitude]).addTo(map).bindPopup(res[i].location).on('mouseover', function (e) {
      this.openPopup();
      }).on('mouseout', function (e) {
        this.closePopup();
      })
      current_markers.push(marker)
    }
  })
})

$(document).on("click","#show-digital",function(){
  var  maptype ="Digital";
  for(i=0;i<current_markers.length;i++){
    map.removeLayer(current_markers[i]);
  }
  current_markers = []
  var kumulos_init= Kumulos.initWithAPIKeyAndSecretKey('05a0cda2-401b-4a58-9336-69cc54452eba', 'EKGTFyZG5/RQe7QuRridgjc0K8TIaKX3wLxC');
  kumulos_init.call('mapviewfilter',{jwt_token:localStorage['ooh-jwt-token'],type:maptype},function(res){
    for(i=0;i<res.length;i++){
      var marker = L.marker([res[i].latitude, res[i].longitude]).addTo(map).bindPopup(res[i].location).on('mouseover', function (e) {
      this.openPopup();
      }).on('mouseout', function (e) {
        this.closePopup();
      })
      current_markers.push(marker)
    }
  });
});

$(document).on("click","input[name='map-type']",function(){
  var selected_value = $(this).val();
  // map.setStyle('mapbox://styles/mapbox/' + selected_value + '-v9');
  L.mapbox.styleLayer('mapbox://styles/mapbox/'+selected_value+'-v9').addTo(map);
})

