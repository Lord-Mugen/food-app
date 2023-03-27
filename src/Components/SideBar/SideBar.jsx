import React from "react";
import { useSideBarContext } from "../../context/sideBarContext";
import { ImCancelCircle } from "react-icons/im";
import "./SideBar.scss";
import { Link } from "react-router-dom";
import { useMealContext } from "../../context/mealContext";

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useSideBarContext();
  const { categories } = useMealContext();

  return (
    <nav className={`sideBar ${isSideBarOpen ? "sideBar-visible" : ""}`}>
      <button
        type="button"
        className="navbar-hide-btn"
        onClick={() => closeSideBar()}
      >
        <ImCancelCircle size={24} />
      </button>

      <div className="side-content">
        <ul className="side-nav">
          {categories.map((category) => (
            <li className="side-item" key={category.idCategory}>
              <Link
                to={`/meal/category/${category.strCategory}`}
                className="side-link ls-1 fs-13"
                onClick={() => closeSideBar()}
              >
                {category.strCategory}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
