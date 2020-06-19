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
            <l-marker
                    v-for="star in stars"
                    :key="star.name"
                    :lat-lng="star"
            >
            <l-popup :content="star.name" />
            </l-marker>
            <l-polyline :lat-lngs="travel" />
        </l-map>
    </div>
</template>

<script>
    import { CRS } from "leaflet";
    import { LMap, LImageOverlay, LMarker, LPopup, LPolyline } from "vue2-leaflet";

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
                maxZoom: 2,
                crs: CRS.Simple,
                stars: [
                    { name: "Sol", lng: 175.2, lat: 145.0 },
                    { name: "Mizar", lng: 41.6, lat: 130.1 },
                    { name: "Krueger-Z", lng: 13.4, lat: 56.5 },
                    { name: "Deneb", lng: 218.7, lat: 8.3 }
                ]
            };
        },
        mounted() {
            this.$refs.map.mapObject.setView([-50, 450], .10);
        }
    };
</script>