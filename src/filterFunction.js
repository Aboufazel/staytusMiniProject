export const exportsPlantsCardData = (plantsData)=>{
     return plantsData?.filter(filterData=>(filterData?.films?.length !== 0)
                               && (filterData?.residents?.length > 1))
}
