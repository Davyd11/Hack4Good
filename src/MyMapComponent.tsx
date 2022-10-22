import React, { useEffect, useState } from "react";

const MyMapComponent = () => {
    const map = new google.maps.Map(()=> {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
    return <div id="map" style={{ width: "100%", height: "100%" }} />;
};
