import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
    
const f = createUploadthing();
export const ourFileRouter={
  pdfUploader:f({pdf:{maxFileSize:'32MB'}}).middleware(async({req})=>{
// get user information
const user=await currentUser();

if(!user){
  throw new UploadThingError('Unauthorized User')
}

return {userId:user.id}

  }).onUploadComplete(async({metadata,file})=>{
    console.log('Upload completed for user id',metadata.userId);
    console.log('file url',file.url)
    return {userId:metadata.userId,file};
  })
} satisfies FileRouter



export type OurFileRouter= typeof ourFileRouter;