import React, { useContext, useEffect } from "react";
import { jewelryContext } from "../../contexts/jewelryContext";

const ProductsList = () => {
  const { getJewelry, jewelry } = useContext(jewelryContext);

  useEffect(() => {
    getJewelry();
  }, []);
  return <div>products list</div>;
};

export default ProductsList;
