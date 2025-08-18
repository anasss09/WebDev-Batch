import React, { useContext } from "react";
import { moneyContext } from "../context/MoneyContext";
import { propertyContext } from "../context/PropertyContext";


const Child = () => {
  const data = useContext(moneyContext);
  const propertydata = useContext(propertyContext)

  return (
    <div>
      <h1>Child</h1>
      <div>{data.price}</div>
      <img src={data.img} />
      {<h4>Property Data</h4>}
      <div>{propertydata.property}</div>
      <div>{propertydata.area}</div>
      {/* <myContext.Consumer>
        {(data) => {
            return <>
            <h1>Child</h1>
            <div>{data.price}</div>
            <img src={data.img} />
            <h4>Property Data</h4>
            <propertyContext.Consumer>
            {(propertydata) => {
              return <>
              <div>{propertydata.property}</div>
              <div>{propertydata.area}</div>
              </>
                    }}
                    </propertyContext.Consumer>
                    </>
                    }}
    </myContext.Consumer> */}
    </div>
  );
};

export default Child;