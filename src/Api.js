import axios from 'axios';

export const requestData = async () => {
  return await axios.post(
    'https://hs-01.centralnoe.ru/Project-Selket-Main/errorTest.php'
  );
};
