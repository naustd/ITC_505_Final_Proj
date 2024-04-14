import Button from "../components/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button
            onClickHandler={handleClick}
            value="Vegetables"
            title="Vegetables"
          />
          <Button
            onClickHandler={handleClick}
            value="Milk Products"
            title="Milk Products"
          />
          <Button
            onClickHandler={handleClick}
            value="Dry Fruits"
            title="Dry Fruits"
          />
          <Button onClickHandler={handleClick} value="Fruits" title="Fruits" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
