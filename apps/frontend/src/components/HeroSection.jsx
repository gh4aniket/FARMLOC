import backgroundImage from '../assets/background.jpg';

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>Empowering Farmers Across India</h1>
        <p style={styles.subtitle}>
          Access real-time resources, cold storage info, and smart tools to boost your farming journey.
        </p>
        <button style={styles.exploreBtn}>Explore Now</button>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    height: '80vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.45)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  content: {
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '800px',
    padding: '1rem',
    color: '#fff',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  exploreBtn: {
    background: '#FFD700',
    color: '#000',
    padding: '0.9rem 2rem',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    transition: 'all 0.3s',
  },
};

export default HeroSection;
