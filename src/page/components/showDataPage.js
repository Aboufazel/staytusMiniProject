import {useGetFilms, useGetPlanets} from "../../servicesQueryHooks/servicesQueryHook";
import LoadingComponents from "./loadingComponents";
import {exportsPlantsCardData} from "../../filterFunction";
import PlantsCard from "./plantsCard";

const ShowDataPage = () => {

    const {data ,
        isPending ,
        isError ,
        error} = useGetPlanets()

    const {data:filmsData  ,
        isPending:filmsIsPending ,
        isError:filmsIsError ,
        error:filmsError} = useGetFilms()

    if ((isError) || filmsIsError){
        console.log(filmsError)
        console.log(error)
    }

    return(
            <div className={'flex flex-col w-full gap-[20px]'}>
                <h2>plants show data card</h2>
                {
                    (isPending || filmsIsPending) ?
                        <LoadingComponents/>
                        :
                    exportsPlantsCardData(data?.data?.results)?.map((info , index) => (
                        <PlantsCard key={'plants-card' + index}
                                    index={index}
                                    filmData={filmsData?.data?.results}
                                    info={info}/>
                    ))
                }
            </div>

    )
}

export default ShowDataPage
