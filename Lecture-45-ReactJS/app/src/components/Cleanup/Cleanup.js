import React, { useEffect, useState } from "react";

const Cleanup = () => {   

    const [product, setproduct] = useState("");

    useEffect(() => {
        let id = setTimeout(() => {
            console.log("Running Effect", product);
        }, 1000)

        return () => {
            clearTimeout(id)
        }
    }, [product])
    
    

    let inputChangeHandler = (ev) => {
        setproduct(ev.target.value)
    }

  return (
    <div>
        <input type="text" placeholder="Enter Text" onChange={inputChangeHandler} />
        <button>Send</button>
    </div>
  );
};

export default Cleanup;
