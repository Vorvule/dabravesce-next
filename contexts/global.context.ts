import React from 'react';

import Daily from '@/services/daily';

export type ContextType = {
  keychain: number[],
  updateKeychain: any,
  dailyKeychain: number[],
  menuKeychain: number[] | null,
  updateMenuKeychain: ((keys: number[] | null) => void) | null,
};

const dailyKeychain: number[] = Daily.getDailyKeychain();

const initialState: ContextType = {
  keychain: [1, 1, 1],
  updateKeychain: null,
  dailyKeychain,
  menuKeychain: null,
  updateMenuKeychain: null,
};

export const GlobalContext: React.Context<ContextType> = React.createContext(initialState);
