import {auth} from "@clerk/nextjs";

const adminIds=[
    "user_2f1k2mNsRKsbyBxibjqnyH1jVa4"
]

export const isAdmin=()=>{
    const {userId}= auth();

    if(!userId){
        return false;
    }

    return adminIds.indexOf(userId)!==-1;
}