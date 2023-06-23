/**
 * Show the specified HTML element by removing the 'hidden' class.
 * @param el - The HTML element to show.
 */
const showEl = (el: HTMLElement): void => {
  el.classList.remove('hidden');
};

/**
 * Hide the specified HTML element by adding the 'hidden' class.
 * @param el - The HTML element to hide.
 */
const hiddeEl = (el: HTMLElement): void => {
  el.classList.add('hidden');
};

/**
 * Toggle the visibility of an HTML element by adding or removing the 'hidden' class.
 * @param el - The HTML element to toggle.
 */
import {ref} from 'vue'
export const useToggleMenu = (el: HTMLElement): void => {
  // This composable checks if the element is hidden and toggles its visibility.
  if (el) {
    const elIsHidden = el.classList.contains('hidden');
    elIsHidden ? showEl(el) : hiddeEl(el);
  } else {
    const errMsg = "The useToggleMenu composable requires an HTML element to be passed as a parameter (preferably an HTML ref).";
    console.log(errMsg);
  }
};
