import logo from './logo.svg';
import Button from "./component/button/index.js"
import Image from "./component/image"
import ElementAvecNiveau from "./component/elementAvecNiveau"
import SeparateurHorizontal from "./component/separateurHorizontal"
import './App.css';

const App = () => {
  const handleEvent = () => {
    alert("Ce formulaire est un formulaire de démo. Il n'envoie aucune donnée.");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="fond">
          <div class="FrameNom">
            <h2>Gauthier Dubourdieu</h2>
          </div>
          <div class="FrameAccroche">
            <p>Je suis un développeur passionné.</p>
          </div>
          <div class="FrameMetier">
            <div class="titreFrame">Métier : </div>&nbsp;<div class="texteNormal">Concepteur Développeur</div>
          </div>
          <div class="FrameCompetences">
            <p class="titreFrame">Compétences :
              <ul>
                <li>Langues : Anglais (niveau technique)</li>
                <li>Technos : </li>
                <ElementAvecNiveau txt="Delphi" nbEtoiles="5"/>
                <ElementAvecNiveau txt="PHP" nbEtoiles="4"/>
                <ElementAvecNiveau txt="Java" nbEtoiles="4"/>
                <ElementAvecNiveau txt="JavaScript" nbEtoiles="3"/>
                <li>Logiciels : Utilisation courante de logiciels de bureautique</li>
              </ul>
            </p>
          </div>
          <div class="FrameContact">
            <p class="titreFrame titreFrameContact">Formulaire de contact : </p>
            <center><textarea id="zoneSaisieMessage" rows="5" cols="50"></textarea></center>
            <center><Button onClick={() => { alert('Attention : ce formulaire est factice, il n\'envoie aucune donnée.') }}>Envoyer</Button></center>
          </div>
          <SeparateurHorizontal size="4" align="center" width="99.5%"/>
          <div class="FramePiedDePage">
            <center><p>Les informations contenues dans cette page ont été publiées par Gauthier Dubourdieu.</p></center>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
