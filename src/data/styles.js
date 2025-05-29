// Desktop and Mobile Hero Images
import {
  darkDesktopHeroImage,
  darkMobileHeroImage,
  lightDesktopHeroImage,
  lightMobileHeroImage,
} from './images';
// Icons
import { moonIcon, sunIcon } from './icons';

const stylesToggle = (theme) => {
  const style = {
    heroImage: theme === 'light' ? lightDesktopHeroImage : darkDesktopHeroImage,
    mobileHeroImage:
      theme === 'light' ? lightMobileHeroImage : darkMobileHeroImage,
    themeIcon: theme === 'light' ? moonIcon : sunIcon,
    todoListBgColor: theme === 'light' ? 'bg-white-color' : 'bg-todos-bg-color',
    borderTodosColor:
      theme === 'light'
        ? 'border-todos-border-color'
        : 'border-dark-todos-border-color',
    dragAndDropColor:
      theme === 'light'
        ? 'text-drag-and-drop-color'
        : 'text-drag-and-drop-color',
    inputActionColor:
      theme === 'light'
        ? 'text-drag-and-drop-color'
        : 'text-drag-and-drop-color',
    textColor:
      theme === 'light' ? 'text-main-text-color' : 'text-dark-main-text-color',
    textCompletedTodo:
      theme === 'light'
        ? 'text-completed-todo-color'
        : 'text-dark-completed-todo-color',
    splashScreenBgColor:
      theme === 'light' ? 'bg-light-main-color' : 'bg-dark-main-color',
  };

  return {
    ...style,
  };
};

export default stylesToggle;
