"use client";
import { useState, useRef } from "react";
import _debounce from "lodash/debounce";
import Clinic from "./Clinic";

var axios = require("axios");

interface FindPsychologistProps {}

export default function FindPsychologist(props: FindPsychologistProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [location, setLocation] = useState<string>("");

  const [suggestions, setSuggestions] = useState<
    { latitude: number; longitude: number; formatted: string }[]
  >([]);
  const [suggestionsKeyword, setSuggestionsKeyword] = useState<string[]>([]);

  const [clinics, setClinics] = useState<any[]>([]);

  const debouncedFetchSuggestionsRef = useRef<any>();

  const getClinic = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/geocode/getclinic", {
        lon: latitude,
        lat: longitude,
      });
      setClinics(response.data.result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching clinic data:", error);
    }
  };

  if (!debouncedFetchSuggestionsRef.current) {
    debouncedFetchSuggestionsRef.current = _debounce(async (query: string) => {
      try {
        const response = await axios.post("/api/geocode/autocomplete", {
          query,
        });
        const { result } = response.data;
        setSuggestions(
          result.map((item: any) => ({
            latitude: item.lat,
            longitude: item.lon,
            formatted: item.formatted,
          }))
        );
        setSuggestionsKeyword(result.map((item: any) => item.formatted));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    }, 100);
  }

  const handleLocationChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setSuggestionsKeyword([]);
    setLocation(value);

    try {
      debouncedFetchSuggestionsRef.current(value);
    } catch (error) {
      console.error("Error handling location change:", error);
    }
  };

  const handleAutoDetectLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      const response = await axios.post("/api/geocode/getaddress", {
        lat: latitude,
        lon: longitude,
      });

      setLocation(response.data.result);
      getClinic();
    });
  };

  const handleSugestionClicked = (index: number) => {
    setLocation(suggestions[index].formatted);
    setLatitude(suggestions[index].latitude);
    setLongitude(suggestions[index].longitude);

    setSuggestions([]);
    setSuggestionsKeyword([]);

    getClinic();
  };

  return (
    <section id="hero" className="py-20 text-center">
      <div className="container mx-auto mt-10 md:px-12">
        <h1 className="text-2xl leading-none text-cyan-500 font-extrabold lg:text-4xl lg:leading-tight mb-2">
          Sapa Psikolog dan Konsultan Kamu
        </h1>
        <p className="max-w-xl mx-auto text-gray-500 lg:max-w-4xl">
          Setiap orang membutuhkan ruang untuk menceritakan masalahnya. Temukan
          psikolog ideal kamu.
        </p>
        <form className="mt-8">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Masukkan Lokasi Kamu"
              value={location}
              onChange={handleLocationChange}
              className="border border-gray-300 rounded-l-md px-4 py-2 min-w-max lg:w-1/4 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="button"
              onClick={handleAutoDetectLocation}
              className="bg-cyan-500 text-white text-sm text-semibold px-4 py-2 rounded-r-md focus:outline-none hover:bg-cyan-600"
            >
              Deteksi Otomatis
            </button>
          </div>
        </form>
        {suggestionsKeyword.length > 0 && (
          <div className="p-4 mx-auto max-w-md mt-4 border rounded-lg">
            <ul>
              {suggestionsKeyword.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-gray-800 text-left cursor-pointer"
                  onClick={() => handleSugestionClicked(index)}
                >
                  {suggestion}
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        )}

        {isLoading && (
          <div className="flex justify-center mt-12">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin fill-cyan-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        <div>
          {clinics.map((clinic) => (
            <>
              <div className="container mx-auto mt-10 lg:max-w-2xl">
                <Clinic
                  name={clinic.properties.name}
                  address={clinic.properties.formatted}
                  distance={clinic.properties.distance}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
