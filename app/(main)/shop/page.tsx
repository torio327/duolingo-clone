import React from 'react';
import StickyWrapper from "@/components/ui/stickyWrapper";
import {getUserProgress, getUserSubscription} from "@/db/queries";
import {redirect} from "next/navigation";
import UserProgress from "@/components/ui/user-progress";
import FeedWrapper from "@/components/ui/feed-wrapper";
import Image from "next/image";
import Items from "@/app/(main)/shop/items";
import Promo from "@/components/ui/promo";
import Quests from "@/components/ui/quests";

const ShopPage = async () => {
    const userProgressData=getUserProgress();
    const userSubscriptionData=getUserSubscription();


    const [userProgress,userSubscription]=await Promise.all([userProgressData,userSubscriptionData]);
    if(!userProgress || !userProgress.activeCourse){
        redirect("/courses");
    }
    const isPro=!!userSubscription?.isActive;
    return (
        <div className={"flex flex-row-reverse gap-[48px] px-6"}>
           <StickyWrapper>
               <UserProgress
               activeCourse={userProgress.activeCourse}
               hearts={userProgress.hearts}
               points={userProgress.points}
               hasActiveSubscription={isPro}
               />
               {!isPro&&(
                   <Promo/>
               )}
               <Quests points={userProgress.points}/>
           </StickyWrapper>
            <FeedWrapper>
                <div className="w-fll flex flex-col items-center">
                    <Image src={"/shopping.svg"} alt={"shop"} height={90} width={90}/>
                    <h1 className={"text-center font-bold text-neutral-800 text-2xl my-6"}>
                        Shop
                    </h1>
                    <p className={"text-muted-foreground text-center text-lg mb-6"}>
                        Spend your points on cool stuff.
                    </p>
                    <Items hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={isPro}/>
                </div>
            </FeedWrapper>
        </div>
    );
};

export default ShopPage;