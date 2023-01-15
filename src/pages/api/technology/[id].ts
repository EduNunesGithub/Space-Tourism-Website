import {
    NextApiRequest,
    NextApiResponse
} from "next";

import data from "../../../../public/JSON/data.json";

const technology = (
    request: NextApiRequest,
    response: NextApiResponse
) => {
    const id = request.query.id;
    const length = data.technology.length;

    if (
        id === undefined ||
        request.method !== "GET"
    ) return response.status(400).send("");

    const index = parseFloat(id[0]);

    if (
        index <= - 1 ||
        index >= length ||
        Number.isNaN(index)
    ) return response.status(404).send("");

    return response.status(200).json({
        data: data.technology[index],
        length: length
    });
};

export default technology;