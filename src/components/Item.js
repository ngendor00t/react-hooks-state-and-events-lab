import React from "react";

function Item ({ name, category }) {



const [inCart, setclassName] = useState(false)
  
function handleClick(){
  setclassName(() => !inCart)
}

  return (
    <li className={ inCart ? "in-Cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{incart ?"Remove" : Add to cart}</button>
    </li>
  );
}

export default Item;
