import produce from 'immer';
import {
  TOGGLE_LEFT_DRAWER,
  TOGGLE_RIGHT_DRAWER,
  SET_RIGHT_NAV_TAB_VALUE,
  SET_LEFT_NAV_STEP_VALUE,
  SET_LOADING,
} from '../actions/main_actions/types';

export const INITIAL_STATE = {
  userInfo: null,
  userHistory: [],
  leftNavOpen: false,
  rightNavOpen: true,
  // leftNavContext renders conditional options based on current page
  leftNavStepValue: 0,
  rightNavTabValue: 0,
  loading: false,
};

const mainReducer = (state = INITIAL_STATE, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TOGGLE_LEFT_DRAWER: {
        draft.leftNavOpen = action.payload;
        break;
      }
      case TOGGLE_RIGHT_DRAWER:
        draft.rightNavOpen = action.payload;
        break;

      case SET_RIGHT_NAV_TAB_VALUE:
        draft.rightNavTabValue = action.payload;
        break;

      case SET_LEFT_NAV_STEP_VALUE:
        draft.leftNavStepValue = action.payload;
        break;

      case SET_LOADING:
        draft.loading = action.payload;
        break;

      default:
        break;
    }
  });

export default mainReducer;
