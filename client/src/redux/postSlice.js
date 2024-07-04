import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: {},
  loading: false,
};

export const getAllPosts = createAsyncThunk(
  'posts/getAll',
  async () => {
    const response = await fetch(`http://localhost:3000/api/posts`);
    return await response.json();
  },
);

export const detailPost = createAsyncThunk(
  'posts/getDetail',
  async (id) => {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`);
    if (!response.ok) {
      throw new Error('Post not found');
    }
    return await response.json();
  }
);

export const createPost = createAsyncThunk(
  'dashboard/create',
  async (post) => {
    const response = await fetch("http://localhost:3000/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(post),
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw Error(data.error);
    }
  
    return data;
  }
)


export const updatePost = createAsyncThunk(
  'dashboard/update',
  async ({id, post}) => {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(post)
    })

    const data = await response.json(post)
    console.log("data:::::",data);

    if (!response.ok) {
      throw Error(data.error);
    }
  
    return data;

  }
)

export const deletePost = createAsyncThunk(
  'dashboard/delete',
  async(id) => {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`,{
      method: 'DELETE'
    })
    if(!response.ok) {
      throw new Error ('Post Silme işlemi basarisiz!')
    }
    return id
  }
)


const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(detailPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
  },
});

export default postSlice.reducer;
