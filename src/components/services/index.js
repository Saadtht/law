import React from 'react';
import './style.css';

const services = [
  {
    name: 'Consultation Juridique Initiale',
    description: 'Obtenez des conseils dès le départ pour prendre des décisions éclairées.'
  },
  {
    name: 'Représentation en Litige',
    description: 'Défendez vos intérêts devant les tribunaux avec détermination.'
  },
  {
    name: 'Planification Successorale',
    description: "Protégez vos biens et vos volontés pour l'avenir"
  },
  {
    name: 'Médiation et Arbitrage',
    description: 'Résolution rapide et amiable des conflits.'
  },
  {
    name: 'Rédaction de Contrats',
    description: 'Des contrats solides et complets rédigés par des professionnels.'
  },
  {
    name: 'Conformité Réglementaire',
    description: 'Assurez-vous que votre entreprise respecte les lois en vigueur.'
  }
];

function Services() {
  return (
    <div id='services' className='services-wrapper'>
      <h3 className="h3-serv">Nos services</h3>
      <h1 className="h1-serv">Explorez nos services pour une solution juridique efficace</h1>
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            <div className="service-content">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
