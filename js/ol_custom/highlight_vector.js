
var highlightStyle = new ol.style.Style({
stroke: new ol.style.Stroke({
  color: '#ff794d',
  width: 1
}),
fill: new ol.style.Fill({
  color: 'rgba(255,0,0,0.1)'
}),
text: new ol.style.Text({
  font: '12px Calibri,sans-serif',
  fill: new ol.style.Fill({
    color: '#000'
  }),
  stroke: new ol.style.Stroke({
    color: '#ff794d',
    width: 3
  })
})
});

var featureOverlay = new ol.layer.Vector({
source: new ol.source.Vector(),
map: map,
style: function(feature) {
  highlightStyle.getText().setText(feature.get('ADM0'));
  return highlightStyle;
}
});

var highlight;
var displayFeatureInfo = function(pixel) {

var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
  return feature;
});

if (feature !== highlight) {
  if (highlight) {
    featureOverlay.getSource().removeFeature(highlight);
  }
  if (feature) {
    featureOverlay.getSource().addFeature(feature);
  }
  highlight = feature;
}

};

map.on('pointermove', function(evt) {
if (evt.dragging) {
  return;
}
var pixel = map.getEventPixel(evt.originalEvent);
displayFeatureInfo(pixel);
});
