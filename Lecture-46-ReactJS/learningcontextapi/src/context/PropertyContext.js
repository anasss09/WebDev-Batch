import { createContext } from "react";



const propertyContext = createContext({
    property:'',
    area:''
});

const propertydata = {
    property: "MUMBAI",
    area: "10 square Feet",
};

const PropertyContext = ({children}) => {
    return (
        <propertyContext.Provider value={propertydata}>
            {children}
        </propertyContext.Provider>
    );
}

export default PropertyContext;
export { propertyContext }