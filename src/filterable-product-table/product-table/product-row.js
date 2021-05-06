export const ProductRow = ({ product }) => {
    return (
        <p className={product.stocked ? '' : 'empty-product'}>
            <span className="table-column">{product.name}</span>
            <span className="table-column">{product.price}</span>
        </p>
    );
}