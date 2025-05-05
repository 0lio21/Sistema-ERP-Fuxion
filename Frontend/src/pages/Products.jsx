import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>SKU</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.product_id}>
              <td>{p.product_name}</td>
              <td>{p.sku}</td>
              <td>${p.selling_price}</td>
              <td>{p.stock_quantity}</td>
              <td>{p.category || "Sin categoría"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
