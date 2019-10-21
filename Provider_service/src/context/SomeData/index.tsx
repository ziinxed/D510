import * as React from "react";

export type SomeData = {
    price: string,

};

export const initialSomeData = {
    price: 'loading'

};

const SomeDataContext = React.createContext<SomeData>(initialSomeData);

export default SomeDataContext;
