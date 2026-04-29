import BigGaba from '../assets/img/bottle/BIG_GABA.png'
import EarlYellow from '../assets/img/bottle/EARL_YELLOW.png'
import ForeverIvan from '../assets/img/bottle/FOREVER_IVAN.png'
import GingerHype from '../assets/img/bottle/GINGER_HYPE.png'
import GingerUp from '../assets/img/bottle/GINGER_UP.png'
import KillBerry from '../assets/img/bottle/KILL_BERRY.jpg'
import LadyInRed from '../assets/img/bottle/LADY_IN_RED.jpg'
import OhMyGreen from '../assets/img/bottle/OH_MY_GREEN.jpg'
import Oolong from '../assets/img/bottle/OOLONG.jpg'
import Pineapple from '../assets/img/bottle/PINEAPPLE.jpg'

const products = [
    {
        id: 1,
        img: BigGaba,
        name: "BIG GABA",  // 🔹 Было: "BIG_GABA"
        taste: "Маракуйя + ГABA",
        category: 'Энергия',
        components: ['маракуйя', 'ГABA', 'зелёный чай', 'натуральный ароматизатор'],
        structure: ['подготовленная вода', 'чай зеленый', 'культура чайного гриба', 'сахар белый кристаллический', 'пюре маракуйи', 'экстракт ГABA'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    },
    {
        id: 2,
        img: EarlYellow,
        name: "EARL YELLOW",  // 🔹 Было: "EARL_YELLOW"
        taste: "Бергамот + Цитрус",
        category: 'Классика',
        components: ['бергамот', 'апельсин', 'лимон', 'чёрный чай'],
        structure: ['подготовленная вода', 'чай чёрный', 'культура чайного гриба', 'сахар белый кристаллический', 'натуральный экстракт бергамота', 'цитрусовое пюре'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    },
    {
        id: 3,
        img: ForeverIvan,
        name: "FOREVER IVAN",  // 🔹 Было: "FOREVER_IVAN"
        taste: "Иван-чай + Яблоко",
        category: 'Травы',
        components: ['иван-чай', 'яблоко', 'корица', 'мёд'],
        structure: ['подготовленная вода', 'иван-чай ферментированный', 'культура чайного гриба', 'сахар белый кристаллический', 'яблочное пюре', 'экстракт корицы'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    },
    {
        id: 4,
        img: GingerHype,
        name: "GINGER HYPE",  // 🔹 Было: "GINGER_HYPE"
        taste: "Имбирь + Лайм",
        category: 'Острота',
        components: ['имбирь', 'лайм', 'зелёный чай', 'мята'],
        structure: ['подготовленная вода', 'чай зеленый', 'культура чайного гриба', 'сахар белый кристаллический', 'имбирный корень', 'сок лайма'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    },
    {
        id: 5,
        img: GingerUp,
        name: "GINGER UP",  // 🔹 Было: "GINGER_UP"
        taste: "Имбирь + Лимон",
        category: 'Острота',
        components: ['имбирь', 'лимон', 'куркума', 'чёрный перец'],
        structure: ['подготовленная вода', 'чай улун', 'культура чайного гриба', 'сахар белый кристаллический', 'имбирный экстракт', 'лимонный сок'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    },
    {
        id: 6,
        img: KillBerry,
        name: "KILL BERRY",  // 🔹 Было: "KILL_BERRY"
        taste: "Микс ягод + Мята",
        category: 'Ягоды',
        components: ['малина', 'ежевика', 'смородина', 'мята'],
        structure: ['подготовленная вода', 'чай зеленый', 'культура чайного гриба', 'сахар белый кристаллический', 'ягодное пюре', 'экстракт мяты'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    },
    {
        id: 7,
        img: LadyInRed,
        name: "LADY IN RED",  // 🔹 Было: "LADY_IN_RED"
        taste: "Гранат + Вишня",
        category: 'Ягоды',
        components: ['гранат', 'вишня', 'гибискус', 'корица'],
        structure: ['подготовленная вода', 'чай чёрный', 'культура чайного гриба', 'сахар белый кристаллический', 'гранатовый сок', 'вишнёвое пюре'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    },
    {
        id: 8,
        img: OhMyGreen,
        name: "OH MY GREEN",  // 🔹 Было: "OH_MY_GREEN"
        taste: "Зеленый чай + Мята",
        category: 'Свежесть',
        components: ['сенча', 'мята перечная', 'лайм', 'базилик'],
        structure: ['подготовленная вода', 'чай зеленый сенча', 'культура чайного гриба', 'сахар белый кристаллический', 'экстракт мяты', 'сок лайма'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    },
    {
        id: 9,
        img: Oolong,
        name: "OOLONG",  // ✅ Без изменений (не было подчёркивания)
        taste: "Клубника + Базилик",
        category: 'Ягоды и цветы',
        components: ['клубника', 'красный базилик', 'улун', 'ваниль'],
        structure: ['подготовленная вода', 'чай молочный улун', 'культура чайного гриба', 'сахар белый кристаллический', 'клубничное пюре', 'экстракт базилика'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    },
    {
        id: 10,
        img: Pineapple,
        name: "PINEAPPLE",  // ✅ Без изменений (не было подчёркивания)
        taste: "Ананас + Кокос",
        category: 'Тропические',
        components: ['ананас', 'кокос', 'лайм', 'ваниль'],
        structure: ['подготовленная вода', 'чай белый', 'культура чайного гриба', 'сахар белый кристаллический', 'ананасовое пюре', 'кокосовое молоко'],
        volumes: [
            { size: '350', cost: 200 },
            { size: '500', cost: 280 }
        ]
    }
];

export default products;