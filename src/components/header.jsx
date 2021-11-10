import logo from "../media/logo.png";

const Header = () => {
  return (
    <header>
      <ul className="navbar">
        <li>
          <img src={logo} alt="Logo" className="logo" />
        </li>
        <li>
          <div className="buscar">
            <input placeholder="Buscar un genero" />
            <i className="fas fa-search butonBuscar"></i>
          </div>
        </li>
        <li>
          <button className="button mainButton">Nuevo post</button>
        </li>
        <li>
          <button className="button mainButton">Registro</button>
        </li>
        <li>
          <button className="button sessionButton">Iniciar sesion</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
