import { useSelector } from "react-redux";

function CategoriesContainer () {

    const categories = useSelector((state) => state.categories.categoriesData);
    console.log(categories);
    return <>Categories</>
}

export default CategoriesContainer;