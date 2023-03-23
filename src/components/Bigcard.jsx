import Bigfoto from '../svgs/Bigfoto.svg'
import arr from '../svgs/arr.svg'
import Bigfoto1 from '../svgs/bigfoto1.svg'

function Bigcard(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="box" style={{display: 'flex', flexWrap: 'wrap', margin: '55px 0 0 0',}}>

                    <div className="coll" style={{width: '50%', padding: '12px'}}>
                        <div className="read" style={{backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '559px', borderRadius:'20px', backgroundImage: `url(${Bigfoto})`, textAlign: 'center'}}>
                            <h1 style={{fontSize: '55px', color: 'white', paddingTop: '340px'}}>Flights</h1>
                            <p style={{color: 'white'}}>Search Flights & Places Hire to our most popular<br></br> destinations</p>
                            <button style={{borderRadius: '4px', padding: '15px 36px', backgroundColor: '#8DD3BB', border: 'none'}}><img src={arr}></img>Show Flights</button>
                        </div>
                    </div>

                    <div className="coll" style={{width: '50%', padding: '12px'}}>
                        <div className="read" style={{backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '559px', borderRadius:'20px', backgroundImage: `url(${Bigfoto1})`, textAlign: 'center'}}>
                            <h1 style={{fontSize: '55px', color: 'white', paddingTop: '340px'}}>Hotels</h1>
                            <p style={{color: 'white'}}>Search Flights & Places Hire to our most popular<br></br> destinations</p>
                            <button style={{borderRadius: '4px', padding: '15px 36px', backgroundColor: '#8DD3BB', border: 'none'}}><img src={arr}></img>Show Hotels</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Bigcard