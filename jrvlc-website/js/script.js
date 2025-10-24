/* --- Mobile Navigation Menu Styles --- */
.mobile-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
.mobile-nav-overlay.is-open {
    opacity: 1;
    visibility: visible;
}
.mobile-nav-container {
    width: 90%;
    max-width: 380px;
    height: 100%;
    background-color: var(--primary-color); /* Your dark green theme color */
    color: #fff;
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
}
.mobile-nav-overlay.is-open .mobile-nav-container {
    transform: translateX(0);
}
.nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.nav-close-btn { background: none; border: none; color: #fff; font-size: 2em; cursor: pointer; }
.nav-search { display: flex; padding: 15px; }
.nav-search input { width: 100%; padding: 10px; border: 1px solid #fff; background: #fff; }
.nav-search button { background: #fff; border: 1px solid #fff; padding: 0 10px; cursor: pointer; }

.nav-list { list-style: none; overflow-y: auto; flex-grow: 1; }
.nav-item { border-bottom: 1px solid rgba(255, 255, 255, 0.1); }

.nav-direct-link {
    display: block;
    padding: 18px 20px;
    color: var(--light-text);
    background-color: rgba(0, 0, 0, 0.15);
    font-weight: 600; text-decoration: none;
}
.submenu-toggle {
    background: transparent; border: none; text-align: left;
    font-family: inherit; font-size: 1.1em; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center;
    width: 100%; padding: 18px 20px;
    color: var(--light-text); font-weight: 600;
}
.submenu-toggle::after { content: '▼'; font-size: 0.7em; transition: transform 0.3s ease; }
.submenu-toggle[aria-expanded="true"] { background-color: #004d40; /* Lighter highlight green */ }
.submenu-toggle[aria-expanded="true"]::after { transform: rotate(180deg); }

.submenu {
    list-style: none; overflow: hidden; max-height: 0;
    transition: max-height 0.4s ease-out; background-color: rgba(0, 0, 0, 0.2);
}
.submenu.is-open { max-height: 1000px; }
.submenu li a, .submenu .submenu-toggle.level-2 {
    display: block; padding: 15px 20px 15px 35px;
    color: #e0e0e0; text-decoration: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.submenu li:first-child a, .submenu li:first-child button { border-top: none; }
.submenu .submenu-toggle.level-2 + .submenu li a { padding-left: 50px; }

.nav-actions { display: flex; gap: 10px; padding: 20px; }
.nav-btn {
    flex: 1; text-align: center; padding: 12px;
    background-color: #008080; /* Teal accent color */
    color: #fff; text-decoration: none;
    font-weight: 600; border-radius: 5px;
}
.nav-related { padding: 0 20px 20px; }
.nav-related h4 { font-size: 0.8em; color: #aaa; margin-bottom: 10px; }
.nav-related a { display: block; color: #ccc; text-decoration: none; padding: 5px 0; }
