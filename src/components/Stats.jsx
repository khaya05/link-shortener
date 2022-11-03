import ReactDom from 'react-dom';
import { stats } from './data';

import '../styles/Stats.css';

function HorizontalLine() {
  return (
    <>{ReactDom.createPortal(<div />, document.querySelector('#hor-line'))}</>
  );
}

function Stats() {
  return (
    <section className="statistics">
      <h2>advanced statistics</h2>
      <p className="stats-header-p">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <HorizontalLine />
      <div className="stats-container">
        {stats.map((stat, index) => {
          const { icon, heading, paragraph, id } = stat;
          return (
            <>
              <div key={id} className={`feature-container feature_${index}`}>
                <div className="icon-container">
                  <img src={icon} alt="icon" />
                </div>
                <article  className={` feature`}>
                  <h3>{heading}</h3>
                  <p>{paragraph}</p>
                </article>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;
