import { configureStore } from '@reduxjs/toolkit'

import ItemSlice from 'store/feature/item/ItemSlice'

export function makeStore() {
  return configureStore({
    reducer: { item: ItemSlice },
  })
}

const store = makeStore()

export default store