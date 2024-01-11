import {useAllCitiesQuery, useAllProvincesQuery} from "../../generated/graphql";
import * as yup from "yup";


export function GetProvinces () {
    const{data, loading, error} = useAllProvincesQuery({
        fetchPolicy: "network-only"
    })
    const provinces: string[] = []
    data?.allProvinces.map(province => {
        provinces.push(province.name)
    })
    return provinces
}

export function GetCities(){
    const{data, loading, error} = useAllCitiesQuery({
        fetchPolicy: "network-only"
    })
    const cities: string[]= []
    data?.allCities.map(city => {
        if (!cities.includes(city.name))
            cities.push(city.name)
    })
    return cities
}

export const ProvinceValidation = () =>{
    const provinces = GetProvinces()
    return yup.string()
        .test("Is_ONE_OF", "This is not a valid provence!!",
            provence => provence !== undefined && provinces.includes(provence))
}

export const CityValidation = () =>{
    const cities = GetCities()
    return yup.string()
        .test("Is_ONE_OF", "This is not a valid city!!",
            city => city!== undefined && cities.includes(city))
}