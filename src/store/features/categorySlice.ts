import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Categories } from '../../interfaces/categories'

export interface CategoryState {
  category: string
}

const initialState: CategoryState = {
  category: Categories.all,
}
export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
  },
})

export const { updateCategory } = CategorySlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCategory = (state: RootState) => state.category

export default CategorySlice.reducer
