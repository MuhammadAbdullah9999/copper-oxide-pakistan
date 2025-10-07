'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Show banner after 2 seconds
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-amber-700 shadow-lg z-50 p-4 md:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              We use cookies to improve your experience and analyze site traffic. 
              By clicking "Accept", you consent to our use of cookies.{' '}
              <a href="/privacy-policy" className="text-amber-700 underline hover:text-amber-800">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={declineCookies}
              variant="outline"
              className="border-gray-300"
            >
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              className="bg-amber-700 hover:bg-amber-800"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
