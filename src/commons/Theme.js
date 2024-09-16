import { createTheme } from "@mui/material";

const getBaseTheme = (mode) => ({
  ...(mode === 'light' ? {
    background: {
      paper: '#F9F4ED',
      default: '#FBE1D9'
    },
    primary1: '#2A2A2A',
    secondary1: '#AF695C',
    neutral1: '#EAEAEA',
    neutral2: '#A09E9D'


  } : {
    background: {
      paper: '#2A2A2A',
      default: '#61524F'
    },
    primary1: '#FFFFFF',
    secondary1: '#AF695C',
    neutral1: '#EAEAEA',
    neutral2: '#7D7D7D'
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
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
            color: baseTheme.background.primary1,
            borderRadius: '14px !important',
            width: '75%',
            maxWidth: '350px',
            minHeight: '42px',
            transition: 'all 0.3s ease',
            '.MuiOutlinedInput-input': {
              fontSize: '0.9375rem',
              fontWeight: 400,
              lineHeight: '1.143rem',
              padding: '10px 12px 10px 12px',
              ':-webkit-autofill': {
                // WebkitBoxShadow: '0 0 0 100px #FFFFFF',
                WebkitTextFillColor: baseTheme.neutral1
              }
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            },
            '&.Mui-focused': {
              backgroundColor: baseTheme.neutral1,
              width: '100%',
              '& .MuiOutlinedInput-notchedOutline': {
                border: `1.5px solid ${baseTheme.background.paper}!important`
              },
            },
            '.MuiPaper-root': {
              marginTop: '6px'
            },
            '&.MuiInputBase-multiline': {
              padding: 0
            }
          }
        },
        variants: [
          {
            props: { inputType: 'date' },
            style: {
              flexDirection: 'row-reverse',
              gap: '10px'
            }
          },
          {
            props: { size: 'large' },
            style: {
              minHeight: '46px'
            }
          }
        ]
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: '100%',
            maxWidth: '350px'
          }
        },
        variants: [
          {
            props: { 'extra-variant': 'pointarea' }, 
            style: {
              width: '40px',
              height: '25px',
              borderRadius: '6px',
              '& .MuiOutlinedInput-root': {
                minHeight: '25px',
                borderRadius: '6px!important',
                padding: '0',
                '& input': {
                  padding: '5px',
                  textAlign: 'center',
                  fontSize: '15px',
                  fontWeight: '500',
                  lineHeight: '18.29px'
                }
              }
            }
          }
        ]
      },
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