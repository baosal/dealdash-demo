import _ from 'lodash'
import { createSlice, createSelector } from '@reduxjs/toolkit'

import fetchItemAPI from './itemAPI'

const initialState = {
  items: [],
}

export const itemsSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = _.uniqBy([...state.items, ...action.payload], 'id')
    }
  },
})

export const { addItem } = itemsSlice.actions


export const itemState = (rootState) => rootState.item;
export const selectItems = (ids) => createSelector(itemState, (state) => {
  const result = _.filter(state.items, (item) => ids.includes(item.id))
  return [...result, ...Array(ids.length - result.length).fill(null)]
});
export const allItems = (state) => state.item.items
export const allItemsId = (state) => state.item.items.map(item => item.id)


export const fetchItem =
  (ids) =>
    async (dispatch, getState) => {
      const currentItems = allItemsId(getState())
      const newItems = ids.filter((id) => !currentItems.includes(id))
      if (newItems.length > 0) {
        // console.log('fetching data')
        const response = await fetchItemAPI(newItems)
        dispatch(addItem(response))
      }
    }



export default itemsSlice.reducer
