export default class ApartService {
  getAparts() {
    return [
      {
        id: 1,
        title: 'Апартаменты на Вавилова',
        district: 'Центральный',
        address: 'ул.Вавилова, д.27',
        area: 120,
        bedroom: 2,
      },
      {
        id: 2,
        title: 'Апартаменты на Луговой',
        district: 'Восточный',
        address: 'ул.Луговая, д.44',
        area: 65,
        bedroom: 1,
      },
    ];
  }
}
