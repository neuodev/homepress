import {
  FAVORITE_ADD_ITEM,
  FAVORITE_CLEAR_ITEMS,
  FAVORITE_REMOVE_ITEM,
} from '../actions/actionsType';

export const favoriteList = (
  state = {
    favoriteItems: [],
  },
  { type, payload }
) => {
  switch (type) {
    case FAVORITE_ADD_ITEM:
      const item = payload;

      const existItem = state.favoriteItems.find(x => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          favoriteItems: state.favoriteItems.map(x =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, item],
        };
      }
    case FAVORITE_REMOVE_ITEM:
      return {
        ...state,
        favoriteItems: state.cartItems.filter(x => x.id !== payload),
      };
    case FAVORITE_CLEAR_ITEMS:
      return {
        ...state,
        favoriteItems: [],
      };
    default:
      return state;
  }
};
