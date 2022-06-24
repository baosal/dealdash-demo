import _ from 'lodash'
import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'

import fetchItemAPI from './itemAPI'

const initialState = {
  items: [],
}

// export const fetchItem = createAsyncThunk(
//   'item/fetchItemAPI',
//   async (ids) => {
//     const notExitedItems = state.items.filter(function (item) {
//       return arrayOfIDs.indexOf(item.id) === -1;
//     })
//     const response = await fetchItemAPI(ids)
//     return response
//   }
// )

export const itemsSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = _.uniqBy([...state.items, ...action.payload], 'id')
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchItem.pending, (state) => {
  //       state.status = 'loading'
  //     })
  //     .addCase(fetchItem.fulfilled, (state, action) => {
  //       state.status = 'idle'
  //       state.items.push(...action.payload)
  //     })
  // },
})

export const { addItem } = itemsSlice.actions


export const itemState = (rootState) => rootState.item;
export const selectItems = (ids) => createSelector(itemState, (state) => _.filter(state.items, (item) => ids.includes(item.id)));
export const allItems = (state) => state.item.items
export const allItemsId = (state) => state.item.items.map(item => item.id)


export const fetchItem =
  (ids) =>
    async (dispatch, getState) => {
      const currentItems = allItemsId(getState())
      const newItems = ids.filter((id) => !currentItems.includes(id))
      if (newItems.length > 0) {
        console.log('fetching data')
        const response = await fetchItemAPI(newItems)
        dispatch(addItem(response))
      }
    }



export default itemsSlice.reducer
