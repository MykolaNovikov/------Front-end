import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { jwtDecode } from '../helpers/helpers';
import { localStoredReducer } from '../helpers/helpers';

const address = 'http://marketplace.node.ed.asmer.org.ua/';2

//Auth reducer
const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, payload: null },
  reducers: {
    login(state, { payload: token }) {
      const payload = jwtDecode(token);
      if (payload) {
        state.payload = payload;
        state.token = token;
      }
    },
    logout(state) {
      state.payload = null;
      state.token = null;
    },
     setAvatar(state, action) {
       const { avatar } = action.payload;
       state.payload.avatar = avatar;
     },
     setNick(state, action) {
       const { nick } = action.payload;
       state.payload.nick = nick;
     },
  }});

// Marketplace reducer
const marketplaceSlice = createSlice({
  name: 'marketplace',
  initialState: {
    adds: [],
  },
  reducers: {
    setAdds(state, action) {
      state.adds = action.payload;
    },
  },
});

const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: address + 'graphql/',
    prepareHeaders(headers, { getState }) {
      const { token } = getState().auth;
      if (token) {
        headers.set('Authorization', 'Bearer ' + token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    adFind: builder.query({
      query: () => ({
        document: `
          query addList {
            AdFind(query: [{}]) {
              _id
              owner {
                login
              }
              images {
                url
              }
              title
              description
              tags
              address
              price
              tags
            }
          }
        `,
      }),
    }),
    AdFindOne: builder.query({
      query: ({ _id }) => ({
        document: `
          query oneAd($query: String) {
            AdFindOne(query: $query) {
              _id
              owner {
                login
                avatar {
                  url
                }
                nick
              }
              images {
                url
              }
              title
              description
              address
              price
            }
          }
        `,
        variables: { query: JSON.stringify([{ _id }]) },
      }),
    }),
    login: builder.mutation({
      query: ({ login, password }) => ({
        document: `
          mutation login($login: String!, $password: String!) {
            login(login: $login, password: $password) 
          }
        `,
        variables: { login, password },
      }),
    }),
    getUserById: builder.query({
      query: ({ _id }) => ({
        document: `
          query oneUser($query: String) {
            UserFindOne(query: $query) {
              _id
              login
              nick
              avatar {
                url
              }
            }
          }
        `,
        variables: { query: JSON.stringify([{ _id }]) },
      }),
      providesTags: (result, error, { _id }) => {
        return [{ type: 'User', id: _id }];
      },
    }),
    setUserNick: builder.mutation({
      query: ({ _id, nick }) => ({
        document: `
          mutation setNick($_id: String, $nick: String) {
            UserUpsert(user: {
              _id: $_id
              nick: $nick
            }) {
              _id
              nick
            }
          }
        `,
        variables: { _id, nick },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg._id }],
    }),
    setUserAvatar: builder.mutation({
      query: ({ id }) => ({
        document: `
          mutation setAvatar($id: String) {
            UserUpsert(user: {
              _id: $id
            }) {
              _id {
                _id
              }
            }
          }
        `,
        variables: { id },
      }),
    }),
    setPassword: builder.mutation({
      query: ({ password, newPassword }) => ({
        document: `
          mutation changePassword($password: String!, $newPassword: String!) {
            changePassword(password: $password, newPassword: $newPassword)
          }
        `,
        variables: { password, newPassword },
      }),
    }),
    userRegistration: builder.mutation({
      query: ({ login, password }) => ({
        document: `
          mutation register($login: String!, $password: String!) {
            createUser(login: $login, password: $password) {
              login
            }
          }
        `,
        variables: { login, password },
      }),
    }),
  }),
});

// Thunks and hooks
const {
  useLoginMutation,
  useGetUserByIdQuery,
  useSetUserNickMutation,
  useAdFindQuery,
  useSetUserAvatarMutation,
  useSetPasswordMutation,
  useUserRegistrationMutation,
} = api;

const loginThunk = api.endpoints.login.initiate;
const getUserByIdThunk = api.endpoints.getUserById.initiate;
const registrationThunk = api.endpoints.userRegistration.initiate;

// Store
const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [api.reducerPath]: api.reducer,
    [marketplaceSlice.name]: localStoredReducer(marketplaceSlice.reducer, 'marketplace'), //підключення слайса, створеннного createApi
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), //додаємо мідлварь
});

export {
  useLoginMutation,
  useGetUserByIdQuery,
  useAdFindQuery,
  useSetUserNickMutation,
  useSetUserAvatarMutation,
  useSetPasswordMutation,
  useUserRegistrationMutation,
  authSlice,
  address,
  loginThunk,
  getUserByIdThunk,
  registrationThunk,
};
export default store;