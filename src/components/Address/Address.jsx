import React, { useState, useContext } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { Dadata } from 'components/Dadata';
import { AdressHandEnter } from 'components/AdressHandEnter';
import { LayoutContext } from 'components/Layout';

export const Address = ({ register, errors }) => {
  const { data } = useContext(LayoutContext);
  const [absentAddress, setAbsentAddress] = useState(false);
  const handleClick = () => {
    setAbsentAddress(!absentAddress)
  }
  return (
    <>
      <span className='form__subtitle text'>Адрес и местоположение</span>
      <Button
        variant="text"
        onClick={handleClick}
      >
        адреса нет в списке
      </Button>
      {
        absentAddress ?
          <AdressHandEnter
            register={register}
            errors={errors}
          /> :
          <Dadata />
      }
    </>
  )
}