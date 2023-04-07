import '../components/text.css'
import { Link } from 'react-router-dom';


function Text({bigtext, text, margin, link}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="textt" style={{display:'flex', flexWrap: 'wrap', marginTop: `${margin}`}}>
            <div>
              <h3>{bigtext}</h3>
              <p>
                {text}
              </p>
            </div>
            
            <button style={{marginLeft: 'auto', height: '40px', border: '1px solid #8DD3BB', backgroundColor: 'white', padding: '8px 16px', borderRadius: '4px'}}>{link}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Text;
