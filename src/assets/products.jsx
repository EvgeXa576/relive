import bottle from '../assets/img/bottle-catalog.png'

import gingerUpImg from '../assets/img/bottle/GINGER UP.png';
import killBerryImg from '../assets/img/bottle/KILL BERRY.jpg';
import ladyInRedImg from '../assets/img/bottle/LADY IN RED.jpg';
import pineappleImg from '../assets/img/bottle/PINEAPPLE.jpg';
import bigGabaImg from '../assets/img/bottle/BIG GABA.jpg';
import choImg from '../assets/img/bottle/CHO.png';
import everyTimeImg from '../assets/img/bottle/EVERY TIME.png';
import fallInLavenderImg from '../assets/img/bottle/FALL IN LAVANDER.png';
import gingerHypeImg from '../assets/img/bottle/GINGER HYPE.png';
import earlYellowImg from '../assets/img/bottle/EARL YELLOW.png';
import oolongImg from '../assets/img/bottle/OOLONG.png';
import foreverIvanImg from '../assets/img/bottle/FOREVER IVAN.png';
import ohMyGreenImg from '../assets/img/bottle/OH MY GREEN.jpg'

const products = [
    {
        id: 1,
        img: earlYellowImg,
        name: "EARL YELLOW",
        taste: "Бергамот + Маракуйя",
        cost: 200,
        volume: '350',
        components: ['индийский чай', 'эфирное масло бергамота', 'маракуйя', 'солнечный свет'],
        structure: ['подготовленная вода', 'чай черный', 'экстракт бергамота', 'маракуйя', 'культура чайного гриба', 'сахар'],
        category: 'Тропические'
    },
    {
        id: 2,
        img: fallInLavenderImg,
        name: "FALL IN LAVENDER",
        taste: "Лаванда + Ежевика",
        cost: 200,
        volume: '350',
        components: ['цветы горной лаванды', 'ежевика', 'умиротворение', 'легкость'],
        structure: ['подготовленная вода', 'чай зеленый', 'цветы лаванды', 'ежевика', 'культура чайного гриба', 'сахар'],
        category: 'Ягоды и цветы'
    },
    {
        id: 3,
        img: gingerUpImg,
        name: "GINGER UP",
        taste: "Имбирь + Апельсин",
        cost: 200,
        volume: '350',
        components: ['корень имбиря', 'апельсиновый сок', 'заряд бодрости', 'острые ощущения'],
        structure: ['подготовленная вода', 'чай черный', 'сок имбиря прямого отжима', 'сок апельсина', 'культура чайного гриба', 'сахар'],
        category: 'Тропические'
    },
    {
        id: 4,
        img: killBerryImg,
        name: "KILL BERRY",
        taste: "Черника + Хвоя",
        cost: 200,
        volume: '350',
        components: ['пихта', 'лесная черника', 'ягодный взрыв', 'дерзость'],
        structure: ['подготовленная вода', 'чай зеленый', 'пихта', 'пюре черники', 'культура чайного гриба', 'сахар'],
        category: 'Ягоды и цветы'
    },
    {
        id: 5,
        img: ladyInRedImg,
        name: "LADY IN RED",
        taste: "Вишня + Гибискус",
        cost: 200,
        volume: '350',
        components: ['цветы гибискуса', 'вишня', 'женственность', 'глубокий вкус'],
        structure: ['подготовленная вода', 'каркаде (лепестки гибискуса)', 'сок вишни концентрированный', 'культура чайного гриба', 'сахар'],
        category: 'Ягоды и цветы'
    },
    {
        id: 6,
        img: pineappleImg,
        name: "PINEAPPLE",
        taste: "Ананас + Лемонграсс",
        cost: 200,
        volume: '350',
        components: ['тропический ананас', 'лемонграсс', 'островной вайб', 'сладкие мечты'],
        structure: ['подготовленная вода', 'чай зеленый', 'сок ананаса', 'лемонграсс', 'культура чайного гриба', 'сахар'],
        category: 'Тропические'
    },
    {
        id: 7,
        img: bigGabaImg,
        name: "BIG GABA",
        taste: "чай улун Габа",
        cost: 200,
        volume: '350',
        components: ['чай Габа', 'ясность мыслей', 'спокойствие', 'глубокий фокус'],
        structure: ['подготовленная вода', 'чай улун Габа', 'культура чайного гриба', 'сахар'],
        category: 'Классика'
    },
    {
        id: 8,
        img: choImg,
        name: "CHO",
        taste: "Тархун + Жимолость",
        cost: 200,
        volume: '350',
        components: ['тархун', 'жимолость', 'черника', 'сила'],
        structure: ['подготовленная вода', 'тархун', 'жимолость', 'черника', 'культура чайного гриба', 'сахар'],
        category: 'Классика'
    },
    {
        id: 9,
        img: everyTimeImg,
        name: "EVERY TIME",
        taste: "Чабрец + Клюква",
        cost: 200,
        volume: '350',
        components: ['клюква', 'энергия гор', 'чабрец', 'каждый день'],
        structure: ['подготовленная вода', 'клюква', 'чабрец', 'культура чайного гриба', 'сахар'],
        category: 'Классика'
    },
    {
        id: 10,
        img: gingerHypeImg,
        name: "GINGER HYPE",
        taste: "Имбирь + Малина",
        cost: 200,
        volume: '350',
        components: ['экстра-имбирь', 'малина', 'хайп', 'острый цитрус'],
        structure: ['подготовленная вода', 'чай черный', 'корень имбиря', 'малина', 'культура чайного гриба', 'сахар'],
        category: 'Тропические'
    },
    {
        id: 11,
        img: oolongImg,
        name: "OOLONG",
        taste: "Клубника + Базилик",
        cost: 200,
        volume: '350',
        components: ['сочная клубника', 'красный базилик', 'летняя свежесть', 'баланс'],
        structure: ['подготовленная вода', 'чай молочный улун', 'клубничное пюре', 'экстракт базилика', 'культура чайного гриба', 'сахар'],
        category: 'Ягоды и цветы'
    },
    {
        id: 12,
        img: foreverIvanImg,
        name: "FOREVER IVAN",
        taste: "Иван-чай + Смородина",
        cost: 200,
        volume: '350',
        components: ['ферментированный иван-чай', 'смородина', 'природная сила', 'уют'],
        structure: ['подготовленная вода', 'иван-чай узколистный', 'смородина', 'культура чайного гриба', 'сахар'],
        category: 'Классика'
    },
    {
        id: 13,
        img: ohMyGreenImg,
        name: "OH MY GREEN",
        taste: "Зеленый чай + Мята",
        cost: 200,
        volume: '350',
        components: ['китайский зеленый чай', 'свежая мята', 'ледяная свежесть', 'чистота'],
        structure: ['подготовленная вода', 'чай зеленый', 'экстракт мяты перечной', 'культура чайного гриба', 'сахар'],
        category: 'Классика'
    }
];

export default products;