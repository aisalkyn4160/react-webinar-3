import React, { useState } from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from './../../utils';
// import Head from "../head";
import BasketModal from "../basket-modal";

function Controls({openBasket, setOpenBasket}) {
  const [arr, setArr] = useState([]);
  // const [count, setCount] = useState(0);

  
  

  return (
    <div className='Controls'>
      <p>В корзине: {arr.length === 0 ? 'Пусто' : plural(arr.length, {one: 'товар', few: 'товара', many: 'товаров'})}   </p>
      <button onClick={() => setOpenBasket(!openBasket)}>Перейти</button>
      {openBasket && <BasketModal/>}
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Controls);
