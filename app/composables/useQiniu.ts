export const getQiniuToken = async()=>{
    const {data,error} = await useFetch('https://ver-express.wubug.asia/qiniu/token')
    return data.value
}

export const uploadQiniu = async (file:File)=>{
    return 'url'
}