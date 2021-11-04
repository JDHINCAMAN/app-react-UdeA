import "./styles/styles.css";
import logo from "./media/logo.png";
import blackmetal from "./media/blackmetal.jpg";
import deathmetal from "./media/deathmetal.jpg";
import doommetal from "./media/doommetal.jpg";
import folkmetal from "./media/folkmetal.jpg";
import gothicmetal from "./media/gothicmetal.png";
import grindcore from "./media/grindcore.jpg";
import heavymetal from "./media/heavymetal.jpg";
import industrialmetal from "./media/industrialmetal.jpg";
import numetal from "./media/numetal.jpg";
import powermetal from "./media/powermetal.jpg";
import progressivemetal from "./media/progressivemetal.jpg";
import thrashmetal from "./media/thrashmetal.jpg";

function App() {
  return (
    <div className="App">
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
      <main>
        <section>
          <center>
            <h1>Generos del Metal</h1>
          </center>
          <ul className="cardContainer">
            <li className="breedCard">
              <h3>Thrash Metal</h3>
              <div className="contenedorImagen">
                <img src={thrashmetal} alt="Thrash metal bands" />
              </div>
            </li>

            <li className="breedCard">
              <h3>Heavy Metal</h3>
              <div className="contenedorImagen">
                <img src={heavymetal} alt="Heavy metal bands" />
              </div>
            </li>

            <li className="breedCard">
              <h3>Death Metal</h3>
              <div className="contenedorImagen">
                <img src={deathmetal} alt="Death metal bands" />
              </div>
            </li>

            <li className="breedCard">
              <h3>Black Metal</h3>
              <div className="contenedorImagen">
                <img src={blackmetal} alt="Black metal bands" />
              </div>
            </li>
          </ul>

          <ul className="cardContainer">
            <li className="breedCard">
              <h3>Power Metal</h3>
              <div className="contenedorImagen">
                <img src={powermetal} alt="Power metal bands" />
              </div>
            </li>

            <li className="breedCard">
              <h3>Industrial Metal</h3>
              <div className="contenedorImagen">
                <img src={industrialmetal} alt="Industrial metal bands" />
              </div>
            </li>

            <li className="breedCard">
              <h3>Grindcore</h3>
              <div className="contenedorImagen">
                <img src={grindcore} alt="Grindcore bands" />
              </div>
            </li>

            <li className="breedCard">
              <h3>Gothic Metal</h3>
              <div className="contenedorImagen">
                <img src={gothicmetal} alt="Gothic metal bands" />
              </div>
            </li>
          </ul>

          <ul className="cardContainer">
            <li className="breedCard">
              <h3>Folk Metal</h3>
              <div className="contenedorImagen">
                <img src={folkmetal} alt="Folk metal bands" />
              </div>
            </li>

            <li className="breedCard">
              <h3>Doom Metal</h3>
              <div className="contenedorImagen">
                <img src={doommetal} alt="Doom metal bands" />
              </div>
            </li>

            <li className="breedCard">
              <h3>Progressive Metal</h3>
              <div className="contenedorImagen">
                <img src={progressivemetal} alt="Progressive metal bands" />
              </div>
            </li>

            <li className="breedCard">
              <h3>Nu Metal</h3>
              <div className="contenedorImagen">
                <img src={numetal} alt="Nu metal bands" />
              </div>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
