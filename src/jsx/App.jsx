// eslint-disable-next-line no-unused-vars
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
        document.querySelector('#app-root-2023-gcrg_regional .navigation_background').style.backgroundImage = `url(https://storage.unctad.org/2023-gcrg_regional/assets/img/globe-${hash}.jpg)`;
      }
    }
  }, [areas]);

  const changeRegion = (event) => {
    document.querySelector('#app-root-2023-gcrg_regional .navigation_background').style.backgroundImage = `url(https://storage.unctad.org/2023-gcrg_regional/assets/img/globe-${event.currentTarget.dataset.value}.jpg)`;
    document.querySelectorAll('#app-root-2023-gcrg_regional .region_link a').forEach(el => {
      el.classList.remove('active');
    });
    document.querySelectorAll('#app-root-2023-gcrg_regional .region_container').forEach(el => {
      el.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  };

  useEffect(() => {
    document.querySelectorAll('#app-root-2023-gcrg_regional .region_link a').forEach(el => {
      el.addEventListener('click', (e) => {
        changeRegion(e);
      }, false);
    });
    document.querySelectorAll('#app-root-2023-gcrg_regional .content_container .region_container').forEach(el => {
      el.style.display = 'none';
      el.style.opacity = 0;
    });
  }, []);

  return (<div />);
}

export default App;
