import "./HomePage.scss";
import { useMealContext } from "../../context/mealContext";
import Loader from "../../Components/Loader/Loader";
import CategoryList from "../../Components/Category/CategoryList";
import NotFound from "../../Components/NotFound/NotFound";
import MealList from "../../Components/Meal/MealList";

const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();

  return (
    <main className="main-content">
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <NotFound />
      ) : meals?.length ? (
        <MealList meals={meals} />
      ) : (
        ""
      )}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default HomePage;
