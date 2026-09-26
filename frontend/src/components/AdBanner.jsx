import { useEffect, useRef } from 'react';

let adsenseLoaded = false;
let adsenseLoadPromise;

function loadAdSense(clientId) {
  if (!clientId || typeof window === 'undefined') return Promise.resolve(false);
  if (window.adsbygoogle) {
    adsenseLoaded = true;
    return Promise.resolve(true);
  }
  if (adsenseLoadPromise) return adsenseLoadPromise;
  adsenseLoadPromise = new Promise((resolve) => {
    const existing = document.querySelector('script[data-adsense="true"]');
    if (existing) {
      existing.addEventListener('load', () => resolve(true), { once: true });
      existing.addEventListener('error', () => resolve(false), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(clientId)}`;
    script.crossOrigin = 'anonymous';
    script.dataset.adsense = 'true';
    script.onload = () => { adsenseLoaded = true; resolve(true); };
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
  return adsenseLoadPromise;
}

export default function AdBanner({ slot, className = '', label = true }) {
  const ref = useRef(null);
  const clientId = import.meta.env.VITE_ADSENSE_CLIENT_ID;
  const enabled = import.meta.env.VITE_ADS_ENABLED === 'true' && Boolean(clientId && slot);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    let cancelled = false;
    loadAdSense(clientId).then((loaded) => {
      if (!loaded || cancelled || !ref.current || ref.current.dataset.pushed === 'true') return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        ref.current.dataset.pushed = 'true';
      } catch (error) {
        console.warn('AdSense push failed:', error);
      }
    });
    return () => { cancelled = true; };
  }, [clientId, enabled, slot]);

  if (!enabled) return null;

  return (
    <div className={`adSlot ${className}`} aria-label="Advertisement">
      {label && <span className="adLabel">ADVERTISEMENT</span>}
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: 90 }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
