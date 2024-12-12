const Banner = () => {
    return (
        <>
        <div className="video-banner">
            <video autoplay muted loop class="background-video">
                <source src="your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div class="banner-content">
                <h1><small>Welcome to </small><br />
                <span>Smash</span> Technology</h1>
            </div>
        </div>
        </>
    )
}
export default Banner;