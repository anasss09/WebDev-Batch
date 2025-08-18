import React, {useState, useEffect} from "react";
import initialProduct from "../Cleanup/product";

const SearchProduct = () => {
	const [product, setproduct] = useState(initialProduct)
    const [searchItem, setsearchItem] = useState('');
    

	useEffect(() => {
		let id = setTimeout(() => {
            let filteredItem = initialProduct.filter(p => {
                if(p.toLowerCase().includes(searchItem.toLowerCase())) {
                    return true;
                }
                return false;
            })
            setproduct(filteredItem)
			// console.log("Running Effect", filteredItem);
		}, 1000);

		return () => {
			clearTimeout(id);
		};
	}, [searchItem]);

	let inputChangeHandler = (ev) => {
		setsearchItem(ev.target.value);
	};
	return (
		<>
			<input
				type="text"
				placeholder="Enter Text"
				onChange={inputChangeHandler}
			/>
			<button>Send</button>   

            {product.map((p, indx) => {
                return <div key={indx}>{p}</div>
            })}
		</>
	);
};

export default SearchProduct;
