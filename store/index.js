import { configureStore } from '@reduxjs/toolkit'

import counterReducer from 'store/feature/counter/counterSlice'

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer },
  })
}

const store = makeStore()

export default store