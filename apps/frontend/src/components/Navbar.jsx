import { FaLeaf } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <FaLeaf style={{ color: '#4CAF50', fontSize: '2rem' }} />
        <span style={styles.brand}>FARMLOC</span>
      </div>
      <ul style={styles.navLinks}>
        <li><a style={styles.link} href="#">Home</a></li>
        <li><a style={styles.link} href="#">Resources</a></li>
        <li><a style={styles.link} href="#">Cold Storages</a></li>
        <li><a style={styles.link} href="#">About</a></li>
        <li><a style={styles.link} href="#">Contact</a></li>
      </ul>
      <button style={styles.loginBtn}>Log In</button>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#fff',
    color: '#333',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  brand: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  loginBtn: {
    background: '#4CAF50',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
};

export default Navbar;
