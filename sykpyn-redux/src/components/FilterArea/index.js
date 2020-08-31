import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FilterArea = ({ showProducts, filter }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="filter_area_main mt-3  d-flex justify-content-between align-items-center">
        <Button
          variant="primary"
          className="btn btn-success addOneMore"
          data-type="withMeat"
          onClick={() => showProducts()}
        >
          {t("all")}
        </Button>
        <Button
          variant="primary"
          className="btn btn-success addOneMore ml-1"
          data-type="withMeat"
          onClick={() => filter("withMeat")}
        >
          {t("withMeat")}
        </Button>
        <Button
          variant="primary"
          className="btn btn-success addOneMore ml-1"
          data-type="vegetarian"
          onClick={() => filter("vegetarian")}
        >
          {t("vegetarian")}
        </Button>
        <Button
          variant="primary"
          className="btn btn-success addOneMore ml-1"
          data-type="spacy"
          onClick={() => filter("spacy")}
        >
          {t("hot")}
        </Button>
        <Button
          variant="primary"
          className="btn btn-success addOneMore ml-1"
          data-type="sales"
          onClick={() => filter("sales")}
        >
          {t("sales")}
        </Button>
        <Button
          variant="primary"
          className="btn btn-success addOneMore ml-1"
          data-type="hit"
          onClick={() => filter("hit")}
        >
          {t("hit")}
        </Button>
      </div>
    </Fragment>
  );
};

export default FilterArea;
