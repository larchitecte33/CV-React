import "./index.css"

const ElementAvecNiveau = (props) => {
  let chaineARetourner = "";

  if(props.nbEtoiles == 5) {
    return (
        <li>&nbsp;&nbsp;&nbsp;&nbsp;
            {props.txt} <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/></li>
    );
  }
  else if(props.nbEtoiles == 4) {
    return (
        <li>&nbsp;&nbsp;&nbsp;&nbsp;
            {props.txt} <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        </li>
    );
  }
  else if(props.nbEtoiles == 3) {
    return (
        <li>&nbsp;&nbsp;&nbsp;&nbsp;
            {props.txt} <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        </li>
    );
  }
  else if(props.nbEtoiles == 2) {
    return (
        <li>&nbsp;&nbsp;&nbsp;&nbsp;
            {props.txt} <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        </li>
    );
  }
  else if(props.nbEtoiles == 1) {
    return (
        <li>&nbsp;&nbsp;&nbsp;&nbsp;
            {props.txt} <img src="etoile_bleue_fond_transparent.png" alt="etoile bleue"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        </li>
    );
  }
  else {
    return (
        <li>{props.txt} <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        <img src="etoile_noire_fond_transparent.png" alt="etoile noire"/>
                        </li>
    );
  }
}

export default ElementAvecNiveau;
