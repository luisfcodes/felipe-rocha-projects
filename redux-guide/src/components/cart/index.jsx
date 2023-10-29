// Styles
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/index";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector((state) => state.cartReducer);
  const productsCount = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {products.length && (
          <Styles.CartTotal>Total: R${productsCount}</Styles.CartTotal>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
