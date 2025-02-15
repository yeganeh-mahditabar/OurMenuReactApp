import { useState } from "react";
import menus from "./data";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const onChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenus =
    selectedCategory === "all"
      ? menus
      : menus.filter((menu) => menu.category === selectedCategory);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          selectedCategory={selectedCategory}
          onChangeCategory={onChangeCategory}
        />
        <Menu allMenus={filteredMenus} />
      </section>
    </main>
  );
}

export default App;
