import {
    NextApiRequest,
    NextApiResponse
} from "next";

import data from "../../../../public/JSON/data.json";

const destinations = (
    request: NextApiRequest,
    response: NextApiResponse
) => {
    if (request.method === "GET") return response.status(200).json(data.destinations);

    return response.status(400).send("");
};

export default destinations;