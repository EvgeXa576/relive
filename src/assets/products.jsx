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
    // 1. BIG_GABA
    {
        id: 1, img: BigGaba, name: "BIG_GABA", taste: "Маракуйя + ГABA", cost: 200, volume: '350',
        components: ['маракуйя', 'ГABA', 'зелёный чай', 'натуральный ароматизатор'],
        structure: ['подготовленная вода', 'чай зеленый', 'культура чайного гриба', 'сахар белый кристаллический', 'пюре маракуйи', 'экстракт ГABA'],
        category: 'Энергия'
    },
    {
        id: 2, img: BigGaba, name: "BIG_GABA", taste: "Маракуйя + ГABA", cost: 280, volume: '500',
        components: ['маракуйя', 'ГABA', 'зелёный чай', 'натуральный ароматизатор'],
        structure: ['подготовленная вода', 'чай зеленый', 'культура чайного гриба', 'сахар белый кристаллический', 'пюре маракуйи', 'экстракт ГABA'],
        category: 'Энергия'
    },

    // 2. EARL_YELLOW
    {
        id: 3, img: EarlYellow, name: "EARL_YELLOW", taste: "Бергамот + Цитрус", cost: 200, volume: '350',
        components: ['бергамот', 'апельсин', 'лимон', 'чёрный чай'],
        structure: ['подготовленная вода', 'чай чёрный', 'культура чайного гриба', 'сахар белый кристаллический', 'натуральный экстракт бергамота', 'цитрусовое пюре'],
        category: 'Классика'
    },
    {
        id: 4, img: EarlYellow, name: "EARL_YELLOW", taste: "Бергамот + Цитрус", cost: 280, volume: '500',
        components: ['бергамот', 'апельсин', 'лимон', 'чёрный чай'],
        structure: ['подготовленная вода', 'чай чёрный', 'культура чайного гриба', 'сахар белый кристаллический', 'натуральный экстракт бергамота', 'цитрусовое пюре'],
        category: 'Классика'
    },

    // 3. FOREVER_IVAN
    {
        id: 5, img: ForeverIvan, name: "FOREVER_IVAN", taste: "Иван-чай + Яблоко", cost: 200, volume: '350',
        components: ['иван-чай', 'яблоко', 'корица', 'мёд'],
        structure: ['подготовленная вода', 'иван-чай ферментированный', 'культура чайного гриба', 'сахар белый кристаллический', 'яблочное пюре', 'экстракт корицы'],
        category: 'Травы'
    },
    {
        id: 6, img: ForeverIvan, name: "FOREVER_IVAN", taste: "Иван-чай + Яблоко", cost: 280, volume: '500',
        components: ['иван-чай', 'яблоко', 'корица', 'мёд'],
        structure: ['подготовленная вода', 'иван-чай ферментированный', 'культура чайного гриба', 'сахар белый кристаллический', 'яблочное пюре', 'экстракт корицы'],
        category: 'Травы'
    },

    // 4. GINGER_HYPE
    {
        id: 7, img: GingerHype, name: "GINGER_HYPE", taste: "Имбирь + Лайм", cost: 200, volume: '350',
        components: ['имбирь', 'лайм', 'зелёный чай', 'мята'],
        structure: ['подготовленная вода', 'чай зеленый', 'культура чайного гриба', 'сахар белый кристаллический', 'имбирный корень', 'сок лайма'],
        category: 'Острота'
    },
    {
        id: 8, img: GingerHype, name: "GINGER_HYPE", taste: "Имбирь + Лайм", cost: 280, volume: '500',
        components: ['имбирь', 'лайм', 'зелёный чай', 'мята'],
        structure: ['подготовленная вода', 'чай зеленый', 'культура чайного гриба', 'сахар белый кристаллический', 'имбирный корень', 'сок лайма'],
        category: 'Острота'
    },

    // 5. GINGER_UP
    {
        id: 9, img: GingerUp, name: "GINGER_UP", taste: "Имбирь + Лимон", cost: 200, volume: '350',
        components: ['имбирь', 'лимон', 'куркума', 'чёрный перец'],
        structure: ['подготовленная вода', 'чай улун', 'культура чайного гриба', 'сахар белый кристаллический', 'имбирный экстракт', 'лимонный сок'],
        category: 'Острота'
    },
    {
        id: 10, img: GingerUp, name: "GINGER_UP", taste: "Имбирь + Лимон", cost: 280, volume: '500',
        components: ['имбирь', 'лимон', 'куркума', 'чёрный перец'],
        structure: ['подготовленная вода', 'чай улун', 'культура чайного гриба', 'сахар белый кристаллический', 'имбирный экстракт', 'лимонный сок'],
        category: 'Острота'
    },

    // 6. KILL_BERRY
    {
        id: 11, img: KillBerry, name: "KILL_BERRY", taste: "Микс ягод + Мята", cost: 200, volume: '350',
        components: ['малина', 'ежевика', 'смородина', 'мята'],
        structure: ['подготовленная вода', 'чай зеленый', 'культура чайного гриба', 'сахар белый кристаллический', 'ягодное пюре', 'экстракт мяты'],
        category: 'Ягоды'
    },
    {
        id: 12, img: KillBerry, name: "KILL_BERRY", taste: "Микс ягод + Мята", cost: 280, volume: '500',
        components: ['малина', 'ежевика', 'смородина', 'мята'],
        structure: ['подготовленная вода', 'чай зеленый', 'культура чайного гриба', 'сахар белый кристаллический', 'ягодное пюре', 'экстракт мяты'],
        category: 'Ягоды'
    },

    // 7. LADY_IN_RED
    {
        id: 13, img: LadyInRed, name: "LADY_IN_RED", taste: "Гранат + Вишня", cost: 200, volume: '350',
        components: ['гранат', 'вишня', 'гибискус', 'корица'],
        structure: ['подготовленная вода', 'чай чёрный', 'культура чайного гриба', 'сахар белый кристаллический', 'гранатовый сок', 'вишнёвое пюре'],
        category: 'Ягоды'
    },
    {
        id: 14, img: LadyInRed, name: "LADY_IN_RED", taste: "Гранат + Вишня", cost: 280, volume: '500',
        components: ['гранат', 'вишня', 'гибискус', 'корица'],
        structure: ['подготовленная вода', 'чай чёрный', 'культура чайного гриба', 'сахар белый кристаллический', 'гранатовый сок', 'вишнёвое пюре'],
        category: 'Ягоды'
    },

    // 8. OH_MY_GREEN
    {
        id: 15, img: OhMyGreen, name: "OH_MY_GREEN", taste: "Зеленый чай + Мята", cost: 200, volume: '350',
        components: ['сенча', 'мята перечная', 'лайм', 'базилик'],
        structure: ['подготовленная вода', 'чай зеленый сенча', 'культура чайного гриба', 'сахар белый кристаллический', 'экстракт мяты', 'сок лайма'],
        category: 'Свежесть'
    },
    {
        id: 16, img: OhMyGreen, name: "OH_MY_GREEN", taste: "Зеленый чай + Мята", cost: 280, volume: '500',
        components: ['сенча', 'мята перечная', 'лайм', 'базилик'],
        structure: ['подготовленная вода', 'чай зеленый сенча', 'культура чайного гриба', 'сахар белый кристаллический', 'экстракт мяты', 'сок лайма'],
        category: 'Свежесть'
    },

    // 9. OOLONG
    {
        id: 17, img: Oolong, name: "OOLONG", taste: "Клубника + Базилик", cost: 200, volume: '350',
        components: ['клубника', 'красный базилик', 'улун', 'ваниль'],
        structure: ['подготовленная вода', 'чай молочный улун', 'культура чайного гриба', 'сахар белый кристаллический', 'клубничное пюре', 'экстракт базилика'],
        category: 'Ягоды и цветы'
    },
    {
        id: 18, img: Oolong, name: "OOLONG", taste: "Клубника + Базилик", cost: 280, volume: '500',
        components: ['клубника', 'красный базилик', 'улун', 'ваниль'],
        structure: ['подготовленная вода', 'чай молочный улун', 'культура чайного гриба', 'сахар белый кристаллический', 'клубничное пюре', 'экстракт базилика'],
        category: 'Ягоды и цветы'
    },

    // 10. PINEAPPLE
    {
        id: 19, img: Pineapple, name: "PINEAPPLE", taste: "Ананас + Кокос", cost: 200, volume: '350',
        components: ['ананас', 'кокос', 'лайм', 'ваниль'],
        structure: ['подготовленная вода', 'чай белый', 'культура чайного гриба', 'сахар белый кристаллический', 'ананасовое пюре', 'кокосовое молоко'],
        category: 'Тропические'
    },
    {
        id: 20, img: Pineapple, name: "PINEAPPLE", taste: "Ананас + Кокос", cost: 280, volume: '500',
        components: ['ананас', 'кокос', 'лайм', 'ваниль'],
        structure: ['подготовленная вода', 'чай белый', 'культура чайного гриба', 'сахар белый кристаллический', 'ананасовое пюре', 'кокосовое молоко'],
        category: 'Тропические'
    }
];

export default products;