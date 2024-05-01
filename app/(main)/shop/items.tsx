"use client";
import React, {useTransition} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {refillHearts} from "@/actions/user-progress";
import {toast} from "sonner";
import {createStripeUrl} from "@/actions/user_subscription";
import {POINTS_TO_REFILL} from "@/constants";


type Props={
    hearts:number;
    points:number;
    hasActiveSubscription:boolean;
}
const Items = ({hearts,points,hasActiveSubscription}:Props) => {
    const [pending,startTransition]=useTransition();

    const onRefillHearts=()=>{
        if(pending||hearts===5||points<POINTS_TO_REFILL){
            return;
        }
        startTransition(()=>{
            refillHearts().catch(()=>toast.error("something went wrong"))
        });
    }

    const onUpgrade=()=>{
        startTransition(()=>{
            createStripeUrl().then((response)=>{
                if(response.data){
                    window.location.href=response.data;
                }
            }).catch(()=>toast.error("Something went wrong"));
        })
    }
    return (
        <ul className={"w-full"}>
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image src={"/heart.svg"} alt={"heart"} height={60} width={60}/>
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Refill hearts
                    </p>
                </div>
                <Button onClick={onRefillHearts} disabled={pending || hearts===5 || points<POINTS_TO_REFILL}>
                    {hearts===5?"full":(
                        <div className={"flex items-center"}>
                            <Image src={"/point.svg"} alt={"points"} height={20} width={20}/>
                            <p>{POINTS_TO_REFILL}</p>
                        </div>
                    )}
                </Button>
            </div>
            <div className="flex items-cener w-full p-4 pt-8 gapx-4 border-t-2">
                <Image src={"/unlimitedheart.jpg"} alt={"/unlimitedheart"}
                       height={60}
                       width={60}
                       />
                <div className={"flex-1"}>
                    <p className={"text-neutral-700 text-base lg:text-xl font-bold"}>
                        Unlimited hearts
                    </p>
                </div>
                <Button
                    onClick={onUpgrade}
                    disabled={pending}>
                    {hasActiveSubscription?"settings":"upgrade"}
                </Button>
            </div>
        </ul>
    );
};

export default Items;