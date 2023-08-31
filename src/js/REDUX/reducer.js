import * as actions from "./actions";
import initialState from "./initialState";
import { sortFigures } from "../functions";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SUBMIT_USER:
            return {
                ...state,
                isHiddenInputForm: true,
                isHiddenAddUserButton: false,
                isHiddenAddedUserMsg: false,
            };

        case actions.SHOW_ADD_USER_FORM:
            return state.isHiddenInputForm
                ? {
                      ...state,
                      isHiddenAddedUserMsg: true,
                      isHiddenAddUserButton: true,
                      isHiddenInputForm: false,
                  }
                : { ...state };

        case actions.SORT:
            const { isSortDescending, columnSortBy } = action.payload;
            const sorted_items = sortFigures([...state.items], isSortDescending, columnSortBy);
            return {
                ...state,
                items: sorted_items,
                isHiddenAddedUserMsg: true,
                isSortDescending,
                columnSortBy,
            };

        case actions.SHOW_ERROR:
            return {
                ...state,
                isError: true,
                errorMessage: action.payload ? action.payload : "Nieokreslony błąd",
            };
        case actions.HIDE_ERROR:
            return {
                ...state,
                isError: false,
                errorMessage: null,
            };
        case actions.SHOW_WARNING:
            return {
                ...state,
                isAlert: true,
                errorMessage: action.payload,
            };
        case actions.HIDE_WARNING:
            return {
                ...state,
                isAlert: false,
                errorMessage: null,
            };
        case actions.SHOW_LOADER:
            return {
                ...state,
                isLoaderVisible: true,
            };
        case actions.HIDE_LOADER:
            return {
                ...state,
                isLoaderVisible: false,
            };

        case actions.SHOW_MESSAGE:
            return {
                ...state,
                isMessage: true,
                message: action.payload,
            };
        case actions.HIDE_MESSAGE:
            return {
                ...state,
                isMessage: false,
                message: null,
            };
        case actions.TOGGLE_SUBMIT:
            const toggled_submit = !state.submitDisabled;
            return {
                ...state,
                submitDisabled: toggled_submit,
            };

        case actions.GET_DATA_DONE:
            const { limit } = state;

            const isNotLimitReached = action.payload ? action.payload.length < limit : true;
            return {
                ...state,
                isLoading: false,
                items: action.payload,
                isNotLimitReached: isNotLimitReached,
            };

        case actions.HIDE_ADDED_USER_MESSAGE:
            return {
                ...state,
                isHiddenAddedUserMsg: true,
            };

        case actions.LOGIN:
            return {
                ...state,
                user: action.payload,
            };

        case actions.LOGOUT:
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
};

export default reducer;
