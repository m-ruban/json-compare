import { createContext } from 'react';

const AppContext = createContext();

export const AppConsumer = AppContext.Consumer;

export default AppContext;
