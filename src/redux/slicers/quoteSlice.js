import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  quote: null,
  author: null,
  isLoading: false,
  error: null,
};

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  try {
    const response = await axios.get("http://api.quotable.io/random");
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quote = action.payload.content;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default quoteSlice.reducer;
