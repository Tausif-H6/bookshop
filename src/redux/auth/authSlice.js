import smartTryCatch from "../../utils/smartTryCatch";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const { default: authService } = require("./authService");

const user = JSON.parse(localStorage.getItem("user"));

const initState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  successAlternativeMessage: null,
  uid: null,
  tokenValidation: {},
  searchQuery: "",
  books: [
    {
      book_type: "comic",
      book_name: "Black Widow",
      author_info: {
        name: "David Walles",
        birth_year: 1990,
        gender: "male",
      },
      published_on: 2019,
      comments: ["very good book", "I enjoyed it"],
    },
    {
      book_type: "novel",
      book_name: "The Silent Forest",
      author_info: {
        name: "Emily Davis",
        birth_year: 1985,
        gender: "female",
      },
      published_on: 2020,
      comments: ["captivating storyline", "must-read"],
    },
    {
      book_type: "science fiction",
      book_name: "Galactic Odyssey",
      author_info: {
        name: "Jason Roberts",
        birth_year: 1978,
        gender: "male",
      },
      published_on: 2022,
      comments: ["mind-bending twists", "futuristic world-building"],
    },
    {
      book_type: "fantasy",
      book_name: "Realm of Dragons",
      author_info: {
        name: "Sophie Johnson",
        birth_year: 1995,
        gender: "female",
      },
      published_on: 2018,
      comments: ["epic fantasy adventure", "rich character development"],
    },
    {
      book_type: "mystery",
      book_name: "Whispers in the Shadows",
      author_info: {
        name: "Michael Anderson",
        birth_year: 1982,
        gender: "male",
      },
      published_on: 2021,
      comments: ["intriguing plot", "kept me guessing"],
    },
    {
      book_type: "romance",
      book_name: "Love Beyond the Stars",
      author_info: {
        name: "Jessica Turner",
        birth_year: 1987,
        gender: "female",
      },
      published_on: 2017,
      comments: ["heartwarming love story", "beautifully written"],
    },
    {
      book_type: "historical fiction",
      book_name: "The Time Traveler's Diary",
      author_info: {
        name: "Daniel Carter",
        birth_year: 1970,
        gender: "male",
      },
      published_on: 2023,
      comments: ["captivating historical details", "time-travel twist"],
    },
    {
      book_type: "fantasy",
      book_name: "Echoes of Eldoria",
      author_info: {
        name: "Isabel Martinez",
        birth_year: 1988,
        gender: "female",
      },
      published_on: 2020,
      comments: ["magical world-building", "unexpected plot twists"],
    },
    {
      book_type: "thriller",
      book_name: "Silent Shadows",
      author_info: {
        name: "Ryan Turner",
        birth_year: 1975,
        gender: "male",
      },
      published_on: 2019,
      comments: ["edge-of-your-seat suspense", "gripping from start to finish"],
    },
    {
      book_type: "historical fiction",
      book_name: "Ripples of Revolution",
      author_info: {
        name: "Elena Rodriguez",
        birth_year: 1980,
        gender: "female",
      },
      published_on: 2021,
      comments: ["immerses in historical events", "characters come to life"],
    },
    {
      book_type: "science fiction",
      book_name: "Quantum Nexus",
      author_info: {
        name: "Nathan Foster",
        birth_year: 1992,
        gender: "male",
      },
      published_on: 2022,
      comments: ["mind-bending concepts", "exploration of alternate realities"],
    },
    {
      book_type: "romance",
      book_name: "Love in Bloom",
      author_info: {
        name: "Sophie Anderson",
        birth_year: 1985,
        gender: "female",
      },
      published_on: 2018,
      comments: ["heartfelt romance", "tear-jerking moments"],
    },
    {
      book_type: "mystery",
      book_name: "Whispers in the Attic",
      author_info: {
        name: "Christopher Baker",
        birth_year: 1978,
        gender: "male",
      },
      published_on: 2023,
      comments: ["intricate plot", "suspenseful until the last page"],
    },
    {
      book_type: "dystopian",
      book_name: "Broken Utopia",
      author_info: {
        name: "Emma Davis",
        birth_year: 1990,
        gender: "female",
      },
      published_on: 2016,
      comments: ["bleak yet compelling future", "thought-provoking"],
    },
    {
      book_type: "comic",
      book_name: "Superhero Origins",
      author_info: {
        name: "Alex Thompson",
        birth_year: 1985,
        gender: "male",
      },
      published_on: 2020,
      comments: ["exciting superhero tales", "awesome illustrations"],
    },
  ],
  selectedOption: "option1",
  originalBooks: [], // Store the original set of books for resetting
};
export const login = createAsyncThunk("login", async (data, thunkAPI) =>
  smartTryCatch(authService.login, data, thunkAPI)
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    resetAuth: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
    searchBook: (state, action) => {
      const searchItem = action.payload.toLowerCase();

      // If search query is empty, reset to original books
      if (!searchItem) {
        state.books = [...state.originalBooks];
        return;
      }

      // If originalBooks is empty, initialize it with the current state.books
      if (state.originalBooks.length === 0) {
        state.originalBooks = [...state.books];
      }

      // Filter books based on search query
      state.books = state.originalBooks.filter((book) =>
        book.book_name.toLowerCase().includes(searchItem)// Game changer
      );
    },

    sortBooksByAuthorBirthYear: (state) => {
      // Sort books by author birth year in ascending order
      state.books.sort(
        (a, b) => a.author_info.birth_year - b.author_info.birth_year
      );
    },
    sortBooksByType: (state) => {
      // Sort books by book type alphabetically
      state.books.sort((a, b) => a.book_type.localeCompare(b.book_type));
    },
    sortBooksByGender: (state) => {
      console.log(
        "Before sorting:",
        state.books.map((book) => book.published_on)
      );
      // Sort books by author gender alphabetically
      state.books.sort((a, b) =>
        a.author_info.gender.localeCompare(b.author_info.gender)
      );
    },
    sortBooksByPublishYear: (state) => {
      // Sort books by published year in ascending order (newer books first)
      state.books.sort((a, b) => b.published_on - a.published_on);
    },
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = true;
        state.user = null;
      });
  },
});

export const {
  resetAuth,
  searchBook,
  sortBooksByAuthorBirthYear,
  sortBooksByType,
  sortBooksByGender,
  sortBooksByPublishYear,
  updateSearchQuery,
} = authSlice.actions;
export default authSlice.reducer;
