import React from 'react';
import '../styles/pages/about.scss';
import SobreImage from '../assets/aboutImage.jpg';
const Sobre = () => {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre-container">
                <div className="content">
                    <h2>Sobre nós</h2>
                    <p>
                    Criada em 2018, a clínica foi fundada com o objetivo inicial de ser um petshop voltado ao bem-estar e cuidados essenciais dos pets.
                    Em 2020, percebendo a demanda crescente por serviços veterinários de qualidade, a clínica migrou para o ramo de saúde animal, investindo em infraestrutura e profissionais capacitados.
                    Desde então, a clínica se dedica a oferecer um atendimento acolhedor e acessível, buscando sempre fortalecer o vínculo entre tutores e seus animais, através de cuidados de confiança e qualidade.
                    Entre em contato conosco via WhatsApp e agende uma consulta!
                    </p>
                </div>
                <div className="image">
                    <img src={SobreImage} alt="about" />
                </div>
            </div>
        </section>
    );
};

export default Sobre;
