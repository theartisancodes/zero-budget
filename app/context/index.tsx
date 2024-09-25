import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode
} from 'react';

interface State {
  miniSidenav: boolean;
  transparentSidenav: boolean;
  whiteSidenav: boolean;
  sidenavColor: string;
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
  | { type: 'SIDENAV_COLOR'; value: string }
  | { type: 'TRANSPARENT_NAVBAR'; value: boolean }
  | { type: 'FIXED_NAVBAR'; value: boolean }
  | { type: 'OPEN_CONFIGURATOR'; value: boolean }
  | { type: 'DIRECTION'; value: 'ltr' | 'rtl' }
  | { type: 'LAYOUT'; value: string }
  | { type: 'DARKMODE'; value: boolean };

type MaterialUIContextType = [State, React.Dispatch<Action>];

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

function MaterialUIControllerProvider({
  children
}: MaterialUIControllerProviderProps) {
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
}

function useMaterialUIController() {
  const context = useContext(MaterialUIContext);
  if (!context) {
    throw new Error(
      'useMaterialUIController must be used within MaterialUIControllerProvider.'
    );
  }
  return context;
}

export { MaterialUIControllerProvider, useMaterialUIController };
