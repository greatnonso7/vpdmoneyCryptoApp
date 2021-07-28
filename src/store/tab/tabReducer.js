import * as tabActionTypes from './tabActions';

const initalState = {
  isTradeModalVisible: false,
};

const tabReducer = (state = initalState, action) => {
  switch (action.type) {
    case tabActionTypes.SET_TRADE_MODAL_VISIBILITY:
      return {
        ...state,
        isTradeModalVisible: action.payload.isVisible,
      };

    default:
      return state;
  }
};

export default tabReducer;
