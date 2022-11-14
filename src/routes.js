import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { FormTemplate } from 'components/FormTemplate';
import { Photo } from 'components/Photo';

export const routes = createBrowserRouter([
  {
    path: '/dev/rent/',
    element: <FormTemplate />
  },
  {
    path: '/dev/rent/photo',
    element: <Photo />
  },
  {
    path: '/dev/rent/access',
    element: <span className="text">Объект успешно создан</span>
  },
  {
    path: '/dev/rent/error',
    element: <span className="text">Что то пошло не так</span>
  },
  {
    path: '*',
    element: <span className="text">Страница не найдена</span>
  },
])