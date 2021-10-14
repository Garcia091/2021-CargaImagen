export const fileUpload = async(file) =>{

    const cloudURL = 'https://api.cloudinary.com/v1_1/db9wh5uvt/image/upload'
    const formData = new FormData();
    formData.append('upload_preset','aprendices') 
    formData.append('file',file) 


    try {
        const resp = await fetch(cloudURL,{
            method:'POST',
            body: formData
        });

        if(resp.ok){
            const cloudRes= await resp.json();
            console.log('data', cloudRes);
            return cloudRes.secure_url;
        }
    } catch (error) {
        throw  error
    }
} 