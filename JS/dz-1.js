// Write code under this line
const users = [
  { name: 'Moore Hensley', isActive: true },
  { name: 'Sharlene Bush', isActive: false },
  { name: 'Ross Vazquez', isActive: true },
  { name: 'Elma Head', isActive: true },
  { name: 'Carey Barr', isActive: false },
  { name: 'Blackburn Dotson', isActive: true },
  { name: 'Sheree Anthony', isActive: true },
];

const getUserNames = array => array.map(({name}) => (name));


console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
