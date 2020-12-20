import './photography.css';

import photo1 from '../../components/images/photo1.jpg';
import photo2 from '../../components/images/photo2.jpg';
import photo3 from '../../components/images/photo3.jpg';
import photo4 from '../../components/images/photo4.jpg';
import photo5 from '../../components/images/photo5.jpg';
import photo6 from '../../components/images/photo6.jpg';
import photo7 from '../../components/images/photo7.jpg';
import photo8 from '../../components/images/photo8.jpg';

// Create Photography component
function Photography() {
    // Create an image array
    const photos = [
        { image: photo1, altText: 'Humber College' },
        { image: photo2, altText: 'Toronto'},
        { image: photo3, altText: 'Flower'},
        { image: photo4, altText: 'Newfoundland'},
        { image: photo5, altText: 'Newfoundland'},
        { image: photo6, altText: 'Ontario'},
        { image: photo7, altText: 'Scarborough'},
        { image: photo8, altText: 'St. John \'s Newfoundland'}
    ];
    return (
        <div id="photography" className="section">
            <h3 className="section-name">Photography</h3>
            <div className="photo-content">
                <div className="photos">
                    {/* Add images to Photography section */}
                    {
                        photos.map(photo => (
                            <img className="photo" src={photo.image} alt={photo.altText} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Photography;