// app/providers.js
'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { setStoreReference } from '@/lib/axios';
import { useEffect } from 'react';

// Set store reference for axios interceptor
setStoreReference(store);

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}