export default class ApartService {
  data = [
    {
      id: 1,
      title: 'Апартаменты на Вавилова',
      district: 'Центральный',
      address: 'ул.Вавилова, д.27',
      area: 120,
      bedroom: 2,
      image: 'https://image.freepik.com/free-photo/minimalist-dining-living-room-design_23-2148291620.jpg',
    },
    {
      id: 2,
      title: 'Апартаменты на Луговой',
      district: 'Восточный',
      address: 'ул.Луговая, д.44',
      area: 65,
      bedroom: 1,
      image: 'https://image.freepik.com/free-photo/front-view-chair-room-with-plant-decoration_23-2148560899.jpg',
    },
  ];
  getAparts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._generateAnswer(this.data, true, 'Aparts loaded'));
      }, 700);
    });
  }
  _generateAnswer(data, success, info) {
    return {
      data,
      success,
      info,
    };
  }
}
