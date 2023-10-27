import {configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./ProfileReducer";

export default configureStore({
    reducer:{
        profile:ProfileReducer,
    }
})