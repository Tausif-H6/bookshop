import auth from "./auth/authSlice";

import { configureStore } from "@reduxjs/toolkit";;

export default configureStore ({
reducer:{
    auth
}
})