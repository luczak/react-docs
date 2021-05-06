import { ProductCategoryRow } from "./product-category-row.js";
import { ProductRow } from "./product-row.js";

export const ProductTable = (props) => {
    const categories = props.products.map(p => p.category);
    const uniqueCategories = Array.from(new Set(categories));
    const categorySections = uniqueCategories.map(category => {
        const products = props.products.filter(p => p.category === category);
        return (
            <div key={category}>
                <ProductCategoryRow name={category} />
                {products.map(p =>
                    <ProductRow key={p.name} product={p} />
                )}
            </div>
        );
    });

    return (
        <>
            <span className="table-column"><b>Name</b></span>
            <span className="table-column"><b>Price</b></span>
            {categorySections}
        </>
    );
};