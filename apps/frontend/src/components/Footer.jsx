const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <h3 style={styles.brand}>FARMLOC</h3>
        <p style={styles.desc}>
          Helping farmers with access to resources, tools, and real-time updates. Bridging agriculture and technology.
        </p>
      </div>
      <div>
        <h4 style={styles.linkHeader}>Quick Links</h4>
        <ul style={styles.links}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Cold Storages</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#DFF5E1', // Light green shade
    color: '#2E7D32',      // Darker green for contrast
    padding: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    borderTop: '2px solid #A5D6A7',
    width: '100%',
    boxSizing: 'border-box',
  },
  brand: {
    fontSize: '1.5rem',
    color: '#2E7D32', // Match the theme
  },
  desc: {
    maxWidth: '400px',
    marginTop: '0.5rem',
    fontSize: '0.95rem',
  },
  linkHeader: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  links: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '2rem',
  },
};

export default Footer;
