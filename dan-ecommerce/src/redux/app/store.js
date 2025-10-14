
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { combineReducers } from "redux";

// ✅ Auth Reducer
const initialAuthState = {
  username: null,
  accessToken: null,
  userId: null,
  isLoggedIn: false,
};

function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        username: action.payload.username,
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        username: null,
        accessToken: null,
        userId: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

const initialCartState = {
  totalPrice: 0,
};

function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case "SET_TOTAL":
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
}

// ⬇️ If you have more reducers, you can add them here
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

// ✅ Persist Config
const persistConfig = {
  key: "root",
  storage,
};

// ✅ Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Store & Persistor
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
