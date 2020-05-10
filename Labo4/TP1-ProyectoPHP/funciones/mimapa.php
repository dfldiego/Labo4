<div id="map" class="map"></div>
<script>
    var map = L.map("map").setView([ <?php ?>, 0], 13);

    L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=AAJqNYsqWkfuHGwzTT1W", {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);

    L.marker([51.5, -0.09])
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
</script>