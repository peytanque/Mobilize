import { routes } from '@routes';

import { useNavigate } from 'react-router-dom';

export const useHistory = () => {
  const navigate = useNavigate();

  const goPrevious = () => navigate(-1);

  const goHub = () => navigate(routes.hub);
  const goHome = () => navigate(routes.home);

  const goCharging = () => navigate(routes.charging);
  const goChargingVideo = () => navigate(routes.chargingVideo);
  const goChargingLast = () => navigate(routes.chargingLast);

  const goControl = () => navigate(routes.control);
  const goControlVideo = () => navigate(routes.controlVideo);
  const goControlLast = () => navigate(routes.controlLast);

  const goLocalize = () => navigate(routes.localize);
  const goLocalizeVideo = () => navigate(routes.localizeVideo);
  const goLocalizeLast = () => navigate(routes.localizeLast);

  const goShare = () => navigate(routes.share);
  const goShareVideo = () => navigate(routes.shareVideo);
  const goShareLast = () => navigate(routes.shareLast);

  return {
    goHome,

    goHub,
    goPrevious,

    goCharging,
    goChargingVideo,
    goChargingLast,

    goControl,
    goControlVideo,
    goControlLast,

    goLocalize,
    goLocalizeVideo,
    goLocalizeLast,

    goShare,
    goShareVideo,
    goShareLast,
  };
};

export default useHistory;
