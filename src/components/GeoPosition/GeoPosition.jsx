import React, { useState, useEffect } from 'react';
import usePosition from '../../hooks/usePosition/usePosition';
import { geoPositionDb, isoRegionCodeDb } from '../../data/GeoPositionDb';
import { useDispatch } from 'react-redux';
import { regionCode } from '../../reducer/regionSlice';

const GeoPosition = ({call}) => {
  const dispatch = useDispatch();
  const storegeRegion = localStorage.getItem('region');
  const geoIsoRegion = usePosition();
  const [regionModalActive, setRegionModalActive] = useState(false);
  const [region, setRegion] = useState(
    storegeRegion ? isoRegionCodeDb[storegeRegion] : 'Саратовская область'
  );

  useEffect(() => {
    if (!storegeRegion && geoIsoRegion) {
      geoPositionDb.forEach((value) => {
        value.regions.forEach((value) => {
          if (value.regionCode === geoIsoRegion) {
            dispatch(regionCode(value.regionCode));
            setRegion(value.region);
            return;
          }
        });
      });
      return;
    }

    if(!storegeRegion) {
      localStorage.setItem('region', 'RU-SAR');
    }
    
    dispatch(regionCode(storegeRegion));
  }, [geoIsoRegion, storegeRegion, dispatch]);

  const selectionRegion = (e) => {
    setRegion(e.target.textContent);
    setRegionModalActive(false);
    localStorage.setItem('region', e.target.dataset.iso);

    call && call()
  };

  return (
    <section className="geo-position">
      <div className="geo-position__region">
        <span className="geo-position__region-title">{region}</span>
        <button
          className="geo-position__region-btn"
          onClick={() => setRegionModalActive(regionModalActive ? false : true)}
        >
          Изменить регион
        </button>
      </div>
      {regionModalActive && (
        <div className="geo-position__box">
          <ul className="geo-position__list">
            {geoPositionDb.map((value, id) => {
              return (
                <li className="geo-position__item" key={id}>
                  <span className="geo-position__path">{value.path}</span>
                  {value.regions.map((valueRegion, id) => {
                    return (
                      <button
                        className="geo-position__region"
                        onClick={selectionRegion}
                        key={id}
                        data-iso={valueRegion.regionCode}
                      >
                        {valueRegion.region}
                      </button>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};

export default GeoPosition;
