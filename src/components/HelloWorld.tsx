import {useHelloWorldQuery} from "../generated/graphql";



const HelloWorld = () => {
    const {data, error, loading} = useHelloWorldQuery()
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
            {data && <div>{data.helloWorld}</div>}
        </div>
    )
};

export default HelloWorld;