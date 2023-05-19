/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useReducer } from 'react';

import { actionCreators } from "./context/reducer";
import { useLsSelector, useLsDispatch } from './context';
import { LocalStorageStateType } from './context/constants';

interface ILocalStorageItem {
  id: string;
  data: {};
}

function useLocalStorage <Item extends ILocalStorageItem>(lsItem: string, preChargedItem: Item[]) {
  const { onError, onSave, onSincronize, onSuccess } = actionCreators;
  const {
    item,
    dataSinc,
    isLoading,
    error,
  } = useLsSelector((state) => state) as LocalStorageStateType<Item>;
  const dispatch = useLsDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Local Storage Rutine //
        const localStorageItem = localStorage.getItem(lsItem);
        let parsedLsItem: Item[];

        if (!localStorageItem) {
          localStorage.setItem(lsItem, JSON.stringify(preChargedItem));
          parsedLsItem = preChargedItem;
        } else {
          parsedLsItem = JSON.parse(localStorageItem);
        }
        dispatch(onSuccess(parsedLsItem));
        // End Local Storage Rutine //
      } catch (error: any) {
        dispatch(onError(error));
      }
    }, 3000);
  }, [dataSinc]);

  const getItems = (): Item[] => {
    const localStorageItem = localStorage.getItem(lsItem);
    let storageItem: Item[] = [];
    if (localStorageItem) {
      storageItem = JSON.parse(localStorageItem);
    }

    return storageItem;
  };

  const saveItems = (items: Item[]): void => {
    const stringifiedItem = JSON.stringify(items);
    localStorage.setItem(lsItem, stringifiedItem);
    dispatch(onSave(items));
  };

  const saveLsItem = (newLsItem: Item) => {
    try {
      const storageItem = getItems();
      console.log(saveItems);
      storageItem.push(newLsItem);
      saveItems(storageItem);
    } catch (error: any) {
      dispatch(onError(error));
    }
  };

  const removeItemStorage = (artc: Item) => {
    try {
      let objWhitRemoveEl: Item[] = [];
      const storageItem = getItems();
      objWhitRemoveEl = storageItem.filter((item) => item.id !== artc.id);
      localStorage.removeItem(lsItem);
      saveItems(objWhitRemoveEl);
    } catch (error: any) {
      dispatch(onError(error));
    }
  };

  const clearStorage = () => localStorage.clear();

  const totalItems = (): number => {
    const storageItem = getItems();
    return storageItem.length;
  };

  const sicronizedData = () => {
    dispatch(onSincronize());
  };

  return {
    item,
    saveLsItem,
    isLoading,
    error,
    clearStorage,
    removeItemStorage,
    totalItems,
    sicronizedData,
  };
}

export { useLocalStorage };
