import {SHOW_SIDE_BAR_MENU} from '../constants/ActionTypes';

export function showSideBarMenu() {
  return {type: SHOW_SIDE_BAR_MENU, receivedAt: Date.now()}
}
