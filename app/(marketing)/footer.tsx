import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={"hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2"}>
           <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
               <Button size={"lg"} variant={"ghost"} className={"w-full"}>
                   <Image src={"/en.flag.jpg"} alt={"english"} height={32} width={40} className={"mr-4 rounded-md"}/>
                   English
               </Button>
               <Button size={"lg"} variant={"ghost"} className={"w-full"}>
                   <Image src={"/spain.jpg"} alt={"spanish"} height={32} width={40} className={"mr-4 rounded-md"}/>
                   Spanish
               </Button>
               <Button size={"lg"} variant={"ghost"} className={"w-full"}>
                   <Image src={"/france.flag.jpg"} alt={"france"} height={32} width={40} className={"mr-4 rounded-md"}/>
                   French
               </Button>
               <Button size={"lg"} variant={"ghost"} className={"w-full"}>
                   <Image src={"/japan.flag.jpg"} alt={"japanese"} height={32} width={40} className={"mr-4 rounded-md"}/>
                   Japanese
               </Button>
           </div>
        </footer>
    );
};

export default Footer;