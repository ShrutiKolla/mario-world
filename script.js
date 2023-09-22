function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "23c669a9513b7889",
    center: { lat: 34.668179123702295, lng: 135.4303226060295 },
    zoom: 17,
    mapTypeControl : false,
    fullScreenControl : false,
    streetViewControl : false
  });


  const markers = [
    [
        "Yoshi\'s House",
        34.668179123702295,
        135.4303226060295,
        "imgs/fort.svg",
        38,
        31
    ],
    [
        "Ghost House",
        34.66997469177801, 
        135.42950758966256,
        "imgs/ghosthouse.svg",
        38,
        31
    ],
    [
        "Hill with eyes",
        34.666683265733916, 
        135.43393856751624,
        "imgs/hillwitheyes.svg",
        38,
        31
    ]
  ]

  for(let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
        position: { lat: currMarker[1], lng: currMarker[2] },
        map : map,
        title: currMarker[0],
        icon : {
            url: currMarker[3],
            scaledSize : new google.maps.Size(currMarker[4] ,currMarker[5])
        },
        animation: google.maps.Animation.DROP
      });
    
      const infowindow = new google.maps.InfoWindow({
        content: currMarker[0],
      });
    
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      });
  }

}
window.initMap = initMap;