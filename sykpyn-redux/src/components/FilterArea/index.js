import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";

class FilterArea extends Component {
  render() {
    const { filter, showProducts } = this.props;

    return (
      <Fragment>
        <div className="filter_area_main">
          <Button
            variant="primary"
            className="btn btn-success addOneMore"
            data-type="withMeat"
            onClick={() => showProducts()}
          >
            Все
          </Button>
          <Button
            variant="primary"
            className="btn btn-success addOneMore"
            data-type="withMeat"
            onClick={() => filter("withMeat")}
          >
            Мясные
          </Button>
          <Button
            variant="primary"
            className="btn btn-success addOneMore"
            data-type="vegetarian"
            onClick={() => filter("vegetarian")}
          >
            Вегетерианские
          </Button>
          <Button
            variant="primary"
            className="btn btn-success addOneMore"
            data-type="spacy"
            onClick={() => filter("spacy")}
          >
            Острые
          </Button>
          <Button
            variant="primary"
            className="btn btn-success addOneMore"
            data-type="sales"
            onClick={() => filter("sales")}
          >
            Акции
          </Button>
          <Button
            variant="primary"
            className="btn btn-success addOneMore"
            data-type="hit"
            onClick={() => filter("hit")}
          >
            Лидеры продаж
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default FilterArea;
