import {
  forwardRef,
  createContext,
  useContext,
  useMemo,
  ReactNode,
  Ref
} from 'react';
import MDBox from '../MDBox';
import MDPaginationItemRoot from './MDPaginationItemRoot';
import { OwnerState } from '../../types/MDTypes';

interface PaginationContextProps {
  variant: 'gradient' | 'contained';
  color:
    | 'white'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark';
  size: 'small' | 'medium' | 'large';
}

const Context = createContext<PaginationContextProps | null>(null);

interface MDPaginationProps {
  item?: boolean;
  variant?: 'gradient' | 'contained';
  color?:
    | 'white'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark';
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  children: ReactNode;
}

const MDPagination = forwardRef<HTMLDivElement, MDPaginationProps>(
  (
    {
      item = false,
      variant = 'gradient',
      color = 'info',
      size = 'medium',
      active = false,
      children,
      ...rest
    },
    ref
  ) => {
    const context = useContext(Context);
    const paginationSize = context ? context.size : null;
    const value = useMemo(
      () => ({ variant, color, size }),
      [variant, color, size]
    );

    return (
      <Context.Provider value={value}>
        {item ? (
          <MDPaginationItemRoot
            {...rest}
            ref={ref as unknown as Ref<HTMLButtonElement>}
            variant={active ? context?.variant : 'outlined'}
            color={active ? context?.color : 'secondary'}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize } as OwnerState}
          >
            {children}
          </MDPaginationItemRoot>
        ) : (
          <MDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: 'none' }}
          >
            {children}
          </MDBox>
        )}
      </Context.Provider>
    );
  }
);
export default MDPagination;
