import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import { LayoutContext } from 'components/Layout';
import { Linear } from 'components/Linear';
import { CardPhoto } from 'components/CardPhoto';

import { getPhotoList } from '../../Api';

export const Photo = () => {
  const navigate = useNavigate();
  const { data } = useContext(LayoutContext);
  const [photoLoading, setPhotoLoading] = useState();
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    if (data?.address || data?.newAdress) {
      getPhoto();
      return
    }
    // navigate('/error');
    navigate('/dev/rent/error');
  }, [])

  const getPhoto = async () => {
    setPhotoLoading(true);
    getPhotoList().then((photo) => {
      setPhotoList(photo);
    }).catch(() => {
      console.log(error);
    }).finally(() => {
      setPhotoLoading(false);
    })
  }
  const toggleSelect = (photo) => {
    setPhotoList(prevState => 
      prevState.map(item => item.UID === photo.UID ? {...item, select: !item.select} : item)
    )
  }
  const handleClick = () => {
    setPhotoLoading(true);
    setTimeout(() => {
      // navigate('/access');
      navigate('/dev/rent/access');
    }, 1500)
  }
  return (
    <>
      {
        photoLoading ?
          <Linear /> :
          <>
            {
              photoList.length > 0 ?
                <div className='photos'>
                  {
                    photoList.map((item) =>
                      <CardPhoto
                        key={item.UID}
                        photo={item}
                        toggleSelect={toggleSelect}
                      />
                    )
                  }
                </div> :
                <span className="text">Нет совпадений по фото</span>
            }
            <div className='buttons__wrap'>
              <Button
                variant="contained"
                onClick={handleClick}
              >
                Сохранить
              </Button>
            </div>
          </>
      }
    </>
  )
}