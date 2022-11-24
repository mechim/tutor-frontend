import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks"
import {displayUser, userInfo} from "../../redux-toolkit/slices/userSlice/userSlice";
import { ProfileStudent } from "../ProfileStudent/ProfileStudent";
import { ProfileTutor } from "../ProfileTutor/ProfileTutor";

export function Cabinet(){

    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state) => ({...state.user}));
    if (sessionStorage.getItem('user-token')){}
    const token = sessionStorage.getItem('user-token')!;
    useEffect(() => {
        dispatch(userInfo(token));
    }, [])
    
    const{profile_type} = user;

    return(
        <div>
            {profile_type ===1 ? 
                <ProfileTutor/>
            : <ProfileStudent/>
            }
        </div>
    )
}