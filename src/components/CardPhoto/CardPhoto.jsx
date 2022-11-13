import React, { useContext } from "react";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { LayoutContext } from 'components/Layout';

import './CardPhoto.scss';

export const CardPhoto = ({ photo, toggleSelect }) => {
  const { movePhoto } = useContext(LayoutContext);
  const handleClick = () => {
    toggleSelect(photo);
    movePhoto(photo);
  }
  return (
    <div className="photo">
      {
        photo.select &&
        <span className="photo__icon">
          <CheckCircleOutlineIcon />
        </span>
      }
      <img className="photo__img" src={photo.URL} alt="photo" />
      <Button
        size="small"
        variant="outlined"
        onClick={handleClick}
      >
        {
          photo.select ?
          'удалить' :
          'выбрать'
        }
      </Button>
    </div>
  )
}