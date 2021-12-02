import React from 'react';
const currentYear = new Date().getFullYear()

class Footer extends React.Component {
    render() {
        return (
            <footer>
                ©<span>{currentYear}</span> By Tristan Varewijck
            </footer>
        );
    }
}


export default Footer;