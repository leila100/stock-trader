const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((stock) => stock.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      const newRecord = { id: stockId, quantity };
      state.stocks = [...state.stocks, newRecord];
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((stock) => stock.id === stockId);
    if (!record) return;
    if (+record.quantity > +quantity) {
      record.quantity -= quantity;
      state.funds += stockPrice * quantity;
    } else {
      state.funds += stockPrice * record.quantity;
      state.stocks = state.stocks.filter((record) => record.id !== stockId);
    }
  },
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit("SELL_STOCK", order);
  },
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map((stock) => {
      const record = getters.stocks.find((stk) => stk.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds(state) {
    return state.funds;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
