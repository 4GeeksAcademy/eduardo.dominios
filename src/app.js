import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const generadorDominio = () => {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  for (let p of pronoun)
      for (let a of adj)
          for (let n of noun)

              console.log(p + a + n + `.com`);
}

generadorDominio()