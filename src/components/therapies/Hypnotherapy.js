import React from 'react';
import Header from '../header/Header';
import Therapy from '../layouts/Therapy';
import maya_8 from '../../assets/icons/noun-maya-symbol.png';
import './Hypnotherapy.scss';
import '../../style/main.scss';

export const elements = [
    {
        class: "",
        iframe: "https://www.youtube.com/embed/0MXaSwIIjWo",
        alt: "",
        title: "Hypnotherapie",
        subtitle: "Hypnose Ericksonienne",
        img: maya_8,
        text: [<p>Qu'est-ce que l'hypnose <strong><i>Ericksonnienne</i></strong> ?</p>],
        innerpath: "/#hypnotherapy",
        innerpage: "Contact",
        path: "https://www.hypnose.fr/hypnose/hypnose-ericksonienne/",
        page: "En savoir plus",
    },
];

const Hypnotherapy = () => {
    return (
        <>
            <div className="sticky-up">
                <Header/>
            </div>
            <section className="pageTherapy" id="at">
                <Therapy elements={elements} />
            </section>
        </>
    )
}

export default Hypnotherapy;