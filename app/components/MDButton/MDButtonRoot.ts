import Button from '@mui/material/Button';
import { styled, Theme } from '@mui/material/styles';
import { MDButtonProps } from './types';

export default styled(Button)<{ ownerState: MDButtonProps }>(
  ({ theme, ownerState }) => {
    const { palette, functions, borders, boxShadows } = theme as Theme;
    const { color, variant, size, circular, iconOnly, darkMode } = ownerState;
    const { customColors } = palette;

    const { white, text, transparent, gradients, grey } = customColors;
    const { boxShadow, linearGradient, pxToRem, rgba } = functions;
    const { borderRadius } = borders;
    const { colored } = boxShadows;

    const getBoxShadowValues = (colorKey: keyof typeof palette | string) => ({
      boxShadowValue: colored[colorKey]
        ? `${boxShadow([0, 3], [3, 0], palette[colorKey].main, 0.15, '')}, 
           ${boxShadow([0, 3], [1, -2], palette[colorKey].main, 0.2, '')}, 
           ${boxShadow([0, 1], [5, 0], palette[colorKey].main, 0.15, '')}`
        : 'none',
      hoveredBoxShadowValue: colored[colorKey]
        ? `${boxShadow([0, 14], [26, -12], palette[colorKey].main, 0.4, '')}, 
           ${boxShadow([0, 4], [23, 0], palette[colorKey].main, 0.15, '')}, 
           ${boxShadow([0, 8], [10, -5], palette[colorKey].main, 0.2, '')}`
        : 'none'
    });

    const getColorValues = () => {
      let colorValue = white.main;

      if (
        !darkMode &&
        (color === 'white' || color === 'light' || !palette[color])
      ) {
        colorValue = text.main;
      } else if (
        darkMode &&
        (color === 'white' || color === 'light' || !palette[color])
      ) {
        colorValue = grey[600];
      }

      return colorValue;
    };

    const containedStyles = () => {
      const backgroundValue = palette[color] ? palette[color].main : white.main;
      const focusedBackgroundValue = palette[color]
        ? palette[color].focus
        : white.focus;
      const { boxShadowValue, hoveredBoxShadowValue } =
        getBoxShadowValues(color);
      const colorValue = getColorValues();

      return {
        background: backgroundValue,
        color: colorValue,
        boxShadow: boxShadowValue,
        '&:hover': {
          backgroundColor: backgroundValue,
          boxShadow: hoveredBoxShadowValue
        },
        '&:focus:not(:hover)': {
          backgroundColor: focusedBackgroundValue,
          boxShadow: palette[color]
            ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5, '')
            : boxShadow([0, 0], [0, 3.2], white.main, 0.5, '')
        },
        '&:disabled': {
          backgroundColor: backgroundValue,
          color: white.main
        }
      };
    };

    const outliedStyles = () => {
      const backgroundValue =
        color === 'white' ? rgba(white.main, 0.1) : transparent.main;
      const colorValue = palette[color] ? palette[color].main : white.main;
      const boxShadowValue = palette[color]
        ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5, '')
        : boxShadow([0, 0], [0, 3.2], white.main, 0.5, '');
      const borderColorValue = palette[color]
        ? palette[color].main
        : rgba(white.main, 0.75);

      return {
        background: backgroundValue,
        color: colorValue,
        borderColor: borderColorValue,
        '&:hover': {
          background: transparent.main,
          borderColor: colorValue
        },
        '&:focus:not(:hover)': {
          background: transparent.main,
          boxShadow: boxShadowValue
        },
        '&:active:not(:hover)': {
          backgroundColor: colorValue,
          color: white.main,
          opacity: 0.85
        },
        '&:disabled': {
          color: colorValue,
          borderColor: colorValue
        }
      };
    };

    const gradientStyles = () => {
      const backgroundValue =
        color === 'white' || !gradients[color]
          ? white.main
          : linearGradient(gradients[color].main, gradients[color].state);
      const { boxShadowValue, hoveredBoxShadowValue } =
        getBoxShadowValues(color);

      return {
        background: backgroundValue,
        color: white.main,
        boxShadow: boxShadowValue,
        '&:hover': {
          boxShadow: hoveredBoxShadowValue
        },
        '&:focus:not(:hover)': {
          boxShadow: boxShadowValue
        },
        '&:disabled': {
          background: backgroundValue,
          color: white.main
        }
      };
    };

    const textStyles = () => {
      const colorValue = palette[color] ? palette[color].main : white.main;
      const focusedColorValue = palette[color]
        ? palette[color].focus
        : white.focus;

      return {
        color: colorValue,
        '&:hover': {
          color: focusedColorValue
        },
        '&:focus:not(:hover)': {
          color: focusedColorValue
        }
      };
    };

    const circularStyles = () => ({
      borderRadius: borderRadius.section
    });

    const iconOnlyStyles = () => {
      let sizeValue = pxToRem(38);
      if (size === 'small') sizeValue = pxToRem(25.4);
      else if (size === 'large') sizeValue = pxToRem(52);

      return {
        width: sizeValue,
        minWidth: sizeValue,
        height: sizeValue,
        minHeight: sizeValue,
        padding: pxToRem(11),
        '& .material-icons': {
          marginTop: 0
        },
        '&:hover, &:focus, &:active': {
          transform: 'none'
        }
      };
    };

    return {
      ...(variant === 'contained' && containedStyles()),
      ...(variant === 'outlined' && outliedStyles()),
      ...(variant === 'gradient' && gradientStyles()),
      ...(variant === 'text' && textStyles()),
      ...(circular && circularStyles()),
      ...(iconOnly && iconOnlyStyles())
    };
  }
);
