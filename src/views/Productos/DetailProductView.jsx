
import { useEffect, useState } from "react";
import { fetchGet } from "../../logic/ApiHelper";
import { useParams } from "react-router-dom";

const DetailProductView = () => {
  const { id } = useParams();
  const [manualidad, setManualidad] = useState({});

  useEffect(() => {
    fetchGet(`https://api.escuelajs.co/api/v1/products/${id}`).then(
      (response) => setManualidad(response)
    );
  }, [id]);

  return (
    <div>
      <h1>{manualidad.title}</h1> 
      <h4>{manualidad.price}</h4> {/* Ajustado para coincidir con la respuesta de la API */}
      <p>{manualidad.description}</p> 
      {/* Otros detalles específicos de la manualidad */}
    </div>
  );
};

export default DetailProductView;
