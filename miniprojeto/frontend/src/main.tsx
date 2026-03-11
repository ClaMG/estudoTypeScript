import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RoutesApp from './Routes';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Envolve a aplicação */}
    <QueryClientProvider client={queryClient}>
      <RoutesApp />
    </QueryClientProvider>
  </React.StrictMode>
)