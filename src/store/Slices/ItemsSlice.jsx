import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      imageURL: '/items_images/1.avif',
      title: 'Новая сосновка',
      addres: 'г. Красногорск, д. 3с1',
      features: {
        table_tennis: true,
        pool: false,
        bathhouse: true,
        images: [
          '/items_images/dop1.avif',
          '/items_images/dop2.avif',
          '/items_images/dop3.avif',
          '/items_images/dop4.avif',
        ],
      },
      persons_info: {
        type_house: 'Уникальное жилье',
        floors: 2,
        house_area: 96,
        plot_size: 6,
        sleeping_places: 4,
        count_bedrooms: 2,
        max_persons: 6,
      },
    },
    {
      id: 2,
      imageURL: '/items_images/2.avif',
      title: 'Салмачи 1',
      addres: 'Рублево-Успенское шоссе 24 км от МКАД',
      features: {
        sleeping_places: 6,
        table_tennis: true,
        pool: false,
        bathhouse: true,
        images: [
          '/items_images/dop1.avif',
          '/items_images/dop2.avif',
          '/items_images/dop3.avif',
          '/items_images/dop4.avif',
        ],
      },
      persons_info: {
        type_house: 'Уникальное жилье',
        floors: 4,
        house_area: 135,
        plot_size: 21,
        sleeping_places: 24,
        count_bedrooms: 12,
        max_persons: 30,
      },
    },
    {
      id: 3,
      imageURL: '/items_images/3.avif',
      title: 'Новая сосновка',
      addres: 'Рублево-Успенское шоссе 24 км от МКАД',
      features: {
        sleeping_places: 6,
        table_tennis: true,
        pool: false,
        bathhouse: true,
        images: [
          '/items_images/dop1.avif',
          '/items_images/dop2.avif',
          '/items_images/dop3.avif',
          '/items_images/dop4.avif',
        ],
      },
      persons_info: {
        type_house: 'Уникальное жилье',
        floors: '2',
        house_area: '234',
        plot_size: '16',
        sleeping_places: '35',
        count_bedrooms: 8,
        max_persons: 42,
      },
    },
    {
      id: 4,
      imageURL: '/items_images/4.avif',
      title: 'Новая сосновка',
      addres: 'Рублево-Успенское шоссе 24 км от МКАД',
      features: {
        sleeping_places: 6,
        table_tennis: true,
        pool: false,
        bathhouse: true,
        images: [
          '/items_images/dop1.avif',
          '/items_images/dop2.avif',
          '/items_images/dop3.avif',
          '/items_images/dop4.avif',
        ],
      },
      persons_info: {
        type_house: 'Уникальное жилье',
        floors: '2',
        house_area: '234',
        plot_size: '16',
        sleeping_places: '35',
        count_bedrooms: 8,
        max_persons: 42,
      },
    },
    {
      id: 5,
      imageURL: '/items_images/5.avif',
      title: 'Горки-Сухаревские 1',
      addres: 'Рублево-Успенское шоссе 24 км от МКАД',
      features: {
        sleeping_places: 6,
        table_tennis: true,
        pool: false,
        bathhouse: true,
        images: [
          '/items_images/dop1.avif',
          '/items_images/dop2.avif',
          '/items_images/dop3.avif',
          '/items_images/dop4.avif',
        ],
      },
      persons_info: {
        type_house: 'Уникальное жилье',
        floors: '5',
        house_area: '125',
        plot_size: '10',
        sleeping_places: '15',
        count_bedrooms: 6,
        max_persons: 25,
      },
    },
    {
      id: 6,
      imageURL: '/items_images/6.avif',
      title: 'Новая сосновка',
      addres: 'Московская область, г. Дмитров, Дмитровское шоссе, д 5/1',
      features: {
        sleeping_places: 6,
        table_tennis: true,
        pool: false,
        bathhouse: true,
        images: [
          '/items_images/dop1.avif',
          '/items_images/dop2.avif',
          '/items_images/dop3.avif',
          '/items_images/dop4.avif',
        ],
      },
      persons_info: {
        type_house: 'Уникальное жилье',
        floors: '2',
        house_area: '234',
        plot_size: '16',
        sleeping_places: '35',
        count_bedrooms: 8,
        max_persons: 42,
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
