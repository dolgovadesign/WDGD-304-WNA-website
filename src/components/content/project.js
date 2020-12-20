function Project(props) {
    return (
        <div className=>
            <img src={props.photo} alt={props.name} className="project-image" />
            <h3>{props.name}</h3>
            <p className="w3-opacity">{props.jobTitle}</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p>
                <button className="w3-button w3-light-grey w3-block">Contact</button>
            </p>
        </div>
    );
}

export default TeamMember;