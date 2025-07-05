"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
function UploadFormInput({onSubmit}: UploadFormInputProps) {
  return (
  
   <form className='flex flex-col gap-6' onSubmit={onSubmit}>
    <div className='flex justify-end items-center gap-1.5'>
    <Input type="file" id="file" accept='application/pdf' required name='file' className='cursor-pointer' />
    <Button type='submit' className='font-bold text-white '>Upload your PDF</Button>
    </div>
    </form>
  

  )
}

export default UploadFormInput
