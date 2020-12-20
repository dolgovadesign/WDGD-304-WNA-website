import './videos.css';

function Videos() {
    const videos = [
        { title: 'video-1', src: "https://www.youtube.com/embed/uvRLd5D3kIc" },
        { title: 'video-2', src: "https://www.youtube.com/embed/VxqXH53EXqs" },
        { title: 'video-3', src: "https://www.youtube.com/embed/EOOEHhj31jk" },
        { title: 'video-4', src: "https://www.youtube.com/embed/SCS-AZvTAC0" }
    ];

    return (
        <div id="videos" className="section">
            <h3 className="section-name">Videos</h3>
            <div className="videos-content">
                <div className="videos">
                    {
                        videos.map(video => (
                            <iframe
                                className="video-thumbnail"
                                title={video.title}
                                src={video.src}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen={true}>
                            </iframe>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Videos;