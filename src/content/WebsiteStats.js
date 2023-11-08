import React from 'react';
import './styles.css';

const WebsiteStats = () => {
  return (
    <div className="website-stats-container">
      <div className="stats-rectangle">
        <div className="stat-circle">
          <div class="circle-content">
            320+
          </div>
          <div class="content-below">CULTURAL SITES</div>
        </div>
        <div className="stat-circle">
          <div class="circle-content">
            50+
          </div>
          <div class="content-below">HAPPY CLIENTS</div>
        </div>
        <div className="stat-circle">
          <div class="circle-content">
            30+
          </div>
          <div class="content-below">EXPERT MEMBERS</div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteStats;
