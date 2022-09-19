import { Categories, CategoryIds } from '../interfaces/categories'

export const getCategoryId = (category: string) => {
  let currentCategoryId = ''

  switch (category) {
    case Categories.greyHound:
      currentCategoryId = CategoryIds.greyHound
      break
    case Categories.harness:
      currentCategoryId = CategoryIds.harness
      break
    case Categories.horse:
      currentCategoryId = CategoryIds.horse
      break
    default:
      currentCategoryId = CategoryIds.all
      break
  }
  return currentCategoryId
}
