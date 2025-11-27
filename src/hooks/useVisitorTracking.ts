import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Supabase configuration
const SUPABASE_URL = 'https://mdijhbavkwxeudzgcyjb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kaWpoYmF2a3d4ZXVkemdjeWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMzUyMzIsImV4cCI6MjA3NzgxMTIzMn0.bGQW76NcZ97pfe7UsD3d5bJ1kaIRq2odstgHMg4jzew';

export const useVisitorTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track visitor on route change
    const trackVisitor = async () => {
      try {
        // Collect client-side signals
        const clientSignals = {
          screen: {
            w: window.screen.width,
            h: window.screen.height
          },
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };

        // Prepare tracking data
        const trackingData = {
          path: location.pathname,
          method: 'GET',
          clientSignals
        };

        // Call edge function
        const response = await fetch(`${SUPABASE_URL}/functions/v1/track-visitor`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'apikey': SUPABASE_ANON_KEY
          },
          body: JSON.stringify(trackingData)
        });

        if (!response.ok) {
          console.error('Visitor tracking failed');
        }
      } catch (error) {
        // Silently fail - don't disrupt user experience
        console.error('Tracking error:', error);
      }
    };

    // Track with small delay to ensure page is loaded
    const timeoutId = setTimeout(trackVisitor, 500);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);
};
