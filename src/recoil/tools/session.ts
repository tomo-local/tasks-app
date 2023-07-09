import { recoilPersist } from 'recoil-persist';

const localStorageAtom = recoilPersist({
  key: 'localStorageAtom',
  storage: typeof window === 'undefined' ? undefined : localStorage,
});

const sessionStorageAtom = recoilPersist({
  key: 'sessionStorageAtom',
  storage: typeof window === 'undefined' ? undefined : sessionStorage,
});

export { localStorageAtom, sessionStorageAtom };
