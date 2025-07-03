


type PriceType = {
    id: string;
    name: string;
    price: number;
    description: string;
    items: string[];
    paymentLink: string;
    priceId: string;
}

const plans=[
    {
        id:'basic',
        name:"Basic",
        price:9,
        items:["5 PDF summaries", "Standard processing time", "Access to new features","Email support"],
        description:"For individuals and small teams",
        paymentLink:"",
        priceId:""
    },
{
    id:'pro',
    price:19,
    name:"Pro",
    description:"For professionals and teams",
    items:["Unlimited PDF summaries", "Priority processing", "Access to new features","24/7 priority support","Markdown export"],
    paymentLink:"",
    priceId:""
}
]


const PricingCard=({name,price,description,items,id,paymentLink}:PriceType)=>{
    return <div className='relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300'> 
<div className={cn('relative flex h-full flex-col gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl',id==='pro'&&'border-rose-500 gap-5 border-2')}>
        <div className="flex justify-between items-center gap-4">
<div>
            <p className='text-lg lg:text-xl font-bold capitalize'>{name}</p>
        <p className='text-base-content/80 mt-2'>{description}</p>
    </div>

    </div>
    <div className='flex gap-2'>
        <p className='text-5xl tracking-tight font-extrabold '>${price}</p>
        <div>
            <p className='text-xs uppercase font-semibold'>USD</p>
            <div className="text-xs">/month</div>
        </div>
    </div>

    <div className='space-y-2.5 leading-relaxed text-base flex-1'>
        {
            items.map((item, index) => (

<li key={index} className='flex items-center gap-2'>

    <CheckIcon size={18}/>
    <span>{item}</span>
</li>

            ))
        }
    </div>
    <div className='space-y-2 flex justify-center w-full'>
        <Link href={paymentLink} className={cn('w-full rounded-full gap-2 flex items-center justify-center bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 py-2 text-white border-1 font-bold',id==='pro'?"border-rose-900":"border-rose-100 from-rose-400 to-rose-500")}>Buy Now <ArrowRight size={18}/></Link>
    </div>
</div>
    </div>
}


import { cn } from '@/lib/utils';
import { ArrowRight, CheckIcon} from 'lucide-react'
import Link from 'next/link';
import React from 'react'

function PricingSection() {
  return (
<section className='relative overflow-hidden' id="pricing">
    <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
      <div className='flex items-center justify-center w-full pb-12'>
        <h2 className='uppercase font-bold text-xl mb-8 text-rose-500 '>Pricing</h2>

      </div>
      <div className="relative flex justify-center flex-col items-center lg:flex-row lg:items-stretch gap-8">
        {
            plans.map((plan)=>(
                <PricingCard key={plan.id} {...plan}/>
            ))
        }
        
      </div>
    </div>
</section>
  )
}

export default PricingSection
