import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Container, Col } from "react-grid-system";
import Button from "@reactioncommerce/components/Button/v1";
import CartItemsList from "@reactioncommerce/components/CartItems/v1";
import * as s from "./style";

const CartItems = (props) => {
  const {
    items,
    onChangeCartItemQuantity,
    onRemoveItemFromCart,
    isMiniCart,
    isReadOnly,
    hasMoreCartItems,
    onLoadMoreCartItems
  } = props;

  useEffect(() => {
    console.log(items);
  }, []);

  const handleItemQuantityChange = (quantity, _id) => {
    onChangeCartItemQuantity(quantity, _id);
  };

  const handleRemoveItem = (_id) => {
    onRemoveItemFromCart(_id);
  };

  return (
    <Container component="ul">
      {items.map((product) => {
        console.log(product);
        return (
          <s.StyledRow component="li">
            <Col xs={3}>
              <s.ImageBox>
                <s.Image src={product.imageURLs && product.imageURLs.small} alt="" />
              </s.ImageBox>
            </Col>
            <s.StyledCol xs={6}>
              <s.Title>{product.title}</s.Title>
              <s.Variant>{product.variantTitle}</s.Variant>
              <s.QuantityCounter>
                <s.CounterButton onClick={() => handleItemQuantityChange(product.quantity - 1, product._id)}>
                  -
                </s.CounterButton>
                <s.Quantity>{product.quantity}</s.Quantity>
                <s.CounterButton onClick={() => handleItemQuantityChange(product.quantity + 1, product._id)}>
                  +
                </s.CounterButton>
              </s.QuantityCounter>
            </s.StyledCol>
            <s.StyledCol xs={3}>
              <s.Controls>
                <s.Button onClick={() => handleRemoveItem(product._id)}>X</s.Button>
                <s.Price>{product.price && product.price.displayAmount}</s.Price>
              </s.Controls>
            </s.StyledCol>
          </s.StyledRow>
        );
      })}
    </Container>
  );
};

CartItems.propTypes = {
  classes: PropTypes.object,
  hasMoreCartItems: PropTypes.bool,
  isMiniCart: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      attributes: PropTypes.arrayOf(PropTypes.object),
      currencyQuantity: PropTypes.number,
      imageUrl: PropTypes.string,
      isLowInventoryQuantity: PropTypes.bool,
      price: PropTypes.shape({
        displayPrice: PropTypes.string,
        compareAtPrice: PropTypes.string
      }),
      productSlug: PropTypes.string,
      title: PropTypes.string,
      quantity: PropTypes.number
    })
  ).isRequired,
  onChangeCartItemQuantity: PropTypes.func.isRequired,
  onLoadMoreCartItems: PropTypes.func,
  onRemoveItemFromCart: PropTypes.func.isRequired,
  productURLPath: PropTypes.string
};

CartItems.defaultProps = {
  onChangeCartItemQuantity: () => {},
  onRemoveItemFromCart: () => {}
};

export default CartItems;
