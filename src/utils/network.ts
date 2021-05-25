import axios from "axios";

export const makeGet = async (url: string) => {
    return axios({
        method: "get",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        withCredentials: true,
        url: url
    });
};