interface ThemeState {
  theme: 'light' | 'dark';
}

export interface ApplyThemeAction {
  type: 'APPLY_THEME';
  payload: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

const themeReducer = (state = initialState, action: ApplyThemeAction): ThemeState => {
  switch (action.type) {
    case 'APPLY_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
