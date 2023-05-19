/* eslint-disable no-unused-vars */

export const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sinc: 'SINCRONIZE',
};

export enum LsActionsType {
  error = 'ERROR',
  success = 'SUCCESS',
  save = 'SAVE',
  sinc = 'SINCRONIZE',
}

export interface ILocalStorage {
  error: string;
  item: [];
  isLoading: boolean;
  dataSinc: boolean;
}

export interface LocalStorageStateType<Item> {
  item: Item[];
  dataSinc: boolean;
  isLoading: boolean;
  error: string;
}

// Actions
export interface ActionObject {
  type: string;
  payload: LsPayload;
}

export interface LsPayload extends Pick<LocalStorageStateType<unknown>, 'item'> {
  error: string;
}

export const initialState: LocalStorageStateType<unknown> = {
  item: [],
  dataSinc: false,
  isLoading: false,
  error: '',
};


// export const initialState = (initialValue: [] = []): LocalStorageStateType => ({
//   item: initialValue,
//   dataSinc: false,
//   isLoading: false,
//   error: false,
// });

// export interface LsAction {
//   type: LsActionsType;
//   payload: ILocalStorage;
// }

// export type LsState = {
//   LsData: ILocalStorage | null;
// };