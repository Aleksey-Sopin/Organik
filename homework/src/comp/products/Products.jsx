import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import ProductComp from './ProductComp';

function Products() {
    // выводим 8 продуктов со скидкой
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
        <>
            {/* выводим 8 продуктов со скидкой */}
            {data.map(item => { 
                if(item.discount != '' && item.id <= 8) {  
                 return  (
                    <ProductComp key={nanoid()} item={item}/>
                 )
                }})}
        </>
    )
}

export default Products;