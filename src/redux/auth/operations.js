import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, setAuthHeaders } from "../../services/instance";

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/login', userData);
      setAuthHeaders(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/signup', userData);
      setAuthHeaders(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/logout', userData);
      setAuthHeaders(data.token);
      console.log('logout', data)
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.get('users/login', userData);
      setAuthHeaders(data.token);
      console.log('refresh', data)
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);