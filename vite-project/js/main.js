import { DOMSelectors } from './dom'
import '../style.css'
import { array } from './array'

function insert(cards){
    cards.forEach((move)=> DOMSelectors.gallery.insertAdjacentHTML("beforeend", move.Image))
};

insert(DOMSelectors.Image); 
