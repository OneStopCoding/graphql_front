import { useAllUsersQuery, User} from "../../generated/graphql";
import DisplayUsers from "./DisplayUsers";

const AllUsers = () => {
    const {data, error, loading} = useAllUsersQuery()
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
            {data && <DisplayUsers users={data.allUsers as User[]} />}
        </div>
    )
}

export default AllUsers