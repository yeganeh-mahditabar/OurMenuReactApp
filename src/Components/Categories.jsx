import menus from "../data";

const categories = ["all", ...new Set(menus.map((menu) => menu.category))];

const Categories = ({ onChangeCategory, selectedCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            category === selectedCategory
              ? "filter-btn highlight"
              : "filter-btn"
          }
          onClick={() => {
            onChangeCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
