import { Link } from "react-router-dom";

const CardGeneros = ({ nombreGenero, imagen, alt, ruta }) => {
  return (
    <li className="breedCard">
      <h3>{nombreGenero}</h3>
      <Link to={ruta}>
        <div className="contenedorImagen">
          <img src={imagen} alt={alt} />
        </div>
      </Link>
    </li>
  );
};

export default CardGeneros;
