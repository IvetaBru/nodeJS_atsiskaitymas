import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import { BooksProvider } from './components/contexts/BooksContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BooksProvider>
      <App />
    </BooksProvider>
  </BrowserRouter>
)
