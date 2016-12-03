import {SHOW_SIDE_BAR_MENU, HIDE_SIDE_BAR_MENU} from '../constants/ActionTypes.react';

export function showSideBarMenu() {
  return {type: SHOW_SIDE_BAR_MENU, receivedAt: Date.now()};
}

export function hideSideBarMenu() {
  return {type: HIDE_SIDE_BAR_MENU, receivedAt: Date.now()};
}
