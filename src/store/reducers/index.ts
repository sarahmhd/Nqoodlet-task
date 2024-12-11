import { TCard } from "../../types";
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
    console.log(action)
    switch (action.type) {
        case 'UPDATE_STATUS' :
            return {
                ...state,
                value: state.value.map(card =>
                    card.id === action.payload.id
                        ? { ...card, status: action.payload.newStatus }
                        : card
                )
            };
        case 'FILTER_CARDS':
            return {
                ...state,
                value: state.value.filter(card =>
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
