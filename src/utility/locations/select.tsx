import React from "react";
import {JSX} from "react/jsx-runtime";
import {useCitiesPerProvinceQuery, useProvincesPerCountryQuery} from "../../generated/graphql";

export const CountrySelect = (country: string | number | readonly string[] | undefined, handleChange: React.ChangeEventHandler<HTMLSelectElement> | undefined, handleBlur: React.FocusEventHandler<HTMLSelectElement> | undefined) => {
    return (
        <div>
            <label htmlFor="country" style={{display: "block"}}>
                Country
            </label>
            <select
                name="country"
                value={country}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{display: "block"}}
            >
                <option value="" label="Select your country">
                    Select a color{" "}
                </option>
                <option value="België" label="België">
                    {" "}
                    België
                </option>
                <option value="Nederland" label="Nederland">
                    Nederland
                </option>

                <option value="Luxembourg" label="Luxembourg">
                    Luxembourg
                </option>
            </select>
        </div>
    )
}

export const ProvinceSelect = (provence: string | string[], country: string , handleChange: React.ChangeEventHandler<HTMLSelectElement> | undefined, handleBlur: React.FocusEventHandler<HTMLSelectElement> | undefined) => {
    const {data, loading, error} = useProvincesPerCountryQuery({
        fetchPolicy: "network-only",
        variables: {
            country: country
        }
    })
    const provinceOptions: JSX.Element[] = [ <option value="" label="Select your provence">
        Select a provence{" "}
    </option>]
    data && data.provincesPerCountry.map(location => {
            provinceOptions.push(
                <option value={location.name} label={location.name}>
                    {" "}
                    {location.name}
                </option>
            )
    })

    const select = (
        <div>
            <label htmlFor="provence" style={{display: "block"}}>
                Province
            </label>
            <select
                name="provence"
                value={provence}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{display: "block"}}
            >
                {provinceOptions}
            </select>
        </div>)

    return (select)
}

export const CitiesSelect = (provence: string, country: string , city: string,  handleChange: React.ChangeEventHandler<HTMLSelectElement> | undefined, handleBlur: React.FocusEventHandler<HTMLSelectElement> | undefined) => {
    const {data, loading, error} = useCitiesPerProvinceQuery({
        fetchPolicy: "network-only",
        variables: {
            province: provence
        }
    })
    const cityOptions: JSX.Element[] = [ <option value="" label="Select your city">
        Select a provence{" "}
    </option>]
    data && data.citiesPerProvince.map(location => {
        cityOptions.push(
            <option value={location.name} label={location.name}>
                {" "}
                {location.name}
            </option>
        )
    })

    const select = (
        <div>
            <label htmlFor="city" style={{display: "block"}}>
                City
            </label>
            <select
                name="city"
                value={city}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{display: "block"}}
            >
                {cityOptions}
            </select>
        </div>)

    return (select)
}
