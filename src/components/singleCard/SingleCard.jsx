import React from "react";

const SingleCard = (props) => {
  const { item } = props;
  return (
    <div className="single-card">
      <img src={item?.img} alt={item?.name} />
      <div className="single-card__body">
        <h3 className="single-card__body__title">{props?.title}</h3>
        <p className="single-card__body__description">{props?.description}</p>
        <span>${item?.price}</span>
      </div>
      <div className="single-card__actions">
        <button
          className="btn btn--secondary"
          onClick={() => props.onIncrement(item)}
        >
          +
        </button>
        <button
          className="btn btn--secondary"
          onClick={() => props.onDecrement(item)}
        >
          -
        </button>
        <button
          className="btn btn--primary"
          onClick={() => props.onDelete(item)}
        >
          delete
        </button>
      </div>
      <div>
        <div className="single-card__count">Items: {item?.count}</div>

        <div className="single-card__totoal">${props.total}</div>
      </div>
    </div>
  );
};

export default React.memo(SingleCard);
