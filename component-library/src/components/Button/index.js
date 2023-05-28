import { useState } from 'react';

function Button({ children }) {
  const [count, setCount] = useState(0);
  
  return (
    <button>
      {children}
      
      {count}
    </button>
  );
}

export default Button;
