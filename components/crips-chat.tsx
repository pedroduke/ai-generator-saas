'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('3db4cd15-9bfa-4348-bd3a-3e45c9e65968');
  }, []);

  return null;
};
