import {useGetFilms, useGetPlanets} from "../../servicesQueryHooks/servicesQueryHook";
import {exportsPlantsCardData} from "../../filterFunction";

const ShowDataPage = () => {

    const {data ,
        isPending ,
        isError ,
        error} = useGetPlanets()

    const {data:filmsData  ,
        isPending:filmIsPending ,
        isError:filmIsError ,
        error:filmError} = useGetFilms()

    if ((isError) || filmIsError){
        console.log(filmError)
        console.log(error)
    }

    console.log(data.data.results , 'plants data')
    console.log(filmsData.data.results , 'film data')

    return(
        <div className={'flex flex-row items-center bg-[#27272A] h-[90px] w-full rounded-[12px]'}>

        </div>
    )
}

export default ShowDataPage
