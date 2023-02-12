
import ItemList from "../ItemList/ItemList"
import { products } from "../../ProductsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const {categoryName} = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsFiltered = products.filter(
      (product) => product.category === categoryName
    );

    const task = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);

    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
      });
  }, [categoryName]);




  return (
    <div>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer

