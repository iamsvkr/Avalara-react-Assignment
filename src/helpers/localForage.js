import localForage from "localforage";

const globalStore = "invoicer";
const globalKey = "__data__";

export const getStorageInstance = (key) =>
  localForage.createInstance({
    driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE],
    name: globalStore,
    storeName: `${key}Storage`,
  });

export const getSingleState = async (storageKey) => {
  const storage = getStorageInstance(storageKey);
  const db = (await storage.getItem(globalKey)) || {};
  return [storage, { ...db }];
};

export const getSingleStore = async (storageKey) => {
  const storage = getStorageInstance(storageKey);
  const db = (await storage.getItem(globalKey)) || {};
  return { ...db };
};

export const setLocalForageData = async (storageKey, state) => {
  const [storage, syncState] = await getSingleState(storageKey);
  if (!Object.keys(syncState).length) {
    syncState[storageKey] = [];
  }
  syncState[storageKey].push(state);
  await storage.setItem(globalKey, syncState);
  return getSingleState(storageKey);
};
