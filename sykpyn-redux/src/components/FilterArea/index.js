import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FilterArea = ({ showProducts, filter }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="filter_area_main">
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
          className="btn btn-success addOneMore"
          data-type="withMeat"
          onClick={() => filter("withMeat")}
        >
          {t("withMeat")}
        </Button>
        <Button
          variant="primary"
          className="btn btn-success addOneMore"
          data-type="vegetarian"
          onClick={() => filter("vegetarian")}
        >
          {t("vegetarian")}
        </Button>
        <Button
          variant="primary"
          className="btn btn-success addOneMore"
          data-type="spacy"
          onClick={() => filter("spacy")}
        >
          {t("hot")}
        </Button>
        <Button
          variant="primary"
          className="btn btn-success addOneMore"
          data-type="sales"
          onClick={() => filter("sales")}
        >
          {t("sales")}
        </Button>
        <Button
          variant="primary"
          className="btn btn-success addOneMore"
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
