import React, { useContext } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { LayoutContext } from 'components/Layout';

export const Categories = () => {
  const { data, handleChange } = useContext(LayoutContext);
  return (
    <>
      <span className='form__subtitle text'>Тип объекта</span>
      <ToggleButtonGroup
        color='primary'
        exclusive
        onChange={(event) => handleChange(event)}
        value={data?.Category || null}
        fullWidth
        sx={{
          whiteSpace: 'nowrap'
        }}
      >
        <ToggleButton
          size='small'
          name='Category'
          value='flatRent'
        >
          Квартира
        </ToggleButton>
        <ToggleButton
          size='small'
          name='Category'
          value='roomRent'
        >
          Комната
        </ToggleButton>
        <ToggleButton
          size='small'
          name='Category'
          value='bedRent'
        >
          Койка место
        </ToggleButton>
        <ToggleButton
          size='small'
          name='Category'
          value='houseRent'
        >
          Дом
        </ToggleButton>
        <ToggleButton
          size='small'
          name='Category'
          value='cottageRent'
        >
          Коттедж
        </ToggleButton>
        <ToggleButton
          size='small'
          name='Category'
          value='townhouseRent'
        >
          Таунхаус
        </ToggleButton>
        <ToggleButton
          size='small'
          name='Category'
          value='houseShareRent'
        >
          Часть дома
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}