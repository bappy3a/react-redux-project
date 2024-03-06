import { INCREMENT, DECREMENT } from "./actionTypes";

const initialStart = {
    value: 0
}

const counterReduser = (start = initialStart, action) => {
    switch (action.typ) {
        case INCREMENT:
            return {
                ...start,
                value: start.value + 1,
            }

        case DECREMENT:
            return {
                ...start,
                value: start.value - 1,
            }

        default:
            return start;
    }
}

export default counterReduser;