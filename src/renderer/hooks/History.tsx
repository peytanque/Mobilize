import { useNavigate } from 'react-router-dom';
import { routes } from '@routes';

export const useHistory = () => {
  const navigate = useNavigate();

  const goNext = () => navigate(+1);
  const goPrevious = () => navigate(-1);
  const goHub = () => navigate(routes.hub);
  const goHome = () => navigate(routes.home);
  const goCharging = () => navigate(routes.charging);
  const goChargingLast = () => navigate(routes.chargingLast);
  const goControl = () => navigate(routes.control);
  const goControlLast = () => navigate(routes.controlLast);
  const goLocalize = () => navigate(routes.localize);
  const goLocalizeLast = () => navigate(routes.localizeLast);
  const goShare = () => navigate(routes.share);
  const goShareLast = () => navigate(routes.shareLast);

  return {
    goNext,
    goPrevious,
    goHome,
    goCharging,
    goControl,
    goLocalize,
    goShare,
    goHub,
    goControlLast,
    goChargingLast,
    goLocalizeLast,
    goShareLast,
  };
};

export default useHistory;
