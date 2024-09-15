import { createTheme } from "@mui/material";

const getBaseTheme = (mode) => ({
  ...(mode === 'light' ? {
    background: {
      paper: '#F9F4ED',
      default: '#FBE1D9'
    },
    primary1: '#2A2A2A',
    secondary1: '#AF695C',
    neutral1: '#EAEAEA'


  } : {
    background: {
      paper: '#2A2A2A',
      default: '#61524F'
    },
    primary1: '#FFFFFF',
    secondary1: '#AF695C',
    neutral1: '#EAEAEA'
  })
})

export const getTheme = (mode) => {
  const baseTheme = getBaseTheme(mode);

  return createTheme({
    palette: {
      ...baseTheme
    },
    typography: {
      fontFamily: 'Montserrat',
      h1: {
        fontSize: '3.75rem',
        fontWeight: 500,
        lineHeight: '4.57rem',
      },
      h2: {
        fontSize: '3rem',
        fontWeight: 500,
        lineHeight: '3.65rem'
      },
      h3: {
        fontSize: '2.25rem',
        fontWeight: 500,
        lineHeight: '2.74rem'
      },
      h4: {
        fontSize: '1.875rem',
        fontWeight: 500,
        lineHeight: '2.28rem'
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: '1.83rem'
      },
      h6: {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: '1.83rem'
      },
      body1: {
        fontSize: '1.125rem',
        fontWeight: 500,
        lineHeight: '1.37rem'
      },
      body2: {
        fontSize: '0.9375rem',
        fontWeight: 500,
        lineHeight: '1.143rem'
      },
      body3: {
        fontSize: '0.9375rem',
        fontWeight: 400,
        lineHeight: '1.143rem'
      },
      body4: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: '1.07rem'
      },
      body5: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.07rem'
      },
      subText: {
        fontSize: '0.75rem',
        fontWeight: 500,
        lineHeight: '0.91rem'
      }
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true
        }
      },
      MuiLink: {
        styleOverrides: {
          root: ({active}) => ({
            textTransform: 'none',
            textDecoration: 'none',
            color: active ? baseTheme.secondary1 : baseTheme.primary1,
          })
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            '.MuiButton-startIcon': {
              margin: 0
            },
            '.MuiButton-endIcon': {
              margin: 0
            }
          }
        },
        variants: [
          {
            props: { variant: 'primary'},
            style: ({ type, active }) => ({
              gap: '10px',
              height: '35px',
              padding: '8px 16px',
              borderRadius: '30px',
              minWidth: 'content-fit',
              border: type === 'outlined' ? `1px solid ${ active ? baseTheme.secondary1 : baseTheme.primary1}` : 'none',
              backgroundColor: 'transparent',
              color: type === 'solid' ? active ? baseTheme.secondary1 : '#FFFFFF' : active ? baseTheme.secondary1 : baseTheme.primary1,
              textTransform: 'none',
              fontSize: '1.125rem',
              fontWeight: 600,
              lineHeight: '1.143rem',
              svg: {
                path: {
                  stroke: type === 'solid' ? '#FFFFFF' : baseTheme.primary1
                }
              },
              ':hover': {
                backgroundColor: 'transparent',
                color: baseTheme.secondary1,
                border: type === 'outlined' ? `1px solid ${baseTheme.secondary1}` : 'none',
                svg: {
                  path: {
                    stroke: type === 'solid' ? '#FFFFFF' : baseTheme.primary1
                  }
                }
              },
              // ':disabled': {
              //   backgroundColor: (type === 'outlined' || type === 'text') ? 'inherit' : baseTheme.brandGreen4,
              //   color: (type === 'outlined' || type === 'text') ? baseTheme.brandGreen4 : '#FFFFFF',
              //   border: type === 'outlined' ? `1px solid ${baseTheme.brandGreen4}` : 'none',
              //   svg: {
              //     path: {
              //       stroke: type === 'solid' ? '#FFFFFF' : baseTheme.brandGreen4
              //     }
              //   }
              // }
            })
          }
        ]
      }
    }
  })
}