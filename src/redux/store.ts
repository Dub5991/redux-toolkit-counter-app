// store.ts
import { configureStore } from '@reduxjs/toolkit';
/* added code begins */
import counterReducer from './counterSlice'
/* added code ends */

export const store = configureStore({
   reducer: {
	 		/* added code begins */
   		counter: counterReducer, 
	 		/* added code ends */
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;