```javascript
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/nonexistent-route'); 
  };

  useEffect(() => {
    const handleRouteChangeError = (err,url) => {
      console.error('Route change error:', err, url);
      // Add custom error handling logic, for example display an alert
      alert('Route not found');
    };
    router.events.on('routeChangeError', handleRouteChangeError);
    return () => {
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router.events]);

  return (
    <button onClick={handleClick}>Go to Nonexistent Route</button>
  );
}

export default MyComponent; 
```