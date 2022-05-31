import { configureStore } from "@reduxjs/toolkit";

import usersReducer from './slices/users/UserSlices';

const store = configureStore({
    reducer: { users: usersReducer },
});

export default store
