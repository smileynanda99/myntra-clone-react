/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  console.log('bag: ', bag);
  const alreadyInBag = bag.findIndex((ele) => ele.id === item.id);

  const [ isSelected, setIsSelected ] = useState(alreadyInBag !== -1);

  const addToBag = () => {
    dispatch(bagActions.addToBag(item));
    setIsSelected(true);
  }

  const removeFromBag= () => {
    dispatch(bagActions.removeFromBag(item));
    setIsSelected(false);
  }

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="item-container">
          <img className="item-image" src={item.image} alt="item image" />
          <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
          </div>
          <div className="company-name">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </div>
          { !isSelected ? (
            <button className="btn-add-bag" onClick={addToBag}>Add to Bag</button>
          ) : (
            <button className="btn-remove-bag" onClick={removeFromBag}>Remove from Bag</button>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeItem;
