import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ig from './img/ig.png';
import ig1 from './img/img1.jpeg';
import p1 from './img/1.png';
import p2 from './img/2.png';
import p3 from './img/3.png';
import p4 from './img/4.png';

function Dashboard() {
  const [userName, setUserName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const token = localStorage.getItem("token");

    if (!token || !storedName) {
      navigate("/login");
    } else {
      setUserName(storedName);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0, 
      backgroundImage: `url(${ig1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Navbar */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '15px 30px', 
        backgroundColor: 'rgba(16, 21, 34, 0.9)', 
        color: '#fff',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={ig} alt="Ignite Perfume Logo" style={{ width: '80px', height: '80px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '22px', color: 'rgba(234, 155, 82, 0.9)', marginRight: '15px', fontFamily:'revert-layer' }}>IGNITE PERFUME</span>
          {['/home', '/about', '/collection', '/gallery'].map((path, index) => (
            <a 
              key={index}
              href={path}
              style={{ 
                color: '#9CA3AF', 
                marginRight: '15px', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease',
                fontFamily: 'cursive',
              }}
              onMouseOver={e => e.target.style.color = '#F97352'}
              onMouseOut={e => e.target.style.color = '#9CA3AF'}
            >
              {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
            </a>
          ))}
        </div>
        {userName && <span style={{ color: 'white', marginRight: '-40%',fontFamily:'revert-layer' }}>WELCOME TO IGNITE, {userName}!</span>}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ 
              padding: '8px 16px', 
              backgroundColor: '#4B5563', 
              color: 'white', 
              borderRadius: '20px', 
              border: 'none', 
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#6B7280'}
            onMouseOut={e => e.target.style.backgroundColor = '#4B5563'}
          >
            ☰
          </button>
          {dropdownOpen && (
            <div style={{ 
              position: 'absolute', 
              right: 0, 
              top: '40px', 
              backgroundColor: '#2C3345', 
              borderRadius: '8px', 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', 
              zIndex: 1
            }}>
              {!userName && <a href="/login" style={{ display: 'block', padding: '10px', color: '#F97352', textDecoration: 'none', transition: 'background-color 0.3s ease' }} onMouseOver={e => e.target.style.backgroundColor = '#374151'} onMouseOut={e => e.target.style.backgroundColor = 'transparent'}>Login</a>}
              {!userName && <a href="/signup" style={{ display: 'block', padding: '10px', color: '#F97352', textDecoration: 'none', transition: 'background-color 0.3s ease' }} onMouseOver={e => e.target.style.backgroundColor = '#374151'} onMouseOut={e => e.target.style.backgroundColor = 'transparent'}>Sign Up</a>}
              {userName && <button onClick={handleLogout} style={{ display: 'block', padding: '10px', width: '100%', backgroundColor: 'transparent', border: 'none', color: '#F97352', cursor: 'pointer', transition: 'background-color 0.3s ease' }} onMouseOver={e => e.target.style.backgroundColor = '#374151'} onMouseOut={e => e.target.style.backgroundColor = 'transparent'}>Logout</button>}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ 
        padding: '15%', 
        textAlign: 'center', 
        color: '#FFFFFF',
        minHeight: 'calc(100vh - 70px)',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <h1 style={{ fontSize: '36px', color: '#FFFFFF', marginBottom: '20px' }}>Welcome to Ignite Perfume's</h1>
        <p style={{ fontSize: '18px', color: '#E5E7EB' }}>Explore our exclusive fragrances, manage your collections, and embrace the essence of luxury.</p>
      </div>

      {/* Our Collections Section */}
      <div style={{ padding: '40px', backgroundColor: '#f9fafb', textAlign: 'center' }}>
        <h2 style={{ fontSize: '30px', marginBottom: '20px', color: '#4F46E5' }}>Our Collections</h2>
        <p style={{ fontSize: '16px', marginBottom: '30px', color: '#6B7280' }}>Handpicked fragrances designed to ignite your senses.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {/* Floral Bliss Card */}
          <div style={{ width: '200px', padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <img src={p1} alt="Floral Bliss" style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '10px', color: '#4B5563' }}>Floral Bliss</h3>
            <p style={{ color: '#9CA3AF' }}>A bouquet of blooming florals to brighten your day.</p>
          </div>

          {/* Ocean Breeze Card */}
          <div style={{ width: '200px', padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <img src={p2} alt="Ocean Breeze" style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '10px', color: '#4B5563' }}>Ocean Breeze</h3>
            <p style={{ color: '#9CA3AF' }}>Feel the freshness of ocean waves with every spray.</p>
          </div>

          {/* Ocean Breeze Card */}
          <div style={{ width: '200px', padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <img src={p3} alt="Ocean Breeze" style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '10px', color: '#4B5563' }}>Ocean Breeze</h3>
            <p style={{ color: '#9CA3AF' }}>Feel the freshness of ocean waves with every spray.</p>
          </div>

          {/* Amber Woods Card */}
          <div style={{ width: '200px', padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <img src={p4} alt="Amber Woods" style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '10px', color: '#4B5563' }}>Amber Woods</h3>
            <p style={{ color: '#9CA3AF' }}>Warm and earthy notes for a luxurious feel.</p>
          </div>
        </div>
      </div>

      {/* Limited Edition Banner */}
      <div style={{ padding: '20px', backgroundColor: 'rgba(235, 175, 119, 0.9)', color: 'white', textAlign: 'center' }}>
        <h2 style={{ color:'black',}}>Limited Edition: Winter Fragrance</h2>
        <p>Get it before it's gone! Exclusive scent for this season.</p>
      </div>

      {/* Contact Us Section */}
      <div style={{ padding: '40px', backgroundColor: 'rgba(0, 0, 0, 0.93)', color: 'white', textAlign: 'center' }}>
        <h2 style={{ color:'white',}}>Contact Us</h2>
        <p>Email: support@igniteperfume.com | Phone: +123 456 7890</p>
      </div>
      
    </div>

    

  );
}

export default Dashboard;
