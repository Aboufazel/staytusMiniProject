import {BaseUrl} from "./apiConfig";

export const getPlanets = () => {
    return BaseUrl({
        method:'GET',
        url:'/planets/'
    })
}


export const getFilms = () => {
  return BaseUrl({
      method:'GET',
      url:'/films/'
  })
}

