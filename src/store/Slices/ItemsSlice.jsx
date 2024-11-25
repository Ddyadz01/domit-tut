import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      imageURL: '/items_images/1.avif',
      videoURL: '/1.mp4',
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
      tariffs: {
        prices_info: [
          {
            id: 1,
            title: 'Будние',
            price: '8000',
          },
          {
            id: 2,
            title: 'Пятница',
            price: '10000',
          },
          {
            id: 3,
            title: 'Суббота',
            price: '12000',
          },
          {
            id: 4,
            title: 'Воскресенье',
            price: '12000',
          },
        ],
        ball: '3000',
        options: [
          {
            id: 1,
            title: 'Полные выходные (ПТ-ВС)',
            price: '12000',
          },
          {
            id: 2,
            title: 'Новый год (2 дня)',
            price: '80000',
          },
          {
            id: 3,
            title: 'Январские празднкии (сутки)',
            price: '30000',
          },
        ],
      },
    },
    {
      id: 2,
      imageURL: '/items_images/2.avif',
      videoURL: '/2.mp4',
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
      tariffs: {
        prices_info: [
          {
            id: 1,
            title: 'Будние',
            price: '8000',
          },
          {
            id: 2,
            title: 'Пятница',
            price: '10000',
          },
        ],
        ball: '1000',
        options: [
          {
            id: 1,
            title: 'Полные выходные (ПТ-ВС)',
            price: '15000',
          },
          {
            id: 3,
            title: 'Январские празднкии (сутки)',
            price: '28000',
          },
        ],
      },
    },
    {
      id: 3,
      imageURL: '/items_images/3.avif',
      videoURL: '/3.mp4',
      title: 'Новая сосновка',
      addres: 'Рублево-Успенское шоссе 24 км от МКАД',
      information:
        '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio voluptatibus vitae perspiciatis repellendus est cumque sed rem delectus, cupiditate fugiat in ipsum mollitia nisi dignissimos! Repudiandae quaerat, animi dolorum voluptatum sit quis sunt reprehenderit enim, sed magnam, quo unde soluta ipsum quidem architecto doloremque autem. Ipsa, maxime doloremque atque, iure expedita officia vero quas adipisci obcaecati quos autem ratione? Eveniet molestias quidem deleniti dolore ullam, impedit vitae dolores dicta, tempora facere illo. Nobis iusto rerum sint eos illo, at oloribus error quia, corrupti eum distinctio nemo! Inventore accusamus, aperiam incidunt quibusdam nemo minima laborum assumenda, sunt dolore voluptate repellat!',
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
      tariffs: {
        prices_info: [
          {
            id: 1,
            title: 'Будние',
            price: '8000',
          },
          {
            id: 2,
            title: 'Пятница',
            price: '10000',
          },
        ],
        ball: '1000',
        options: [
          {
            id: 1,
            title: 'Полные выходные (ПТ-ВС)',
            price: '15000',
          },
          {
            id: 3,
            title: 'Январские празднкии (сутки)',
            price: '28000',
          },
        ],
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
      tariffs: {
        prices_info: [
          {
            id: 1,
            title: 'Будние',
            price: '8000',
          },
          {
            id: 2,
            title: 'Пятница',
            price: '10000',
          },
        ],
        ball: '1000',
        options: [
          {
            id: 1,
            title: 'Полные выходные (ПТ-ВС)',
            price: '15000',
          },
          {
            id: 3,
            title: 'Январские празднкии (сутки)',
            price: '28000',
          },
        ],
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
      tariffs: {
        prices_info: [
          {
            id: 1,
            title: 'Будние',
            price: '8000',
          },
          {
            id: 2,
            title: 'Пятница',
            price: '10000',
          },
        ],
        ball: '1000',
        options: [
          {
            id: 1,
            title: 'Полные выходные (ПТ-ВС)',
            price: '15000',
          },
          {
            id: 2,
            title: 'Январские празднкии (сутки)',
            price: '28000',
          },
          {
            id: 3,
            title: 'День (5 часов)',
            price: '5600',
          },
          {
            id: 4,
            title: 'Ночь (5 часов)',
            price: '8600',
          },
        ],
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
      tariffs: {
        prices_info: [
          {
            id: 1,
            title: 'Будние',
            price: '8000',
          },
          {
            id: 2,
            title: 'Пятница',
            price: '10000',
          },
        ],
        ball: '1000',
        options: [
          {
            id: 1,
            title: 'Полные выходные (ПТ-ВС)',
            price: '15000',
          },
          {
            id: 3,
            title: 'Январские празднкии (сутки)',
            price: '28000',
          },
        ],
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
