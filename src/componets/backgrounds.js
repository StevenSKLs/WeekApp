import cold_0 from "../imgs/cold_0.jpg";
import cold_1 from "../imgs/cold_1.jpg";
import cold_2 from "../imgs/cold_2.jpg";
import cold_3 from "../imgs/cold_3.jpg";
import cold_4 from "../imgs/cold_4.webp";

import heat_0 from "../imgs/heat_0.jpg";
import heat_1 from "../imgs/heat_1.jpg";
import heat_2 from "../imgs/heat_2.jpg";
import heat_3 from "../imgs/heat_3.jpg";
import heat_4 from "../imgs/heat_4.jpg";

import natural_0 from "../imgs/natural_0.jpg";
import natural_1 from "../imgs/natural_1.webp";
import natural_2 from "../imgs/natural_2.jpg";
import natural_3 from "../imgs/natural_3.jpg";
import natural_4 from "../imgs/natural_4.webp";

import fantastic_0 from "../imgs/fantastic_0.jpg";
import fantastic_1 from "../imgs/fantastic_1.webp";
import fantastic_2 from "../imgs/fantastic_2.jpg";
import fantastic_3 from "../imgs/fantastic_3.jpg";
import fantastic_4 from "../imgs/fantastic_4.jpg";
import fantastic_5 from "../imgs/fantastic_5.webp";
import fantastic_6 from "../imgs/fantastic_6.jpg";
import fantastic_7 from "../imgs/fantastic_7.png";
import fantastic_9 from "../imgs/fantastic_9.jpg";

import cat_gif_0 from "../imgs/cat_gif_0.gif";
import cat_gif_1 from "../imgs/cat_gif_1.gif";
import cat_gif_2 from "../imgs/cat_gif_2.gif";
import cat_gif_3 from "../imgs/cat_gif_3.gif";
import cat_gif_4 from "../imgs/cat_gif_4.gif";

const arrayCold =[
    cold_0,
    cold_1,
    cold_2,
    cold_3,
    cold_4
]

const arrayHeat =[
    heat_0,
    heat_1,
    heat_2,
    heat_3,
    heat_4
]

const arrayNatural =[
    natural_0,
    natural_1,
    natural_2,
    natural_3,
    natural_4
]

const arrayFantastic =[
    fantastic_0,
    fantastic_1,
    fantastic_2,
    fantastic_3,
    fantastic_4,
    fantastic_5,
    fantastic_6,
    fantastic_7,
    fantastic_9,
]

const arraycat_gif =[
    cat_gif_0,
    cat_gif_1,
    cat_gif_2,
    cat_gif_3,
    cat_gif_4
]

const randoms = Math.floor(Math.random()*arrayCold.length)
const randoms2 = Math.floor(Math.random()*arrayFantastic.length)

export default[
arrayCold[randoms],
arrayNatural[randoms],
arrayHeat[randoms],
arrayFantastic[randoms2],
arraycat_gif[randoms],
]



