import {createSlice} from "@reduxjs/toolkit";

const ProfileReducer =  createSlice({
    name: "profile",
    initialState: {
        profileData: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
          },
    },
    reducers: {
        captureChanges: (state, action) => {
            return {...action.payload};
        }
    }
});

export const {captureChanges} = ProfileReducer.actions;
export default ProfileReducer.reducer;