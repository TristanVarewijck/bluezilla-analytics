import Highlighted from './Highlighted'
import HeaderText from '../HeaderText';

const Home = () => {
    return (
        <div className='Home'>
            {/* dynamic header text used as props */}
            <HeaderText title="Analytics" tagline="Bluezilla projects and there stats" />

            {/* content types */}
            <section className='container'>
                < Highlighted />
            </section>

        </div>
    );
}

export default Home;