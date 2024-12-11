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
            console.log('test')
            const test = {
                ...state,
                cards: state.value.map(card =>
                    card.id === action.payload.id
                        ? { ...card, status: action.payload.newStatus }
                        : card
                )
            }
            console.log(test)
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
