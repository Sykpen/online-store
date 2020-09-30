import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FilterArea = ({ filterProducts, stableProductCopy }) => {
  const { t } = useTranslation();
  let arrayForTypes = [];

  const makeArrayOfTypes = () => {
    if (stableProductCopy) {
      stableProductCopy.filter((product) => {
        arrayForTypes.push.apply(arrayForTypes, product.type);
      });
      let uniqueTypesArray = [...new Set(arrayForTypes)];
      return uniqueTypesArray;
    }
  };

  let types = makeArrayOfTypes();

  if (!types) {
    return <div>Информации пока нет, перезагрузите сайт.</div>;
  }

  return types.map((type) => (
    <Button
      variant="primary"
      className="btn btn-success addOneMore"
      onClick={() => filterProducts(type)}
    >
      {t(type)}
    </Button>
  ));
};

export default FilterArea;
