import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      imageURL: './items_images/1.avif',
      title: 'Новая сосновка',
      features: {
        sleeping_places: 5,
        table_tennis: true,
        pool: true,
        bathhouse: true,
      },
    },
    {
      id: 2,
      imageURL: './items_images/2.avif',
      title: 'Салмачи 1',
      features: {
        sleeping_places: 3,
        table_tennis: true,
        pool: true,
        bathhouse: false,
      },
    },
    {
      id: 3,
      imageURL: './items_images/3.avif',
      title: 'Новая сосновка',
      features: {
        sleeping_places: 6,
        table_tennis: true,
        pool: false,
        bathhouse: true,
      },
    },
    {
      id: 4,
      imageURL: './items_images/4.avif',
      title: 'Новая сосновка',
      features: {
        sleeping_places: 6,
        table_tennis: true,
        pool: false,
        bathhouse: true,
      },
    },
    {
      id: 5,
      imageURL: './items_images/1.avif',
      title: 'Новая сосновка',
      features: {
        sleeping_places: 6,
        table_tennis: true,
        pool: false,
        bathhouse: true,
      },
    },
    {
      id: 6,
      imageURL: './items_images/2.avif',
      title: 'Новая сосновка',
      features: {
        sleeping_places: 6,
        table_tennis: true,
        pool: false,
        bathhouse: true,
      },
    },
  ],
};

export const ItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = ItemsSlice.actions;

export default ItemsSlice.reducer;
