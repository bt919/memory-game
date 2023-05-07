import naruto from "../images/naruto.webp";
import itachi from "../images/itachi.webp";
import kakashi from "../images/kakashi.webp";
import sasuke from "../images/sasuke.webp";
import shikamaru from "../images/shikamaru.webp";
import jiraiya from "../images/jiraiya.webp";
import gaara from "../images/gaara.webp";
import hinata from "../images/hinata.webp";
import madara from "../images/madara.webp";
import minato from "../images/minato.webp";
import pain from "../images/pain.webp";
import obito from "../images/obito.webp";
import lee from "../images/rock_lee.webp";
import sakura from "../images/sakura.webp";
import neji from "../images/neji.webp";
import deidara from "../images/deidara.webp";
import orochimaru from "../images/orochimaru.webp";
import guy from "../images/might_guy.webp";
import tsunade from "../images/tsunade.webp";
import hidan from "../images/hidan.webp";
import konan from "../images/konan.webp";
import kiba from "../images/kiba.webp";

const Characters = (character) => {
  const characters = {
    Naruto: naruto,
    Itachi: itachi,
    Kakashi: kakashi,
    Sasuke: sasuke,
    Shikamaru: shikamaru,
    Jiraiya: jiraiya,
    Gaara: gaara,
    Hinata: hinata,
    Madara: madara,
    Minato: minato,
    Nagato: pain,
    Obito: obito,
    "Rock Lee": lee,
    Sakura: sakura,
    Neji: neji,
    Deidara: deidara,
    Orochimaru: orochimaru,
    "Might Guy": guy,
    Tsunade: tsunade,
    Hidan: hidan,
    Konan: konan,
    Kiba: kiba,
  };

  return [character, characters[character]];
};

export default Characters;
