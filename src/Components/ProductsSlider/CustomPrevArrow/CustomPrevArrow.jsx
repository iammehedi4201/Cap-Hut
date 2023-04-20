import React from 'react';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="arrow prev-arrow" onClick={onClick}>
        <i className="icon-arrow-left"></i>
      </button>
    );
};

export default CustomPrevArrow;