import axios from 'axios';
import { useState, useEffect } from 'react';

const usePosition = () => {
  const url =
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=';
  const token = '006c3851f0cff15b16069dae7917b720c6e35b85';
  const [regionCode, setRegionCode] = useState(' ');

  useEffect(() => {
    (async () => {
      try {
        const ip = await axios.get('/php/ip.php');

        if(!ip || (ip.statusText !== "OK")) return

        const res = await axios.get(url + ip.data, {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Token ' + token,
          },
        });

        const regionCode = res ? "RU-SAR" : res.data.location.data.region_iso_code;
        setRegionCode(regionCode);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return regionCode;
};

export default usePosition;
