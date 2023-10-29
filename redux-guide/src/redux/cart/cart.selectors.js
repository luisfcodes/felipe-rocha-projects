export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce((acc, product) => {
    return acc + product.quantity
  }, 0)
}

export const selectProductsTotalPrice = (rootReducer) => (
  rootReducer.cartReducer.products.reduce((acc, product) => {
    return acc + product.quantity * product.price
  }, 0)
)