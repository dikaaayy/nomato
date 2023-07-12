import React, { useEffect, useState } from "react";

export default function useArea() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [area, setArea] = useState<string>("");

  useEffect(() => {
    const fetchLocation = async (): Promise<void> => {
      try {
        const position = await getCurrentPosition();
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      } catch (e) {
        setLatitude(0);
        setLongitude(0);
      }
    };

    const getCurrentPosition = (): Promise<GeolocationPosition> => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchCity = async (): Promise<void> => {
      try {
        if (latitude === 0 && longitude === 0) {
          setArea("Allow your location access!");
        }
        if (latitude && longitude) {
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_MAPS_API}`);
          const data = await response.json();
          console.log(data.results);

          if (data.results.length > 0) {
            const addressComponents: any[] = data.results[0].address_components;

            for (let i = 0; i < addressComponents.length; i++) {
              const types: string[] = addressComponents[i].types;

              if (types.includes("administrative_area_level_4" || "administrative_area_level_3" || "administrative_area_level_2")) {
                setArea(addressComponents[i].long_name);
                break;
              }
            }
          }
        }
      } catch (e) {}
    };

    fetchCity();
  }, [latitude, longitude]);

  return area;
}
