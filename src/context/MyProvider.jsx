import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestApi from '../data';
import Context from './Context';

export default function MyProvider({ children }) {
  const [planetsState, setPlanetState] = useState({
    name: [],
    data: [],
    planets: [],
    loading: true,
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    async function resultApi() {
      const response = await requestApi();
      setPlanetState((prevState) => ({
        ...prevState,
        name: Object.keys(response.results[0]),
        data: response.results,
        loading: false,
      }));
    }
    resultApi();
  }, []);

  return (
    <main>
      <Context.Provider value={ { planetsState, setPlanetState, filters, setFilters } }>
        {children}
      </Context.Provider>
    </main>
  );
}

MyProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
