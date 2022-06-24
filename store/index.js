import { configureStore } from '@reduxjs/toolkit'

import counterSlice from 'store/feature/counter/counterSlice'
import ItemSlice from 'store/feature/item/ItemSlice'

export function makeStore() {
  return configureStore({
    reducer: { counter: counterSlice, item: ItemSlice },
  })
}

const store = makeStore()

export default store