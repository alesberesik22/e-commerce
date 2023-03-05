import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import cartReducer, { cartSlice } from "./cartReducer";
import storage from "redux-persist/lib/storage";
import { createTransform, persistReducer, persistStore } from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST"],
    },
  }),
];
const removeRegister2Transform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // Remove the register2 function from the state
    const { register2, ...rest }: any = inboundState;
    return rest;
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // Return the state as-is
    return outboundState;
  },
  // define which reducers this transform gets called for.
  { whitelist: ["cart"] }
);

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [removeRegister2Transform],
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistedStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export { store, persistedStore };
