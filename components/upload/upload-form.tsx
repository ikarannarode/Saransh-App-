"use client"
import React from 'react'
import UploadFormInput from './upload-form-input'
import { z } from 'zod'
import { useUploadThing } from '@/utils/uploadthing'
import { toast } from 'sonner'
const schema = z.object({
  file:z.instanceof(File,{message:'Please upload a PDF file'})
  .refine((file)=>file.size<=20*1024*1024,{message:'File size must be less than 20MB'})
  .refine((file)=>file.type.startsWith('application/pdf'),'Please upload a PDF file')
});
function UploadForm() {

  const {startUpload,routeConfig}=useUploadThing('pdfUploader',{onClientUploadComplete:(res)=>{
    console.log('Upload completed',res)
    toast.success('File uploaded successfully')
  },onUploadError:(error)=>{
    console.log('Upload error',error)
    toast.error('Failed to upload file')
  },
onUploadBegin:({file})=>{
  console.log('Upload started',file)
  toast.loading('Hang on, we are uploading your file')
}
})
  
 
  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
    const formData = new FormData(e.target as HTMLFormElement)
    const file = formData.get('file') as File

    const validatedFields = schema.safeParse({file})
    if(!validatedFields.success){
      console.log(validatedFields.error.flatten().fieldErrors.file?.[0]??'Invalid file')
      return
    }
   
const res=await startUpload([file])
if(!res){
    return;
}





  }
  return (
    <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
      <UploadFormInput onSubmit={handleSubmit}/>
    </div>
  )
}

export default UploadForm
