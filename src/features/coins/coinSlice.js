import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    coin: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingCoins.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getTrendingCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coins = action.payload;
      })
      .addCase(getTrendingCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(getCoin.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coin = action.payload;
      })
      .addCase(getCoin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});


export const getTrendingCoins = createAsyncThunk("FETCH/COINS", async () => {
  try {
    return await coinService.fetchCoins();
  } catch (error) {
    console.log(error);
  }
});




export const getCoin = createAsyncThunk("FETCH/COIN", async (id) => {
  try {
    return await coinService.fetchCoin(id);
  } catch (error) {
    console.log(error);
  }
});


export default coinSlice.reducer;
