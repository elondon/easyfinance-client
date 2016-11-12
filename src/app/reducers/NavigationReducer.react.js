import {SHOW_SIDE_BAR_MENU} from '../constants/ActionTypes';

const assign = Object.assign || require('object.assign');

const initialState = {
  sideBarShowing: false
}

export default function navigationReducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_SIDE_BAR_MENU:
      return assign({}, state, {
        sideBarShowing: true
      });
    default:
      return state;
  }
}
