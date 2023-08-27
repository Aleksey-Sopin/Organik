import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import ProductComp from './ProductComp';

function AllProducts() {
    // выводим 16 продуктов со скидкой
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/")
        .then( res => res.json() )
        .then(
            (result) => {
                setData(result);
            },
            (error) => {
            }
        )
    }, []);
    return (
        <>{data.map(item => { 
                return  <ProductComp key={nanoid()} item={item}/>
            })}
        </>
    )
}

export default AllProducts;

