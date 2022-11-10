import React, { useState, useEffect, useRef, useContext } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { LayoutContext } from 'components/Layout';

import TextField from "@mui/material/TextField";

import './Cords.scss';

export const Cords = ({ register, errors, setValue }) => {
  const { data, setCords } = useContext(LayoutContext);
  const [point, setPoint] = useState([]);
  const [center, setCenter] = useState([]);
  const zoom = 12;
  const objectRef = useRef(null);

  const handleClick = (event) => {
    const cords = event.get('coords');
    setPoint(cords);
    setCords('lat', cords[0]);
    setCords('lng', cords[1]);
    setValue('lat', cords[0]);
    setValue('lng', cords[1]);
  }
  useEffect(() => {
    if (JSON.stringify(objectRef.current) === JSON.stringify(data?.address || null)) {
      return
    }
    objectRef.current = data.address;
    setCordsInputs();
  }, [data.address])

  const setCordsInputs = () => {
    setCenter([data.address.data.geo_lat, data.address.data.geo_lon]);
    setPoint([data.address.data.geo_lat, data.address.data.geo_lon]);
    setCords('lat', data.address.data.geo_lat);
    setCords('lng', data.address.data.geo_lon);
    setValue('lat', data.address.data.geo_lat);
    setValue('lng', data.address.data.geo_lon);
  }

  return (
    <>
      <div className='field'>
        <div className='field__name text'>Координаты X</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            name='lat'
            value={data?.lat || ''}
            {...register('lat', {
              required: 'Укажите координаты',
            })}
            error={errors?.lat ? true : false}
            inputProps={
              { readOnly: true, }
            }
          />
          <span className='field__error-text text'>
            {errors?.lat?.message || ''}
          </span>
        </div>
      </div>
      <div className="field">
        <div className='field__name text'>Координаты Y</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            name='lng'
            value={data?.lng || ''}
            {...register('lng', {
              required: 'Укажите координаты',
            })}
            error={errors?.lng ? true : false}
            inputProps={
              { readOnly: true, }
            }
          />
          <span className='field__error-text text'>
            {errors?.lng?.message || ''}
          </span>
        </div>
      </div>
      <p className='attention'>В соответствии с требованиями ЦИАН, необходимо указать координаты с точность до дома. Внимание! В случае ввода не верных координат объект не выгрузится в рекламу</p>
      <div style={{ height: 400 }}>
        <YMaps>
          <Map
            state={{ center: center.length > 0 ? center : [55.030204, 82.920430], zoom }}
            width={'100%'}
            height={400}
            onCLick={event => handleClick(event)}
          >
            {
              point.length > 0 &&
              <Placemark
                geometry={point}
                options={{ iconColor: `#0c54a0` }}
              />
            }
          </Map>
        </YMaps>
      </div>
    </>
  )
} 