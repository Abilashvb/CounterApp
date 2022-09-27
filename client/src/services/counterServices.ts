import axios from "axios";
import { ICouter } from "../schemas/couterSchema";

const rootUrl = "http://localhost:3000";

export const getCouterValue = (): Promise<ICouter> => {
    return new Promise((resolve, reject) => {
        axios.get(`${rootUrl}/getCount`)
            .then(response => resolve(response.data.data))
            .catch(err => reject(err));
    })
}

export const updateCounterValue = (counterobj): Promise<ICouter> => {
    return new Promise((resolve, reject) => {
        axios.post(`${rootUrl}/updateCount`, counterobj)
            .then(response => (resolve(response.data.data)))
            .catch(err => reject(err));
    })
}