import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../network/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})

setupListeners(store.dispatch)