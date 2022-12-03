import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { MatchDetailsContext } from '../pages/chi-tiet-tran-dau/[pid]';

export const RecentResult = () => {
  const { dataDetailMatchHistory } = React.useContext(MatchDetailsContext);
  const dataHomeLastMatches = dataDetailMatchHistory.homeLastMatches;
  const dataAwayLastMatches = dataDetailMatchHistory.awayLastMatches;

  return (
    <>
      <div className="container">
        <div className="col-12 d-flex">
          <div className="title-sub-section">
            <span>KẾT QUẢ </span>
            <span>GẦN ĐÂY</span>
          </div>
        </div>
        <div className="row mb-3 topbet">
          <div className="d-none d-lg-block col-lg-6">
            <ul className="league_container" style={{ width: '100%' }}>
              <li className="league-item">
                <ul className="match-list">
                  {(dataHomeLastMatches || []).map((d, idx) => {
                    if (d.home.logo && d.away.logo) {
                      return (
                          <li key={idx} style={{backgroundColor: '#121a3a'}}>
                            <div className="match-time">{d.date}</div>
                            <div className="match-team">
                          <span className="team-name">
                            {d.home.name}{' '}
                            <picture>
                              <img
                                  src={d.home.logo}
                                  alt={d.home.name}
                                  style={{marginLeft: '1rem'}}
                              />
                            </picture>
                          </span>
                              <span className="vs">
                            {d.home.point} - {d.away.point}
                          </span>
                              <span className="team-name">
                            <picture>
                              <img
                                  src={d.away.logo}
                                  alt={d.away.name}
                                  style={{marginRight: '1rem'}}
                              />
                            </picture>
                                {d.away.name}
                          </span>
                            </div>
                          </li>
                      );
                    }
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <ul className="league_container" style={{ width: '100%' }}>
              <li className="league-item">
                <ul className="match-list">
                  {(dataAwayLastMatches || []).map((d, idx) => {
                    return (
                      <li key={idx} style={{ backgroundColor: '#121a3a' }}>
                        <div className="match-time">{d.date}</div>
                        <div className="match-team">
                          <span className="team-name">
                            {d.home.name}{' '}
                            <picture>
                              <img
                                src={d.home.logo}
                                alt={d.home.name}
                                style={{ marginLeft: '1rem' }}
                              />
                            </picture>
                          </span>
                          <span className="vs">
                            {d.home.point} - {d.away.point}
                          </span>
                          <span className="team-name">
                            <picture>
                              <img
                                src={d.away.logo}
                                alt={d.away.name}
                                style={{ marginRight: '1rem' }}
                              />
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
      </div>
    </>
  );
};
