import React, { useContext } from 'react';

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import { LayoutContext } from 'components/Layout';


import './Dadata.scss';

export const Dadata = () => {
  const { data, setAddress } = useContext(LayoutContext);

  const handleSelect = (address) => {
    setAddress(address);
  }

  return (
    <>
      <div className="field">
        <div className='field__name text'>Адрес (из списка)</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <AddressSuggestions
            token="408e6651c0b9bfc8e2f487383d45353973f3285c"
            value={data.address || ''}
            onChange={(e) => { handleSelect(e) }}
            filterFromBound={'region'}
            filterToBound={'house'}
            inputProps={
              {
                // placeholder: 'Введите адрес',
                className: 'dadata__input',
              }
            }
            containerClassName='dadata__container'
          />
        </div>
      </div>
    </>
  )
}