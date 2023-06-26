import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_testingt_list = createAsyncThunk(
  "testingTS/api_v1_testingt_list",
  async payload => {
    const response = await apiService.api_v1_testingt_list(payload)
    return response.data
  }
)
export const api_v1_testingt_create = createAsyncThunk(
  "testingTS/api_v1_testingt_create",
  async payload => {
    const response = await apiService.api_v1_testingt_create(payload)
    return response.data
  }
)
export const api_v1_testingt_retrieve = createAsyncThunk(
  "testingTS/api_v1_testingt_retrieve",
  async payload => {
    const response = await apiService.api_v1_testingt_retrieve(payload)
    return response.data
  }
)
export const api_v1_testingt_update = createAsyncThunk(
  "testingTS/api_v1_testingt_update",
  async payload => {
    const response = await apiService.api_v1_testingt_update(payload)
    return response.data
  }
)
export const api_v1_testingt_partial_update = createAsyncThunk(
  "testingTS/api_v1_testingt_partial_update",
  async payload => {
    const response = await apiService.api_v1_testingt_partial_update(payload)
    return response.data
  }
)
export const api_v1_testingt_destroy = createAsyncThunk(
  "testingTS/api_v1_testingt_destroy",
  async payload => {
    const response = await apiService.api_v1_testingt_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testingTSSlice = createSlice({
  name: "testingTS",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_testingt_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testingt_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testingt_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testingt_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testingt_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testingt_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testingt_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_testingt_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_testingt_list,
  api_v1_testingt_create,
  api_v1_testingt_retrieve,
  api_v1_testingt_update,
  api_v1_testingt_partial_update,
  api_v1_testingt_destroy,
  slice: testingTSSlice
}
