function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "23c669a9513b7889",
    center: { lat: 34.66817361825899, lng:135.4303239623796 },
    zoom: 17.5,
    mapTypeControl: false,
    fullScreenControl: false,
    streetViewControl: false
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
      34.66799268510261, 135.43200027718754,
      "imgs/ghosthouse.svg",
      48,
      41
    ],
    [
      "Hill with eyes",
      34.66894754697516, 135.42880758385084,
      "imgs/hillwitheyes.svg",
      45,
      41
    ],
    [
      "Hill with eyes",
      34.66886669195229, 135.42871395674152,
      "imgs/hillwitheyes.svg",
      45,
      41
    ],
    [
      "Hill with eyes",
      34.668843591380615, 135.42887780529222,
      "imgs/hillwitheyes.svg",
      45,
      41
    ],
    [
      "Warp Pipe",
      34.66911695360956, 135.43129184087886,
      "imgs/pip.svg",
      45,
      38
    ],
    [
      "Castle",
      34.66772187727941, 135.42836442206814,
      "imgs/castle.svg",
      48,
      41
    ],
    [
      "You are Here!",
      34.668586443589014, 135.4275772397497,
      "imgs/pointer.svg",
      48,
      45
    ],
    [
      "Star World",
      34.66719020660207, 135.43096152780785,
      "imgs/star.svg",
      38,
      38
    ]
  ]

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map: map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
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