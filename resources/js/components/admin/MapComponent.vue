<template>
    <div>
        <l-map
                ref="map"
                id="map"
                :min-zoom="minZoom"
                :max-zoom="maxZoom"
                :max-bounds="maxBounds"
                :max-bounds-viscosity="maxBoundsViscosity"
                :crs="crs"
        >
            <l-image-overlay
                    :url="url"
                    :bounds="bounds"
            />
            <!--<l-marker
                    v-for="city in mapData.cities"
                    :key="city.name"
                    :lat-lng="city"
                    :icon="newIcon('city')"
            >
            <l-popup :content="city.name" />
            </l-marker>-->
        </l-map>
    </div>
</template>

<script>
    import { CRS } from "leaflet";
    import { LMap, LImageOverlay, LMarker, LPopup, LPolyline } from "vue2-leaflet";
    import iconData from "../../json/icons.json";

    export default {
        components: {
            LMap,
            LImageOverlay,
            LMarker,
            LPopup,
            LPolyline
        },
        data() {
            var bounds = [[-500, -1400], [500, 1400]];
            return {
                url: "/images/kingmaker-map.png",
                bounds: bounds,
                maxBounds: bounds,
                maxBoundsViscosity: 1.0,
                minZoom: -2,
                maxZoom: 1,
                crs: CRS.Simple,
                map: null,
                mapData: [],
                icons: []
            };
        },
        created: function () {
            // import demo data
            var _this = this;
            $.getJSON("/resources/demoMap.json", function (json) {
                _this.mapData = json;
            }).done(this.addLayers);
        },
        mounted() {
            this.setupVars();

            // set initial map view
            this.map.setView([-50, 450], .10);
        },
        methods: {
            setupVars: function () {
                // set up reference to component
                var _this = this;

                // set map object and store in data
                this.map = this.$refs.map.mapObject;

                // create icon types
                Object.keys(iconData).forEach(iconKey => {
                    _this.icons[iconKey] = L.Icon.extend(iconData[iconKey]);
                })
            },
            addLayers: function () {
                // create layer groups for markers
                var cityMarkers = [];
                for (var key in this.mapData.cities) {
                    var marker = L.marker([this.mapData.cities[key].lat, this.mapData.cities[key].lng], {icon: new this.icons.city})
                        .bindPopup(this.mapData.cities[key].title);
                    cityMarkers.push(marker);
                }
                var cityGroup = L.layerGroup(cityMarkers);

                var overlayLayers = {
                    'Hex Identifiers':L.imageOverlay("/images/kingmaker-map-numbered.png", this.bounds),
                    'Cities':cityGroup
                };
                L.control.layers(null, overlayLayers).addTo(this.map);
            },
            newIcon: function (type) {
                // construct new icon of type
                return new this.icons[type];
            }
        }
    };
</script>