import React, { useEffect, useState } from "react";
import { fetchGet } from "../../logic/ApiHelper";
import { useParams } from "react-router-dom";

const DetailProductView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchGet("https://api.escuelajs.co/api/v1/products/" + id).then(
      (response) => setProduct(response)
    );
  }, {});

  return (
    <div>
      <h1>{product.title}</h1>
      <h4>{product.price}</h4>
      <p>{product.description}</p>
    </div>
  );
};

export default DetailProductView;
