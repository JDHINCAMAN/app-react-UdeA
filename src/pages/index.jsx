import CardGeneros from "../components/cardGeneros";
import Layout from "../layouts/layout";
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
    <Layout>
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
            ruta="/death-metal"
          />
          <CardGeneros
            nombreGenero="Black Metal"
            imagen={blackmetal}
            alt="Black metal bands"
            ruta="/black-metal"
          />
          <CardGeneros
            nombreGenero="Power Metal"
            imagen={powermetal}
            alt="Power metal bands"
            ruta="/power-metal"
          />
          <CardGeneros
            nombreGenero="Industrial Metal"
            imagen={industrialmetal}
            alt="Industrial metal bands"
            ruta="/industrial-metal"
          />
          <CardGeneros
            nombreGenero="Grindcore"
            imagen={grindcore}
            alt="Grindcore bands"
            ruta="/grindcore"
          />
          <CardGeneros
            nombreGenero="Gothic Metal"
            imagen={gothicmetal}
            alt="Gothic metal bands"
            ruta="/gothic-metal"
          />
          <CardGeneros
            nombreGenero="Folk Metal"
            imagen={folkmetal}
            alt="Folk metal bands"
            ruta="/folk-metal"
          />
          <CardGeneros
            nombreGenero="Doom Metal"
            imagen={doommetal}
            alt="Doom metal bands"
            ruta="/doom-metal"
          />
          <CardGeneros
            nombreGenero="Progressive Metal"
            imagen={progressivemetal}
            alt="Progressive metal bands"
            ruta="/progressive-metal"
          />
          <CardGeneros
            nombreGenero="Nu Metal"
            imagen={numetal}
            alt="Nu metal bands"
            ruta="/nu-metal"
          />
        </ul>
      </section>
      <section></section>
    </Layout>
  );
}

export default Index;
