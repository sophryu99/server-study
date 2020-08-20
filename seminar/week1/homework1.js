var restaurants = [
    {name: 'lalabread', location: 'jamsil', rating: 4},
    {name: 'bangingtaco', location: 'jeju', rating: 3.5},
    {name: 'kitchenlab', location: 'garosugil', rating: 4.5}
];

restaurants.forEach(
    restaurants => console.log(restaurants.name+'는(은) '+restaurants.location+'에 위치해 있고 평점은 ' + restaurants.rating+'입니다!')
);