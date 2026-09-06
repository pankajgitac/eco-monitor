/* =============================================================
   ECO-MONITOR NAVBAR v1.0
   Include this in every page:
   <script src="navbar.js"></script>
   
   Then add this where you want the navbar:
   <div id="eco-navbar"></div>
   
   And add padding to your body/container:
   margin-top: 60px (or padding-top: 60px)
   ============================================================= */

(function(){

var CURRENT_PAGE = window.location.pathname.split('/').pop() || 'home.html';

var NAV_HTML = `
<nav class="eco-nav" id="ecoNav">
  <div class="eco-nav__inner">

    <a href="home.html" class="eco-nav__logo">
      <span class="eco-nav__logo-icon">🌍</span>
      <span class="eco-nav__logo-text">Earth Vision AI</span>
    </a>

    <div class="eco-nav__links" id="navLinks">

      <a href="home.html" class="eco-nav__link" data-page="home.html">Home</a>

      <a href="About.html" class="eco-nav__link" data-page="About.html">About</a>

      <a href="sdg-action.html" class="eco-nav__link" data-page="sdg-action.html">SDG Action</a>

      <a href="EarthScan.html" class="eco-nav__link" data-page="EarthScan.html" style="color:#22c55e;font-weight:700">🛰 Earth Scan</a>

      <div class="eco-nav__dropdown">
        <button class="eco-nav__link eco-nav__drop-btn">
          Explore <span class="eco-nav__arrow">▾</span>
        </button>
        <div class="eco-nav__drop-menu">
          <a href="index.html" data-page="index.html">🌳 Green Cover</a>
          <a href="AQI.html" data-page="AQI.html">🌫 Air Quality</a>
          <a href="Climate.html" data-page="Climate.html">🌡 Climate</a>
          <a href="WaterReserves.html" data-page="WaterReserves.html">💧 Water</a>
          <a href="humanpopulation.html" data-page="humanpopulation.html">👥 Population</a>
          <a href="Satellite.html" data-page="Satellite.html">🛰 Satellite Photos</a>
          <a href="Compare.html" data-page="Compare.html">🧠 AI Compare</a>
          <a href="Disasters.html" data-page="Disasters.html">🌪 Disaster Center</a>
          <a href="Carbon.html" data-page="Carbon.html">🌎 Carbon Dashboard</a>
          <a href="City_AI_Pulse_V5_Rainfall.html" data-page="City_AI_Pulse_V5_Rainfall.html">🏙 City Pulse</a>
        </div>
      </div>

      <div class="eco-nav__dropdown">
        <button class="eco-nav__link eco-nav__drop-btn">
          AI Tools <span class="eco-nav__arrow">▾</span>
        </button>
        <div class="eco-nav__drop-menu">
          <a href="Dashboard.html" data-page="Dashboard.html">📊 Report &amp; Ranking</a>
          <a href="TreePlanting.html" data-page="TreePlanting.html">🌳 Tree Planting AI</a>
          <a href="PlantHere.html" data-page="PlantHere.html">📍 Plant Near Me</a>
          <a href="TimeMachine.html" data-page="TimeMachine.html">📊 Compare Years</a>
          <a href="TimeTravel.html" data-page="TimeTravel.html">🕰 Watch City Change</a>
          <a href="chatbot.html" data-page="chatbot.html">🤖 AI Chatbot</a>
          <a href="Report.html" data-page="Report.html">📄 PDF Report</a>
          <a href="Impact.html" data-page="Impact.html">🏅 My Impact</a>
          <a href="Agriculture.html" data-page="Agriculture.html">🌾 Agriculture AI</a>
    <a href="Biodiversity.html" data-page="Biodiversity.html">🦁 Biodiversity</a>
          <a href="Community.html" data-page="Community.html">🤝 Community Missions</a>
        </div>
      </div>

    </div>

    <button class="eco-nav__hamburger" id="navHamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>

  </div>

  <div class="eco-nav__mobile" id="navMobile">
    <a href="home.html" data-page="home.html">🏠 Home</a>
    <a href="EarthScan.html" data-page="EarthScan.html" style="color:#22c55e;font-weight:700">🛰 Earth Scan</a>
    <a href="About.html" data-page="About.html">ℹ️ About</a>
    <a href="sdg-action.html" data-page="sdg-action.html">🌍 SDG Action</a>
    <div class="eco-nav__mob-group">Explore</div>
    <a href="index.html" data-page="index.html">🌳 Green Cover</a>
    <a href="AQI.html" data-page="AQI.html">🌫 Air Quality</a>
    <a href="Climate.html" data-page="Climate.html">🌡 Climate</a>
    <a href="WaterReserves.html" data-page="WaterReserves.html">💧 Water</a>
    <a href="humanpopulation.html" data-page="humanpopulation.html">👥 Population</a>
    <a href="Satellite.html" data-page="Satellite.html">🛰 Satellite Photos</a>
    <a href="Compare.html" data-page="Compare.html">🧠 AI Compare</a>
    <a href="Disasters.html" data-page="Disasters.html">🌪 Disaster Center</a>
    <a href="Carbon.html" data-page="Carbon.html">🌎 Carbon Dashboard</a>
    <a href="City_AI_Pulse_V5_Rainfall.html" data-page="City_AI_Pulse_V5_Rainfall.html">🏙 City Pulse</a>
    <div class="eco-nav__mob-group">AI Tools</div>
    <a href="Dashboard.html" data-page="Dashboard.html">📊 Report &amp; Ranking</a>
    <a href="TreePlanting.html" data-page="TreePlanting.html">🌳 Tree Planting AI</a>
    <a href="PlantHere.html" data-page="PlantHere.html">📍 Plant Near Me</a>
    <a href="TimeMachine.html" data-page="TimeMachine.html">📊 Compare Years</a>
    <a href="TimeTravel.html" data-page="TimeTravel.html">🕰 Watch City Change</a>
    <a href="chatbot.html" data-page="chatbot.html">🤖 AI Chatbot</a>
    <a href="Report.html" data-page="Report.html">📄 PDF Report</a>
    <a href="Impact.html" data-page="Impact.html">🏅 My Impact</a>
    <a href="Biodiversity.html" data-page="Biodiversity.html">🦁 Biodiversity</a>
    <a href="Community.html" data-page="Community.html">🤝 Community Missions</a>
  </div>
</nav>
`;

var NAV_CSS = `
.eco-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  z-index: 99999;
  font-family: 'Segoe UI', Arial, sans-serif;
}
.eco-nav__inner {
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

/* LOGO */
.eco-nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.eco-nav__logo-icon {
  font-size: 26px;
}
.eco-nav__logo-text {
  font-size: 18px;
  font-weight: 800;
  color: #22c55e;
  letter-spacing: -0.5px;
}

/* LINKS */
.eco-nav__links {
  display: flex;
  align-items: center;
  gap: 6px;
}
.eco-nav__link {
  text-decoration: none;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 8px;
  transition: all 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}
.eco-nav__link:hover {
  background: #f0fdf4;
  color: #2e7d32;
}
.eco-nav__link.active {
  background: #dcfce7;
  color: #16a34a;
}

/* DROPDOWN */
.eco-nav__dropdown {
  position: relative;
}
.eco-nav__arrow {
  font-size: 10px;
  margin-left: 2px;
  opacity: 0.5;
}
.eco-nav__drop-menu {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
  border: 1px solid #f0f0f0;
  padding: 8px;
  min-width: 200px;
  z-index: 100;
}
.eco-nav__dropdown:hover .eco-nav__drop-menu {
  display: block;
}
.eco-nav__drop-menu a {
  display: block;
  text-decoration: none;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 14px;
  border-radius: 8px;
  transition: all 0.15s;
}
.eco-nav__drop-menu a:hover {
  background: #f0fdf4;
  color: #2e7d32;
}
.eco-nav__drop-menu a.active {
  background: #dcfce7;
  color: #16a34a;
  font-weight: 600;
}

/* HAMBURGER */
.eco-nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.eco-nav__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #374151;
  border-radius: 2px;
  transition: 0.3s;
}
.eco-nav__hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.eco-nav__hamburger.open span:nth-child(2) {
  opacity: 0;
}
.eco-nav__hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* MOBILE MENU */
.eco-nav__mobile {
  display: none;
  background: white;
  border-top: 1px solid #f0f0f0;
  padding: 12px 24px 20px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.1);
}
.eco-nav__mobile.open {
  display: block;
}
.eco-nav__mobile a {
  display: block;
  text-decoration: none;
  color: #374151;
  font-size: 15px;
  font-weight: 500;
  padding: 12px 14px;
  border-radius: 8px;
  transition: 0.15s;
}
.eco-nav__mobile a:hover {
  background: #f0fdf4;
  color: #2e7d32;
}
.eco-nav__mobile a.active {
  background: #dcfce7;
  color: #16a34a;
  font-weight: 600;
}
.eco-nav__mob-group {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #9ca3af;
  padding: 16px 14px 6px;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .eco-nav__links {
    display: none;
  }
  .eco-nav__hamburger {
    display: flex;
  }
}
`;

// Inject CSS
var style = document.createElement('style');
style.textContent = NAV_CSS;
document.head.appendChild(style);

// Inject navbar
var target = document.getElementById('eco-navbar');
if (target) {
  target.innerHTML = NAV_HTML;
} else {
  // Auto-inject at start of body
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
}

// Highlight current page
document.querySelectorAll('[data-page]').forEach(function(link) {
  if (link.dataset.page === CURRENT_PAGE) {
    link.classList.add('active');
    // Also highlight parent dropdown button
    var parent = link.closest('.eco-nav__dropdown');
    if (parent) {
      parent.querySelector('.eco-nav__drop-btn').classList.add('active');
    }
  }
});

// Hamburger toggle
var hamburger = document.getElementById('navHamburger');
var mobile = document.getElementById('navMobile');
if (hamburger && mobile) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    mobile.classList.toggle('open');
  });
  // Close on link click
  mobile.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('open');
      mobile.classList.remove('open');
    });
  });
}

})();


