import React from 'react'
import { Button } from '../ui/button'
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

function HeroSection() {
  return (
    <section className='flex mx-auto relative flex-col z-0 justify-center items-center py-16 sm:py-20 lg:pb-20 transition-all animate-in lg:px-12 max-w-7xl'>
<div className="flex">
      <div className='p-[1px] relative overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x'>
<Badge variant='secondary' className='relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200'>
    <Sparkles className='text-rose-600 h-8 w-8 mr-2 animate-pulse'/>
<p className='text-base text-rose-600'>Powered by AI</p>
</Badge>
      </div>
</div>
    <h1 className='text-center py-6 font-bold'>TransForm PDFs into{' '}<span className='relative inline-block'> <span className='relative z-10 px-2'>concise</span> <span className='absolute inset-0 bg-rose-200/50 rounded-lg transform -skew-y-1 -rotate-2'aria-hidden='true'></span></span>{' '} summaries</h1>
    <h2 className='text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600'>Get a beautiful summary reel of the document in seconds.</h2>
<div>
        <Button variant={'link'} className='text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 lg:px-12 sm:px-10 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-600 hover:from-rose-500 hover:to-slate-900 font-bold hover:no-underline shadow-lg'>
            <Link href="/#pricing" className='flex gap-2 items-center'>
            <span> Try Saransh</span>
            <ArrowRight className='animate-pulse'/>
            </Link>
        </Button>
</div>
    </section>
  )
}

export default HeroSection
