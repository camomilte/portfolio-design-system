import { colors } from "./colors";

export const color = {
  /* BACKGROUND COLORS */
  background: {
    page: colors.mango[50],
    surface: {
      1: colors.blueberry[100],
      2: colors.blueberry[200],
    },
    elevated: colors.mango[50],
    overlay: 'rgba(0, 0, 0, 0.55)',
    brand: {
      primary: {
        default: colors.blueberry[500],
        subtle: colors.blueberry[100],
      },
      secondary: {
        default: colors.lavender[500],
        subtle: colors.lavender[100],
      },
      accent: {
        default: colors.peach[500],
        subtle: colors.peach[100],
      },
    },
    feedback: {
      success: {
        default: colors.pear[500],
        subtle: colors.pear[100],
      },
      warning: {
        default: colors.mango[500],
        subtle: colors.mango[100],
      },
      danger: {
        default: colors.strawberry[500],
        subtle: colors.strawberry[100],
      },
      info: {
        default: colors.blueberry[300],
        subtle: colors.blueberry[50],
      }
    }
  },

  /* INTERACTIVE ELEMENTS */
  interative: {
    brand: {
      primary: {
        default: colors.blueberry[500],
        hover: colors.blueberry[600],
        active: colors.blueberry[700],
        disabled: colors.blueberry[300],
  
        subtle: {
          default: colors.blueberry[100],
          hover: colors.blueberry[200],
          active: colors.blueberry[300],
          disabled: colors.blueberry[50],
        },
      },
      secondary: {
        default: colors.lavender[500],
        hover: colors.lavender[600],
        active: colors.lavender[700],
        disabled: colors.lavender[300],

        subtle: {
          default: colors.lavender[100],
          hover: colors.lavender[200],
          active: colors.lavender[300],
          disabled: colors.lavender[50],
        },
      },
      accent: {
        default: colors.peach[500],
        hover: colors.peach[600],
        active: colors.peach[700],
        disabled: colors.peach[300],

        subtle: {
          default: colors.peach[100],
          hover: colors.peach[200],
          active: colors.peach[300],
          disabled: colors.peach[50],
        },
      },
    },
    
    feedback: {
      success: {
        default: colors.pear[500],
        hover: colors.pear[600],
        active: colors.pear[700],
        disabled: colors.pear[400],

        subtle: {
          default: colors.pear[100],
          hover: colors.pear[200],
          active: colors.pear[300],
          disabled: colors.pear[50],
        }
      },

      warning: {
        default: colors.mango[500],
        hover: colors.mango[600],
        active: colors.mango[700],
        disabled: colors.mango[400],

        subtle: {
          default: colors.mango[100],
          hover: colors.mango[200],
          active: colors.mango[300],
          disabled: colors.mango[50],
        }
      },

      danger: {
        default: colors.strawberry[600],
        hover: colors.strawberry[700],
        active: colors.strawberry[800],
        disabled: colors.strawberry[400],

        subtle: {
          default: colors.strawberry[100],
          hover: colors.strawberry[200],
          active: colors.strawberry[300],
          disabled: colors.strawberry[50],
        },
      },

      info: {
        default: colors.blueberry[300],
        hover: colors.blueberry[400],
        active: colors.blueberry[500],
        disabled: colors.blueberry[200],

        subtle: {
          default: colors.blueberry[50],
          hover: colors.blueberry[100],
          active: colors.blueberry[200],
          disabled: colors.lavender[50], // maybe grey?
        },
      },
    },
  },

  /* TEXT COLORS */
  text: {
    primary: {
      default: colors.blueberry[500],
      disabled: colors.blueberry[300]
    }, 
    secondary: {
      default: colors.grey[800],
      disabled: colors.grey[500],
    },

    on: {
      brand: {
        primary: {
          default:colors.mango[50],
          subtle: colors.mango[50],
        },
        secondary: {
          default: colors.blueberry[700],
          subtle: colors.lavender[100]
        },
        accent: {
          default: colors.peach[800],
          subtle: colors.peach[100]
        },
      },
      feedback: {
        success: {
          default: colors.grey[900],
          subtle: colors.pear[800],
        },
        warning: {
          default: colors.grey[900],
          subtle: colors.mango[800],
        },
        danger: {
          default: colors.mango[50],
          subtle: colors.strawberry[800],
        },
        info: {
          default: colors.grey[900],
          subtle: colors.blueberry[800],
        },
      },
      surface: {
        1: colors.blueberry[700],
        2: colors.blueberry[700],
      },
    }
  },

  /* STROKES */
  stroke: {
    brand: {
      primary: {
        default: colors.blueberry[500],
        disabled: colors.blueberry[300],
  
        subtle: {
          default: colors.blueberry[100],
          disabled: colors.blueberry[50],
        },
      },
      secondary: {
        default: colors.lavender[500],
        disabled: colors.lavender[300],

        subtle: {
          default: colors.lavender[100],
          disabled: colors.lavender[50],
        },
      },
      accent: {
        default: colors.peach[500],
        disabled: colors.peach[300],

        subtle: {
          default: colors.peach[100],
          disabled: colors.peach[50],
        },
      },
    },
    
    feedback: {
      success: {
        default: colors.pear[500],
        disabled: colors.pear[400],

        subtle: {
          default: colors.pear[100],
          disabled: colors.pear[50],
        }
      },

      warning: {
        default: colors.mango[500],
        disabled: colors.mango[400],

        subtle: {
          default: colors.mango[100],
          disabled: colors.mango[50],
        }
      },

      danger: {
        default: colors.strawberry[600],
        disabled: colors.strawberry[400],

        subtle: {
          default: colors.strawberry[100],
          disabled: colors.strawberry[50],
        },
      },

      info: {
        default: colors.blueberry[300],
        disabled: colors.blueberry[200],

        subtle: {
          default: colors.blueberry[50],
          disabled: colors.grey[100], 
        },
      },
    },
  },
}
