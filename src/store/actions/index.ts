import { TStatus } from "../../types";

// Action types
export const UPDATE_STATUS = 'UPDATE_STATUS';

// Action creators
export const updateStatus = (id: string, newStatus: TStatus) => ({ type: UPDATE_STATUS, payload: { id, newStatus } })