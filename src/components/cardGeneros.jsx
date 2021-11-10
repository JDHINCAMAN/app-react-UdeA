function CardGeneros({ nombreGenero, imagen, alt }) {
  return (
    <li className="breedCard">
      <h3>{nombreGenero}</h3>
      <div className="contenedorImagen">
        <img src={imagen} alt={alt} />
      </div>
    </li>
  );
}

export default CardGeneros;
