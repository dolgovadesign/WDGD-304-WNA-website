import './photography.css';

import photo1 from '../../components/images/photo1.jpg';
import photo2 from '../../components/images/photo2.jpg';
import photo3 from '../../components/images/photo3.jpg';
import photo4 from '../../components/images/photo4.jpg';
import photo5 from '../../components/images/photo5.jpg';
import photo6 from '../../components/images/photo6.jpg';
import photo7 from '../../components/images/photo7.jpg';
import photo8 from '../../components/images/photo8.jpg';

function Photography() {
    return (
        <div id="photography" className="section">
                <h3 className="section-name">Photography</h3>
                <img className="photo1" src={photo1} alt="Elizaveta Dolgova" width="300" height="300" />
                <img className="photo2" src={photo2} alt="Elizaveta Dolgova" width="300" height="300" />
                <img className="photo3" src={photo3} alt="Elizaveta Dolgova" width="300" height="300" />
                <img className="photo4" src={photo4} alt="Elizaveta Dolgova" width="300" height="300" />
                <img className="photo5" src={photo5} alt="Elizaveta Dolgova" width="300" height="300" />
                <img className="photo6" src={photo6} alt="Elizaveta Dolgova" width="300" height="300" />
                <img className="photo7" src={photo7} alt="Elizaveta Dolgova" width="300" height="300" />
                <img className="photo8" src={photo8} alt="Elizaveta Dolgova" width="300" height="300" />

        </div>
    );
}

export default Photography;