const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            ©<span>{currentYear}</span> By Tristan Varewijck
        </footer>
    );
}

export default Footer;