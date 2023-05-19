/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  actionTypes,
  LocalStorageStateType,
  ActionObject,
  LsPayload,
} from './constants';

// ACTION CREATORS
export const actionCreators = {
  onError: (error: string): ActionObject => ({
    type: actionTypes.error,
    payload: { error: `Error: ${error}: Error En Local Storage Hk`, item: [] },
  }),
  onSuccess: <Item>(item: Item[]): ActionObject => ({
    type: actionTypes.success,
    payload: { error: '', item },
  }),
  onSave: <Item>(item: Item[]): ActionObject => ({
    type: actionTypes.save,
    payload: { error: '', item },
  }),
  onSincronize: () => ({
    type: actionTypes.sinc,
    payload: { error: '', item: [] },
  }),
};

const reducerObject = (state: LocalStorageStateType<unknown>, payload: LsPayload) => ({
  [actionTypes.error]: {
    ...state,
    error: payload.error,
    item: payload.item,
  },
  [actionTypes.success]: {
    ...state,
    error: payload.error,
    item: payload.item,
    isLoading: false,
    dataSinc: true,
  },
  [actionTypes.save]: {
    ...state,
    error: payload.error,
    item: payload.item,
    isLoading: true,
    dataSinc: false,
  },
  [actionTypes.sinc]: {
    ...state,
    error: payload.error,
    isLoading: true,
    dataSinc: false,
  },
});

export const reducer = (state: LocalStorageStateType<unknown>, action: ActionObject) => reducerObject(state, action.payload)[action.type] || state;
