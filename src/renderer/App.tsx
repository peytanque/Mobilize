import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import {
  Charging,
  Home,
  Hub,
  ChargingVideo,
  ChargingLast,
  Control,
  ControlVideo,
  ControlLast,
  Localize,
  LocalizeVideo,
  LocalizeLast,
  Share,
  ShareVideo,
  ShareLast,
} from '@pages';
import { routes } from '@routes';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.hub,
    element: <Hub />,
  },
  {
    path: routes.charging,
    element: <Charging />,
  },
  {
    path: routes.chargingVideo,
    element: <ChargingVideo />,
  },
  {
    path: routes.chargingLast,
    element: <ChargingLast />,
  },
  {
    path: routes.control,
    element: <Control />,
  },
  {
    path: routes.controlVideo,
    element: <ControlVideo />,
  },
  {
    path: routes.controlLast,
    element: <ControlLast />,
  },
  {
    path: routes.localize,
    element: <Localize />,
  },
  {
    path: routes.localizeVideo,
    element: <LocalizeVideo />,
  },
  {
    path: routes.localizeLast,
    element: <LocalizeLast />,
  },{
    path: routes.share,
    element: <Share />,
  },
  {
    path: routes.shareVideo,
    element: <ShareVideo />,
  },
  {
    path: routes.shareLast,
    element: <ShareLast />,
  },

]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
