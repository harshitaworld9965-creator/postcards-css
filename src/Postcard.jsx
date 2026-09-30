import './Postcard.css';

function Postcard({place, sky}) {
    return (
        <div className='postcard'>
            <div className='postcard-front' style={{"--sky"; sky}}>
            <div className='scene'>
            <div className='sun'></div>
            <div className='hills'></div>
            </div>
            <p className='greeting'>Greetings from</p>
            <h2 className='place'>{place}</h2>
            </div>
        </div>
    );
}
export default Postcard;