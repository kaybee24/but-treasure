import React, { useEffect, createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:8080/')
            .then((res) => {
                return res.json();
            })
            .then((finalRes) => {
                setProducts(finalRes);
            })
            .catch((error) => {
                console.error(error)
            });
    }, []);

    useEffect(() => {
        console.log({ products })
    }, [products])

    return (
        <AppContextProvider
            value={{
                products,
                setProducts
            }}
        >
            {props.children}
        </AppContextProvider>
    );
};

export default AppContext;