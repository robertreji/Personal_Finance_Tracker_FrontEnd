
import {api} from "../axois"

export const userServices = {

    getUserDetails(){
        return api.get("/v1/user/getuserdetails",{withCredentials:true})
    }

}