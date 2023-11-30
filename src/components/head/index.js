import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Head({title,closeBtn}) {

  return (
    <div className='Head'>
      <h1>{title}</h1>
      {closeBtn && <button>Закрыть</button>}
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
};

export default React.memo(Head);
