import { TStatus } from "../../types";

// Action types
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const FILTER_CARDS = 'FILTER_CARDS';

// Action creators
export const updateStatus = (id: string, newStatus: TStatus) => {
    return {
        type: UPDATE_STATUS, payload: { id, newStatus }
    }
};

export const filterCards = (status: TStatus) => {
    return {
        type: FILTER_CARDS, payload: { status }
    }
};