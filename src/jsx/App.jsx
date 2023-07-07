import React, { /* useState, */useEffect, useMemo } from 'react';
import '../styles/styles.less';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2023-gcrg_regional';

function App() {
  // Data states.
  // const [data, setData] = useState(false);

  const areas = useMemo(() => ['africa', 'arabRegion', 'asiaPacific', 'europe', 'latinAmericaAndCaribeean', 'ldcs', 'sids'], []);
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);

      if (areas.includes(hash)) {
        document.querySelector(`#app-root-2023-gcrg_regional .${hash}_link`).classList.add('active');
        document.querySelector(`#app-root-2023-gcrg_regional #${hash}`).classList.add('active');
      }
    }
  }, [areas]);

  const changeRegion = (event) => {
    document.querySelector('#app-root-2023-gcrg_regional .container').style.backgroundImage = `url(./../assets/img/globe-${event.currentTarget.dataset.value}.jpg)`;
    document.querySelectorAll('#app-root-2023-gcrg_regional .region_link a').forEach(el => {
      el.classList.remove('active');
    });
    document.querySelectorAll('#app-root-2023-gcrg_regional .region_container').forEach(el => {
      el.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  };
  return (
    <div className="app">
      <div className="container">
        <div className="navigation_container">
          <h2>Regional stories</h2>
          <h3 className="group_title">Regions</h3>
          <ul className="regions_group">
            <li className="region_link"><a href="#africa" data-value="africa" className="africa_link" onClick={(event) => changeRegion(event)}>Africa</a></li>
            <li className="region_link"><a href="#arabRegion" data-value="arabRegion" className="arabRegion_link" onClick={(event) => changeRegion(event)}>Arab Region</a></li>
            <li className="region_link"><a href="#asiaPacific" data-value="asiaPacific" className="asiaPacific_link" onClick={(event) => changeRegion(event)}>Asia and the Pacific</a></li>
            <li className="region_link"><a href="#europe" data-value="europe" className="europe_link" onClick={(event) => changeRegion(event)}>Europe</a></li>
            <li className="region_link"><a href="#latinAmericaAndCaribeean" data-value="latinAmericaAndCaribeean" className="latinAmericaAndCaribeean_link" onClick={(event) => changeRegion(event)}>Latin America and the Caribeean</a></li>
          </ul>
          <h3 className="group_title">Special Groups</h3>
          <ul className="regions_group">
            <li className="region_link"><a href="#ldcs" data-value="ldcs" className="ldcs_link" onClick={(event) => changeRegion(event)}>Least Developed Countries</a></li>
            <li className="region_link"><a href="#sids" data-value="sids" className="sids_link" onClick={(event) => changeRegion(event)}>Small Islands Developing States</a></li>
          </ul>
        </div>
      </div>
      <div className="content_container">
        <div className="region_container" id="africa">
          <h2 className="title">Africa</h2>
          <h3 className="intro">Introduction</h3>
          <p>Governments use public debt to finance their expenditure, to protect and invest in their people, and to pave their way to a better future. But when public debt grows too much or too fast, it can become a burden. This is what is happening today across the developing world. Public debt has reached colossal levels, largely due to countries’ efforts to fend off the impact of the COVID-19 pandemic, but also other challenges, such as the cost-of-living crisis, climate change or the pursuit of their development aspirations. The debt burden is heavier for developing countries facing rising inflation, interest rate hikes, currency devaluations and sluggish growth. This compromises their ability to fight climate change, react to sudden emergencies, or invest in their people and their future. The weight of the burden is already evident. Today, an increasing number of developing countries spend more on servicing their debt than on education, health, or infrastructure to service their people. A world of debt disrupts prosperity. There is a paradox embedded in our international financial architecture: developing economies, which need financing the most to propel their development, are those with less access to it. Developed countries can mobilize far larger amounts of resources and at a fraction of the cost. This must change. The United Nations has a roadmap of multilateral action to improve the international financial architecture. This can ease debt burdens and unleash the resources needed to foster sustainable development and accelerate our pace towards the achievement of the 2030 Agenda.</p>
        </div>
        <div className="region_container" id="arabRegion">
          <h2 className="title">Arab Region</h2>
          <h3 className="intro">Introduction</h3>
          <p>Governments use public debt to finance their expenditure, to protect and invest in their people, and to pave their way to a better future. But when public debt grows too much or too fast, it can become a burden. This is what is happening today across the developing world. Public debt has reached colossal levels, largely due to countries’ efforts to fend off the impact of the COVID-19 pandemic, but also other challenges, such as the cost-of-living crisis, climate change or the pursuit of their development aspirations. The debt burden is heavier for developing countries facing rising inflation, interest rate hikes, currency devaluations and sluggish growth. This compromises their ability to fight climate change, react to sudden emergencies, or invest in their people and their future. The weight of the burden is already evident. Today, an increasing number of developing countries spend more on servicing their debt than on education, health, or infrastructure to service their people. A world of debt disrupts prosperity. There is a paradox embedded in our international financial architecture: developing economies, which need financing the most to propel their development, are those with less access to it. Developed countries can mobilize far larger amounts of resources and at a fraction of the cost. This must change. The United Nations has a roadmap of multilateral action to improve the international financial architecture. This can ease debt burdens and unleash the resources needed to foster sustainable development and accelerate our pace towards the achievement of the 2030 Agenda.</p>
        </div>
        <div className="region_container" id="asiaPacific">asiaPacific</div>
        <div className="region_container" id="europe">europe</div>
        <div className="region_container" id="latinAmericaAndCaribeean">latinAmericaAndCaribeean</div>
        <div className="region_container" id="ldcs">Least Developed Countries</div>
        <div className="region_container" id="sids">Small Islands Developing States</div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
