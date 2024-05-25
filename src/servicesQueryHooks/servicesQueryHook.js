import {getFilms, getPlanets} from "../apiServices/servicesApi";
import {useQuery} from "@tanstack/react-query";

export const useGetPlanets = ()=>{
    return useQuery({
        queryKey:['get-all-plants'],
        queryFn:()=>getPlanets(),
        gcTime:0,
        staleTime:0
    })
}

export const useGetFilms = ()=>{
    return useQuery({
        queryKey:['get-all-films'],
        queryFn:()=>getFilms(),
        gcTime:0,
        staleTime:0
    })
}


