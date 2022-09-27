import { Request, Response } from "express";

let js = {
    count: 0,
    created: []
}
export const updateCount = async (req: Request, res: Response) => {
    try {
        js = {
            count: req.body.count,
            created: [...js.created, req.body.created],
        }
        res.send({ status: '200', response: 'success', data: js })
    } catch (error) {
        res.send(error)
    }
}
export const getCount = async (req: Request, res: Response) => {
    try {
        res.send({ status: '200', response: 'success', data: js })
    } catch (error) {
        res.send(error)
    }
}
