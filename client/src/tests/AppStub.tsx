import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const AppStubWithRouter = ({ children }) => (
    <MemoryRouter>
        {children}
    </MemoryRouter>
);

export default AppStubWithRouter;
