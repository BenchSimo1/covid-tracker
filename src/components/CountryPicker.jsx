import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFechedCountries] = useState([]);

  useEffect(() => {
    (async function fetchApi() {
      setFechedCountries(await fetchCountries());
    })();
  }, [fetchedCountries]);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
