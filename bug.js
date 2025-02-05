```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an error if the route doesn't exist
    router.push('/nonexistent-route'); 
  };

  return (
    <button onClick={handleClick}>Go to Nonexistent Route</button>
  );
}

export default MyComponent; 
```