import { Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

import React from 'react'

function UploadHeader() {
  return (
     <div className="flex flex-col items-center justify-center gap-6 text-center">
               <div className='relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-graidient-to-x group'>
                 <Badge variant={'secondary'} className='relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors'>
                    <Sparkles className='h-6 w-6 mr-2 text-rose-600 animate-pulse'/>
                    <p className='text-base'>AI Powered Content Creation</p>
                </Badge>
               </div>
<div className='font-bold tracking-tight text-3xl text-gray-900 sm:text-4xl'>
    Start Uploading{' '}<span className='relative inline-block'> <span className='relative z-10 px-2'>Your PDF's</span> <span className='absolute inset-0 bg-rose-200/50 rounded-lg transform -skew-y-1 -rotate-2'aria-hidden='true'></span></span>{' '}

</div>
<div className='mt-2 text-lg text-gray-600 leading-8 max-w-2xl text-center'><p>Upload your PDF and let our AI do the magic! ✨</p></div>
            </div>
  )
}

export default UploadHeader
