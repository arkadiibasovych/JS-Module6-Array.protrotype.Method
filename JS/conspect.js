// Array.prototype.forEach()
// поэлементно перебирает оригинальный массив
// Ничего не возвращает
// Заменяет классический for, если не нужно прерывать цикл

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (element, index, array) {
    // console.log(element);
    // console.log(index);
    // console.log(array);
     
});


// ========================================================================


// Array.prototype.map()
// Поэлементно перебирает оригинальный массив
// Возвращает новый массив такой же длины

// const numbers = [5, 10, 15, 20, 25];

// const mappedNumbers = numbers.map(function (element, index, array) {
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element * 2;
// });

// console.log(mappedNumbers);
// console.log(numbers)

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];


// Получаем массив имен всех игроков

const playerNames = players.map(function (player) {
    return player.name;
}
)
console.log(playerNames);

// Увеличиваем кол-во поинтов каждого игрока

// const updatedPlayers = players.map(function (player) {

//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// }

// );

// console.log(updatedPlayers);

// Увиличиваем кол-во часов игрока по id

const playerToUpdate = 'player-3';

const updatedPlayer = players.map(function (player) {
    if (player.id === playerToUpdate) {
        return {
            ...player,
            timePlayed: player.timePlayed + 50
        }
    }
    return player;
});

console.log(updatedPlayer);