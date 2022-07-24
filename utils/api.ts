import { NextApiResponse } from "next";

// Successful responses
export function ok(res: NextApiResponse) {
    res.status(200).end()
}

export function okJSON(res: NextApiResponse, data: {}) {
    res.status(200).json(data)
}

export function created(res: NextApiResponse) {
    res.status(201).end()
}

// Error responses
export function badRequest(res: NextApiResponse) {
    res.status(400).end()
}

export function methodNotAllowed(res: NextApiResponse) {
    res.status(405).end()
}

export function internalServerError(res: NextApiResponse) {
    res.status(500).end()
}