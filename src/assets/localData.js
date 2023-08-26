import { uniqueId } from "lodash";
import mony from "./img/mony.png";
import star from "./img/starr.png";
import wink from "./img/wink.png"
import glasses from "./img/wink.png"

export const localData = {
    link: [
        {
            name: "Главная",
            path: "/",
            id: uniqueId()
        },
        {
            name: "Что даст обучение",
            path: "education",
            id: uniqueId()
        },
    ],
    education: [
        {
            img: star,
            text: "Откроешь свой первый криптокошелек и научишься с ним работать",
            id: uniqueId()
        },
        {
            img: wink,
            text: "Поймёшь, как выбирать правильные дропы",
            id: uniqueId()
        },
        {
            img: mony,
            text: "Построишь план по быстрому приумножению заработанных средств",
            id: uniqueId()
        },
        {
            img: glasses,
            text: "Узнаешь кто такие холдеры и флипперы",
            id: uniqueId()
        }
    ]
}