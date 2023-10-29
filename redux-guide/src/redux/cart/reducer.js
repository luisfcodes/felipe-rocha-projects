import CartActionTypes from "./action-types"

const initialState = {
  products: [],
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productExists = state.products.find(product => product.id === action.payload.id)

      if (productExists) {
        return {
          ...state,
          products: state.products.map(product => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity + 1
              }
            }
            return product
          }),
        }
      }        
      
      return {
        ...state,
        products: [...state.products, {
          ...action.payload,
          quantity: 1
        }],
      }

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id),
      }
      
    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          }
          return product
        }),
      }

    case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
      const product = state.products.find(product => product.id === action.payload.id)

      if (product.quantity === 1) {
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload.id),
        }
      }

      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity - 1
            }
          }
          return product
        }),
      }

    default:
      return state
  }
}

export default cartReducer