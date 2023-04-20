import React from 'react';

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="arrow next-arrow" onClick={onClick}>
        <i className="icon-arrow-right"></i>
      </button>
    );
};

export default CustomNextArrow;