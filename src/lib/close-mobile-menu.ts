import { MOBILE_MENU_TOGGLE_ID, SCREEN_1C_ID } from '@/constants/header-constants';

export function closeMobileMenu() {
  const menuToggle = document.getElementById(MOBILE_MENU_TOGGLE_ID) as HTMLInputElement;
  if (menuToggle) menuToggle.checked = false;
  const screen1c = document.getElementById(SCREEN_1C_ID) as HTMLInputElement;
  if (screen1c) screen1c.checked = false;
}
