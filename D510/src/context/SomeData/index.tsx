import * as React from "react";

export type SomeData = {
    fieldA: Array<string>,
    fieldB: boolean,
    fieldC: Date
};

export const initialSomeData = {
    fieldA: ['박예빈', '바부'],
    fieldB: false,
    fieldC: new Date()
};

const SomeDataContext = React.createContext<SomeData>(initialSomeData);

export default SomeDataContext;
