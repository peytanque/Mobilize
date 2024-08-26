import { useNavigate } from 'react-router-dom';
import { routes } from '@routes';

export const useHistory = () => {
  const navigate = useNavigate();

  const goNext = () => navigate(+1);
  const goPrevious = () => navigate(-1);
  const goHub = () => navigate(routes.hub);
  const goHome = () => navigate(routes.home);
  const goCharging = () => navigate(routes.charging);
  const goControl = () => navigate(routes.control);
  const goLocalize = () => navigate(routes.localize);
  const goShare = () => navigate(routes.share);

  return {
    goNext,
    goPrevious,
    goHome,
    goCharging,
    goControl,
    goLocalize,
    goShare,
    goHub
  };
};

export default useHistory;
