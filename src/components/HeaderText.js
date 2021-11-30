const HeaderText = (props) => {
    const title = props.title;
    const tagline = props.tagline;
    return (
        <div className='header-title'>
            <h1>{title}</h1>
            <p>{tagline}</p>
        </div>
    );
}

export default HeaderText;