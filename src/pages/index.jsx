import CardGeneros from "../components/cardGeneros";
import Footer from "../components/footer";
import Header from "../components/header";
import blackmetal from "../media/blackmetal.jpg";
import deathmetal from "../media/deathmetal.jpg";
import doommetal from "../media/doommetal.jpg";
import folkmetal from "../media/folkmetal.jpg";
import gothicmetal from "../media/gothicmetal.png";
import grindcore from "../media/grindcore.jpg";
import heavymetal from "../media/heavymetal.jpg";
import industrialmetal from "../media/industrialmetal.jpg";
import numetal from "../media/numetal.jpg";
import powermetal from "../media/powermetal.jpg";
import progressivemetal from "../media/progressivemetal.jpg";
import thrashmetal from "../media/thrashmetal.jpg";

function Index() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <center>
            <h1>Generos del Metal</h1>
          </center>
          <ul className="cardContainer">
            <CardGeneros
              nombreGenero="Thrash Metal"
              imagen={thrashmetal}
              alt="Thrash metal bands"
              ruta="/thrash-metal"
            />
            <CardGeneros
              nombreGenero="Heavy Metal"
              imagen={heavymetal}
              alt="Heavy metal bands"
              ruta="/heavy-metal"
            />
            <CardGeneros
              nombreGenero="Death Metal"
              imagen={deathmetal}
              alt="Death metal bands"
            />
            <CardGeneros
              nombreGenero="Black Metal"
              imagen={blackmetal}
              alt="Black metal bands"
            />
            <CardGeneros
              nombreGenero="Power Metal"
              imagen={powermetal}
              alt="Power metal bands"
            />
            <CardGeneros
              nombreGenero="Industrial Metal"
              imagen={industrialmetal}
              alt="Industrial metal bands"
            />
            <CardGeneros
              nombreGenero="Grindcore"
              imagen={grindcore}
              alt="Grindcore bands"
            />
            <CardGeneros
              nombreGenero="Gothic Metal"
              imagen={gothicmetal}
              alt="Gothic metal bands"
            />
            <CardGeneros
              nombreGenero="Folk Metal"
              imagen={folkmetal}
              alt="Folk metal bands"
            />
            <CardGeneros
              nombreGenero="Doom Metal"
              imagen={doommetal}
              alt="Doom metal bands"
            />
            <CardGeneros
              nombreGenero="Progressive Metal"
              imagen={progressivemetal}
              alt="Progressive metal bands"
            />
            <CardGeneros
              nombreGenero="Nu Metal"
              imagen={numetal}
              alt="Nu metal bands"
            />
          </ul>
        </section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
