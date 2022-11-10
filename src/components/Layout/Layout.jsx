import React, { createContext, useState, useEffect } from 'react';

import { Linear } from 'components/Linear';

export const LayoutContext = createContext();

import { requestData } from '../../Api';

export const Layout = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    requestData()
      .then((res) => {
        if (res.status === 200) {
          // setData(res.data);
          setData({
            HasFurniture: true,
            HasInternet: true,
            Category: '',
          });
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getValue = (event) => {
    const name = event.target.name;
    if (name === 'PetsAllowed' || name === 'ChildrenAllowed') {
      return event.target.value === 'да' ? true : false;
    }
    if (name === 'HasRamp') {
      return event.target.value === 'есть' ? true : false;
    }
    if (event.target.type === 'checkbox') {
      return event.target.checked;
    }
    return event.target.value;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = getValue(event);
    const key = event.target?.dataset?.key;

    setData((prevState) => ({
      ...prevState,
      [key || name]: key ? { ...prevState[key], [name]: value } : value,
    }));
  };

  const setAddress = (address) => {
    setData((prevState) => ({
      ...prevState,
      address: address
    }))
  }

  const setCords = (name, value) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const whatsRender = () => {
    if (loading) {
      return <Linear />;
    }
    if (error) {
      return <span className='text'>error</span>;
    }
    return props.children;
  };

  const value = {
    data: data,
    handleChange: handleChange,
    setAddress: setAddress,
    setCords: setCords,
  };

  return (
    <>
      <LayoutContext.Provider value={value}>
        {whatsRender()}
      </LayoutContext.Provider>
    </>
  );
};
