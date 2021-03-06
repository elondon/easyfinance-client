import {SHOW_SIDE_BAR_MENU, HIDE_SIDE_BAR_MENU} from '../constants/ActionTypes.react';

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
    case HIDE_SIDE_BAR_MENU:
      return assign({}, state, {
        sideBarShowing: false
      });
    default:
      return state;
  }
}
