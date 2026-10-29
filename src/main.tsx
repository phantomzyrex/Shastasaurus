import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent benign ResizeObserver loop notifications from third-party smooth-scroll libraries
if (typeof window !== 'undefined') {
  window.addEventListener(
    'error',
    (event) => {
      if (
        typeof event.message === 'string' &&
        event.message.includes('ResizeObserver loop')
      ) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    },
    true
  );
}

createRoot(document.getElementById('root')!).render(<App />);
