 export const Users = [
        {
                id:1,
                profilePicture: require('./img/5.jpg'),
                username:"Khun Tun",
        },
        {
                id:2,
                profilePicture: require('./img/2.jpg'),
                username:"Nang Hning Nu",
        },
        {
                id:3,
                profilePicture: require('./img/3.jpg'),
                username:"Way Way",
        },
        {
                id:4,
                profilePicture: require('./img/7.jpg'),
                username:"Ya Za",
        },
        {
                id:5,
                profilePicture: require('./img/8.jpg'),
                username: "Elon Mask",
        },
        {
                id:6,
                profilePicture: require('./img/4.jpg'),
                username:"Bezob",
        },
        {
                id:7,
                profilePicture: require('./img/10.jpg'),
                username: "kyaw Kyaw",
        }
];



export const PostApis = [
        {
                id:1,
                desc: "The one for All, All for the one",
                userId:1,
                photo: require('./img/10.jpg'),
                date: "3 minutes ago",
                like: "2",
                comment: "12",
        },
        {
                id:2,
                userId:2,
                photo: require('./img/2.jpg'),
                date: "6 minutes ago",
                like: "20",
                comment: "10",
        },
        {
                id:3,
                userId:3,
                photo: require('./img/3.jpg'),
                date: "20 minutes ago",
                like: "5",
                comment: "2",
        },
        {
                id:4,
                userId:4,
                photo: require('./img/7.jpg'),
                date: "16 minutes ago",
                like: "3",
                comment: "15",
        },
        {
                id:5,
                userId:5,
                photo:require('./img/6.jpg'),
                date: "45 minutes ago",
                like: "34",
                comment: "33",
        },
        {
                id:6,
                desc: "Slow and steady wins the race.",
                userId:6,
                photo: require('./img/5.jpg'),
                date: "23 minutes ago",
                like: "2",
                comment: "12",
        },
        {
                id:7,
                userId:7,
                photo: require('./img/8.jpg'),
                date: "33 minutes ago",
                like: "26",
                comment: "16",
        }
];






/*
let getPost = PostApis.find(postApi => postApi.date === "23 minutes ago");
console.log(getPost);
*/



/*
let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }
]


let car = cars.find(car => car.color === "red");
console.log(car);
console.log(car[0]);
console.log(car[0].type);

let redCars = cars.filter(car => car.color === "red");
console.log(redCars);
      */
