import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fbTrack } from '@/lib/fbpixel';

export const PixelRouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    fbTrack('PageView');
    const path = location.pathname;
    if (path === '/categories' || path === '/ax') fbTrack('ViewCategory');
    if (path === '/cart') fbTrack('ViewCart' as string);
    if (path === '/search') fbTrack('Search');
  }, [location.pathname]);
  return null;
};
