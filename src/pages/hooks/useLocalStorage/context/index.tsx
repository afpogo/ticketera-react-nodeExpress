/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import { initialState } from './constants';
import { ComponentType } from 'react';
import { LocalStorageStateType, initialState, ActionObject } from './constants';
import { reducer } from './reducer';

import { contextFactory } from '@/config/context';

type Props = {
  // Define los props necesarios para el componente envuelto
};

const {
  StoreProvider: LsProvider,
  useSelector: useLsSelector,
  useDispatch: useLsDispatch,
} = contextFactory<LocalStorageStateType<unknown>, ActionObject>(reducer, initialState);

const withLsProvider = <P extends Props>(
  WrappedComponent: ComponentType<P>,
  customInitialState: LocalStorageStateType<unknown>
): ComponentType<P> => {
  const WithLsProvider = (props: P) => {
    return (
      <LsProvider>
        <WrappedComponent {...props} />
      </LsProvider>
    );
  };

  return WithLsProvider;
};

// export { LsProvider, useLsSelector, useLsDispatch };
export { withLsProvider, useLsSelector, useLsDispatch };
