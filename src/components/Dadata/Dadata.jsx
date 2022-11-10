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
    <div style={{position: 'relative', marginLeft: '1rem'}}>
      <span className='field__error-icon'></span>
      <AddressSuggestions
        token="408e6651c0b9bfc8e2f487383d45353973f3285c"
        value={data.address || ''}
        onChange={(e) => { handleSelect(e) }}
        filterFromBound={'region'}
        filterToBound={'house'}
        inputProps={
          {
            placeholder: 'Введите адрес',
            className: 'dadata__input',
          }
        }
      />
    </div>
  )
}