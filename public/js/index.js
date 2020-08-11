let access_token = "access_token";
Cesium.Ion.defaultAccessToken = access_token;

var viewer = new Cesium.Viewer("cesiumContainer", {
  shouldAnimate: true,
});

Sandcastle.addDefaultToolbarButton("Satellites", function () {
  viewer.dataSources.add(
    Cesium.CzmlDataSource.load("assests/Apps/SampleData/simple.czml")
  );

  viewer.camera.flyHome(0);
});

Sandcastle.addToolbarButton("Vehicle", function () {
  viewer.dataSources.add(
    Cesium.CzmlDataSource.load("assests/Apps/SampleData/Vehicle.czml")
  );

  viewer.scene.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(-116.52, 35.02, 95000),
    orientation: {
      heading: 6,
    },
  });
});

Sandcastle.reset = function () {
  viewer.dataSources.removeAll();
};
