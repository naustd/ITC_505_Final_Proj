import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Organic Veggies"
          title="Organic Veggies"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Fruits"
          title="Fruits"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Milk Products"
          title="Milk Products"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Dry Fruits"
          title="Dry Fruits"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
