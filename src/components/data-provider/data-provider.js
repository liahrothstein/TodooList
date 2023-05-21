import App from "../../App";
import { useGetTodosQuery } from "../../store"

export const DataProvider = () => {

    const { data } = useGetTodosQuery();

    if (data !== undefined) {
        return <App data={data} />
    }
}