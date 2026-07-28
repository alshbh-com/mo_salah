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
    if (path === '/track-order') fbTrack('FindLocation' as string);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('tel:') || href.includes('wa.me')) {
        fbTrack('Contact', { method: href.startsWith('tel:') ? 'phone' : 'whatsapp' });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
};
