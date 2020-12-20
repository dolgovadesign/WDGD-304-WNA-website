import './videos.css';

function Videos() {
    return (
        <div id="videos">
                <h3 className="section-name">Videos</h3>
                <iframe width="560" height="315" title="video-1" src="https://www.youtube.com/embed/uvRLd5D3kIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" title="video-2" src="https://www.youtube.com/embed/VxqXH53EXqs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" title="video-3" src="https://www.youtube.com/embed/EOOEHhj31jk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" title="video-4" src="https://www.youtube.com/embed/SCS-AZvTAC0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Videos;