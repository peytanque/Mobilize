import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.hub} element={<Hub />} />

        <Route path={routes.charging} element={<Charging />} />
        <Route path={routes.chargingVideo} element={<ChargingVideo />} />
        <Route path={routes.chargingLast} element={<ChargingLast />} />

        <Route path={routes.control} element={<Control />} />
        <Route path={routes.controlVideo} element={<ControlVideo />} />
        <Route path={routes.controlLast} element={<ControlLast />} />

        <Route path={routes.localize} element={<Localize />} />
        <Route path={routes.localizeVideo} element={<LocalizeVideo />} />
        <Route path={routes.localizeLast} element={<LocalizeLast />} />


        <Route path={routes.share} element={<Share />} />
        <Route path={routes.shareVideo} element={<ShareVideo />} />
        <Route path={routes.shareLast} element={<ShareLast />} />
      </Routes>
    </Router>
  );
}
