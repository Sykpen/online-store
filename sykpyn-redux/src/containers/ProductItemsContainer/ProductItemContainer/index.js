import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../actions";
import { Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// class ProductItem extends Component {
//   render() {
//     const { title, price, amount, id, addToCart, image } = this.props;

//     const isProductEnded = () => {
//       return this.props.amount === 0;
//     };

//     return (
//       <Card style={{ width: "18rem", marginTop: "10px" }}>
//         <Card.Img variant="top" src={image} />
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>
//             {`Изысканая пицца по доступной цене. Всего ${price} рублей. Успей купить. Предложение ограничено (осталось ${amount} штук).`}
//           </Card.Text>
//           <Button
//             variant="primary"
//             className="btn btn-success"
//             onClick={() => addToCart(id)}
//             disabled={isProductEnded()}
//           >
//             Добавить в корзину
//           </Button>
//         </Card.Body>
//       </Card>
//     );
//   }
// }

const ProductItem = ({ title, price, amount, id, addToCart, image }) => {
  const { t } = useTranslation();

  const isProductEnded = () => {
    return amount === 0;
  };

  return (
    <Card style={{ width: "18rem", marginTop: "10px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{t("cardText", { price: price, amount: amount })}</Card.Text>
        <Button
          variant="primary"
          className="btn btn-success"
          onClick={() => addToCart(id)}
          disabled={isProductEnded()}
        >
          {t("addToCart")}
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductItem);
