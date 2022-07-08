import ServiceList from '../../data/Services.json';
import Service from './Service';
const Services = () => {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    {
                        ServiceList.map((item) =>(
                            <Service data={item}/>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Services;