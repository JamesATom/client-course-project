import axios from "axios";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "./Contexts";

export const Context = (props) => {
    const [userObject, setUserObject] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/user', { withCredentials: true })
            .then((res) => {
                if (res.data)
                    setUserObject(res.data);
            });
    }, []);

    return (
        <CurrentUserContext.Provider value={userObject}>{props.children}</CurrentUserContext.Provider>
    );
}


