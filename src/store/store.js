import { configureStore } from "@reduxjs/toolkit";

import usersReducer from './slices/users/UserSlices';

export default configureStore({
    reducer: { users: usersReducer },
});