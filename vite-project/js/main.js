import { DOMSelectors } from './dom'
import '../style.css'
import { array } from './array'

function insert(cards){
    cards.foreach((move)=> DOMSelectors.gallery.insertAdjacentHTML("beforeend", move.card))
};

insert(cards);