import React, {
  createContext, Dispatch, useContext, useReducer,
} from 'react';

interface PropsProvider<State, Action> {
  children?: React.ReactNode;
  reducer?: (state: State, action: Action) => State;
  initialState?: State;
}

export const contextFactory = <State, Action>(
  reducer: (state: State, action: Action) => State,
  initialState: State,
) => {
  interface Store {
    state: State;
  }

  const dispatchContext = createContext<Dispatch<Action>>(() => {});
  const storeContext = createContext<Store>({
    state: { ...initialState },
  });

  const useSelector = (selector: (arg: State) => unknown) => {
    const { state } = useContext(storeContext);
    return selector(state);
  };

  const useDispatch = () => {
    const dispatchAction = useContext(dispatchContext);
    return dispatchAction;
  };

  function StoreProvider({
    children,
    reducer: reducerP = reducer,
    initialState: initialStateP = initialState,
  }: PropsProvider<State, Action>) {
    const [store, dispatch] = useReducer(reducerP, initialStateP);
    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={{ state: store }}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    );
  }

  return { StoreProvider, useSelector, useDispatch };
};
