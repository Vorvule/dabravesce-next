import React from 'react';

import Daily from '@/functions/Daily';

export type ContextType = {
  keychain: number[],
  updateKeychain: any,
  dailyKeychain: number[]
}

const dailyKeychain: number[] = Daily.getDailyKeychain();

const initialState: ContextType = {
  keychain: [1, 1, 1],
  updateKeychain: null,
  dailyKeychain,
};

export const GlobalContext: React.Context<ContextType> = React.createContext(initialState);
