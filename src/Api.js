import axios from 'axios';

export const requestData = async () => {
  return await axios.post(
    'https://hs-01.centralnoe.ru/Project-Selket-Main/errorTest.php'
  );
};

export const getPhotoList = async () => {
  const res = await axios.post(
    'https://hs-01.centralnoe.ru/Project-Selket-Main/errorTest.php'
  );
  return [
    {
      "UID": 646546,
      "ownerId": 654651651,
      "URL": "https://benedom.ru/upload/iblock/4c9/jhapctmareiusgrvzzv2z5w8xjqp4c6g.jpg"
    },
    {
      "UID": 6465462,
      "ownerId": 654651651,
      "URL": "https://benedom.ru/upload/iblock/4c9/jhapctmareiusgrvzzv2z5w8xjqp4c6g.jpg"
    },
  ]
};
