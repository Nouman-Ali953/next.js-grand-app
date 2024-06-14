"use client";
import { makeStore, persistor, store } from "@/lib/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


export default function StoreProvider({ children }) {
  const storeRef = useRef();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // storeRef.current.dispatch(add()); // Use correct spelling
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
