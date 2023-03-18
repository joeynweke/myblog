function EmailSubscriptionPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {showPopup && (
        <div className="popup">
          <h2>Subscribe to our newsletter</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <button type="submit">Subscribe</button>
          </form>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        }
        
        h2 {
          margin-top: 0;
        }
        
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        label {
          margin-bottom: 10px;
        }
        
        input {
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
          max-width: 300px;
        }
        
        button[type="submit"], button {
          padding: 10px;
          border-radius: 5px;
          border: none;
          background-color: #4CAF50;
          color: #fff;
          cursor: pointer;
          width: 100%;
          max-width: 300px;
        
       }

           button[type="submit"]:hover, button:hover {
      background-color: #3e8e41;
    }
    
    button[type="submit"]:active, button:active {
      background-color: #3e8e41;
      transform: translateY(1px);
    }
    
    button[type="submit"]:focus, button:focus {
      outline: none;
    }
    
    button {
      margin-top: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  `}</style>
</>

export default EmailSubscriptionPopUp;
