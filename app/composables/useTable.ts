export const useTable = (tableName:string) => {
    return useSupabaseClient().from(tableName).select('*')
}
export const useTableOrder = ()=>{
    return useSupabaseClient().from('orders').select('*').order('order',{ascending:false})
}
export const useDataById = (tableName:string,id:string)=>{
    return useSupabaseClient().from(tableName).select('*').eq('id',id)
}