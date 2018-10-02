export default {
    namespaced: true,
    state: {
        table: [{ number: 12, date: new Date("02.07.2016".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Иванов Александр', summ: parseFloat(600.12) },
        { number: 7, date: new Date("13.09.2017".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Семенов Николай', summ: parseFloat(7200.60) },
        { number: 5, date: new Date("20.05.2015".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Антонов Алексей', summ: parseFloat(1248.16) },
        { number: 18, date: new Date("24.12.2016".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Алексеев Игорь', summ: parseFloat(20.65) },
        { number: 3, date: new Date("17.08.2015".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Потапов Серей', summ: parseFloat(12720.00) },
        { number: 1, date: new Date("20.01.2015".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Николаев Иван', summ: parseFloat(121.16) },
        { number: 21, date: new Date("25.02.2017".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Петров Алексей', summ: parseFloat(200.50) },
        { number: 16, date: new Date("24.12.2016".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Морозов Сергей', summ: parseFloat(100.15) },
        { number: 9, date: new Date("25.03.2015".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Иванов Константин', summ: parseFloat(600.25) },
        { number: 2, date: new Date("29.04.2017".replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")), name: 'Потапов Андрей', summ: parseFloat(600.25) }
        ]
    },
    getters: {
        table(state) {
            return state.table;
        }
    }
}