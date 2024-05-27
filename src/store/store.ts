import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit"
import potsSlice from "./redux/pots/potsSlice"
import authSlice from "./redux/auth/authSlice"

const rootReducer = combineReducers({
  form: authSlice,
  leafGrow: potsSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  })
  return store
}

export const store = makeStore()

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
