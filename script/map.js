ymaps.ready(function () {
  var map = new ymaps.Map('map', {
      center: [40.714606, -74.002800],
      zoom: 12
    }, {
      searchControlProvider: 'yandex#search'
    }),

    placemark = new ymaps.Placemark(map.getCenter(), {
      hintContent: 'Auhandy Tower',
      balloonContent: 'Auhandy Tower, New York, NY 10013, USA'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-point.svg',
      iconImageSize: [37, 50]
    });

  map.geoObjects
    .add(placemark);
});
