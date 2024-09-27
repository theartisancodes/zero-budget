import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
  Dispatch
} from 'react';
import { COLORS } from '../types/MDTypes';

interface State {
  miniSidenav: boolean;
  transparentSidenav: boolean;
  whiteSidenav: boolean;
  sidenavColor: COLORS;
  transparentNavbar: boolean;
  fixedNavbar: boolean;
  openConfigurator: boolean;
  direction: 'ltr' | 'rtl';
  layout: string;
  darkMode: boolean;
}

type Action =
  | { type: 'MINI_SIDENAV'; value: boolean }
  | { type: 'TRANSPARENT_SIDENAV'; value: boolean }
  | { type: 'WHITE_SIDENAV'; value: boolean }
  | { type: 'SIDENAV_COLOR'; value: COLORS }
  | { type: 'TRANSPARENT_NAVBAR'; value: boolean }
  | { type: 'FIXED_NAVBAR'; value: boolean }
  | { type: 'OPEN_CONFIGURATOR'; value: boolean }
  | { type: 'DIRECTION'; value: 'ltr' | 'rtl' }
  | { type: 'LAYOUT'; value: string }
  | { type: 'DARKMODE'; value: boolean };

type MaterialUIContextType = [State, Dispatch<Action>];

const MaterialUIContext = createContext<MaterialUIContextType | undefined>(
  undefined
);
MaterialUIContext.displayName = 'MaterialUIContext';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'MINI_SIDENAV':
      return { ...state, miniSidenav: action.value };
    case 'TRANSPARENT_SIDENAV':
      return { ...state, transparentSidenav: action.value };
    case 'WHITE_SIDENAV':
      return { ...state, whiteSidenav: action.value };
    case 'SIDENAV_COLOR':
      return { ...state, sidenavColor: action.value };
    case 'TRANSPARENT_NAVBAR':
      return { ...state, transparentNavbar: action.value };
    case 'FIXED_NAVBAR':
      return { ...state, fixedNavbar: action.value };
    case 'OPEN_CONFIGURATOR':
      return { ...state, openConfigurator: action.value };
    case 'DIRECTION':
      return { ...state, direction: action.value };
    case 'LAYOUT':
      return { ...state, layout: action.value };
    case 'DARKMODE':
      return { ...state, darkMode: action.value };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

interface MaterialUIControllerProviderProps {
  children: ReactNode;
}

const MaterialUIControllerProvider: React.FC<
  MaterialUIControllerProviderProps
> = ({ children }) => {
  const initialState: State = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: 'info',
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: 'ltr',
    layout: 'dashboard',
    darkMode: false
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo<MaterialUIContextType>(
    () => [controller, dispatch],
    [controller, dispatch]
  );

  return (
    <MaterialUIContext.Provider value={value}>
      {children}
    </MaterialUIContext.Provider>
  );
};

function useMaterialUIController() {
  const context = useContext(MaterialUIContext);
  if (!context) {
    throw new Error(
      'useMaterialUIController must be used within MaterialUIControllerProvider.'
    );
  }
  return context;
}

const setMiniSidenav = (dispatch: Dispatch<Action>, value: boolean) =>
  dispatch({ type: 'MINI_SIDENAV', value });

const setTransparentSidenav = (dispatch: Dispatch<Action>, value: boolean) =>
  dispatch({ type: 'TRANSPARENT_SIDENAV', value });

const setWhiteSidenav = (dispatch: Dispatch<Action>, value: boolean) =>
  dispatch({ type: 'WHITE_SIDENAV', value });

const setSidenavColor = (dispatch: Dispatch<Action>, value: COLORS) =>
  dispatch({ type: 'SIDENAV_COLOR', value });

const setTransparentNavbar = (dispatch: Dispatch<Action>, value: boolean) =>
  dispatch({ type: 'TRANSPARENT_NAVBAR', value });

const setFixedNavbar = (dispatch: Dispatch<Action>, value: boolean) =>
  dispatch({ type: 'FIXED_NAVBAR', value });

const setOpenConfigurator = (dispatch: Dispatch<Action>, value: boolean) =>
  dispatch({ type: 'OPEN_CONFIGURATOR', value });

const setDirection = (dispatch: Dispatch<Action>, value: 'ltr' | 'rtl') =>
  dispatch({ type: 'DIRECTION', value });

const setLayout = (dispatch: Dispatch<Action>, value: string) =>
  dispatch({ type: 'LAYOUT', value });

const setDarkMode = (dispatch: Dispatch<Action>, value: boolean) =>
  dispatch({ type: 'DARKMODE', value });

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode
};
