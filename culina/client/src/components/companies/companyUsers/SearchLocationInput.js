import React, { useState, useEffect, useRef } from "react";
import placeService from "hooks/PlaceService";
const SearchLocationInput = () => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const [loadScript, handleScriptLoad] = placeService();

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
};

export default SearchLocationInput;
