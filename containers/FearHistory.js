import React from 'react';
import { MatchDetailsContext } from '../pages/chi-tiet-tran-dau/[pid]';

export const FearHistory = () => {
  const { dataDetailMatchHistory } = React.useContext(MatchDetailsContext);
  const data = dataDetailMatchHistory.confrontation;

  return (
    <>
      <div className="container">
        <div className="row mb-3 topbet">
          <ul className="league_container" style={{ width: '100%' }}>
            <li className="league-item">
              <ul className="match-list">
                {(data || [])?.map((d, idx) => {
                  return (
                    <li key={idx} style={{ backgroundColor: '#121a3a' }}>
                      <div className="match-time">{d.date}</div>
                      <div className="match-team">
                        <span className="team-name">
                          {d.home.name}{' '}
                          <picture>
                            <img src={d.home.logo} alt={d.home.name} style={{ marginLeft: '1rem' }} />
                          </picture>
                        </span>
                        <span className="vs">
                          {d.home.point} - {d.away.point}
                        </span>
                        <span className="team-name">
                          <picture>
                            <img src={d.away.logo} alt={d.away.name} style={{ marginRight: '1rem' }} />
                          </picture>
                          {d.away.name}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
