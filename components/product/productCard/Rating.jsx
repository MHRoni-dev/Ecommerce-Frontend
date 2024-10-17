'use client';

import { StarHalf } from "lucide-react";
import { Star } from "lucide-react";

export default function Rating ({rate = 0}){
    const fullStar = Math.floor(rate)
    const halfStar = rate % 1 !== 0
    const emptyStar = 5 - fullStar - (halfStar ? 1 : 0)
    return(
        <div className="flex items-center">
            {
                [...Array(fullStar)].map( (_, i) => <img  key={i} src='/fullstar.png' className="w-4 h-4" />)
            }
            {
                halfStar && <img src="/halfstar.png" className="w-4 h-4" />
            }
            {
                [...Array(emptyStar)].map((_,i) => <img key={i} src='/emptystar.png' className="w-4 h-4"/>)
            }
        </div>
    )
}