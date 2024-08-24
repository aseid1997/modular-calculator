import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

// Combine all reducers (right now we only have themeReducer)
const rootReducer = combineReducers({
  theme: themeReducer,
});

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

