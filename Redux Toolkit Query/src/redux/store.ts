import { configureStore } from "@reduxjs/toolkit";
import { globalAPI } from "./api";
import myReducer from "./reducer";

export const store = configureStore({
	reducer: {
		[globalAPI.reducerPath]: globalAPI.reducer,
		myReducer: myReducer.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(globalAPI.middleware),
});
