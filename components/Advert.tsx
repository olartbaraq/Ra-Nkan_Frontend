"use client";

import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ChevronDown, BellRing, ShoppingCart } from "../utils/icons"
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  }  from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

import { MY_NKANS } from "@/utils/textdata/my_nkan"
import { useEffect, useState } from "react";




const Advert = () => {

    const [isLoggedIn, setIsloggedIn] = useState<boolean | null>(null);


    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            let isLoggedInString = localStorage.getItem('isloggedIn');
            let myBool = isLoggedInString?.toLowerCase() === 'true';
            setIsloggedIn(myBool);
        }
    
    }, [isLoggedIn])



  return (
    <div className="border-b border-gray-300">
        <MaxWidthWrapper className="py-2">
            <div className="flex flex-row justify-between h-6 w-full">
                <div className="flex flex-row justify-normal space-x-3 items-center min-w-max">
                    {
                        isLoggedIn ? (<p>Welcome User</p>) : (
                            <div>Hi 
                                <span className="text-orange-400 text-sm underline mx-2">
                                    <Link href={'/login'}>Sign In</Link>
                                </span> 
                                or 
                                <span className="text-orange-400 text-sm underline mx-2">
                                    <Link href={'/register'}>Register</Link>
                                </span>
                            </div>
                        )
                    }
                    <h4 className="hidden md:block text-sm no-underline hover:underline"><Link href={'/login'}>Daily Deals</Link></h4>

                    <h4 className="hidden md:block text-sm no-underline hover:underline"><Link href={'/login'}>Help & Contact</Link></h4>
                </div>

                <div className="flex flex-row justify-center items-center space-x-3 min-w-max">
                
                    <h4 className=" text-sm hidden md:block no-underline hover:underline">
                        <Link href={'/login'}>Ship to</Link>
                    </h4>

                    <h4 className="hidden md:block text-sm no-underline hover:underline">
                        <Link href={'/login'}>Sell</Link>
                    </h4>
                    
                    <h4 className="text-sm no-underline hover:underline">
                        {/* <Link href={'/login'}> */}
                            <div className="hidden md:flex flex-row items-center justify-start">
                                <HoverCard>
                                    <HoverCardTrigger>
                                        Watchlist
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        The React Framework – created and maintained by @vercel.
                                    </HoverCardContent>
                                </HoverCard>
                                <ChevronDown className={cn("h-6 w-6 transition-all text-muted-foreground"
                                )}/>
                            </div>
                        {/* </Link> */}
                    </h4>

                    <h4 className="text-sm no-underline hover:underline">
                        {/* <Link href={'/login'}> */}
                            <div className="flex flex-row items-center justify-start">
                                <HoverCard>
                                    <HoverCardTrigger>
                                        My nKan's
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-[160px]">
                                        {
                                            MY_NKANS.map(my_nkan => (
                                                <div key={my_nkan.label}
                                                    
                                                >
                                                    <div className="space-y-3 no-underline hover:underline">
                                                        <Link href={my_nkan.href}>{my_nkan.label}</Link>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </HoverCardContent>
                                </HoverCard>
                                <ChevronDown className={cn("h-6 w-6 transition-all text-muted-foreground")}/>
                            </div>
                        {/* </Link> */}
                    </h4>

                    <BellRing />

                    <ShoppingCart />

                </div>

            </div>
        </MaxWidthWrapper>
    </div>
    
    
  )
}

export default Advert