'use client'; // important: marks this as a client component

import { useEffect } from 'react';

const TidioLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/5cdxb8nm9iemnjzx1al06isrq3u9i1yv.js';
    script.async = true;
    document.body.appendChild(script);

    // Optional: cleanup if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // this component doesn’t render anything visible
};

export default TidioLoader;
