import { TCard } from "../../types";
import { UPDATE_STATUS } from "../actions";
import { cards } from "../../utils/cardsArray";

export interface Cards {
    value: TCard[],
}

const initialState = {
    value: cards,
}

const reducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case UPDATE_STATUS:
            return {
                ...state,
                value: state.value.map(card =>
                    card.id === action.payload.id
                        ? { ...card, status: action.payload.newStatus }
                        : card
                )
            };
        default:
            return state;
    }
}



export default reducer
