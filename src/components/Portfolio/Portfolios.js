import Portfolio from "./Portfolio";
import Data from "../../data/Portfolios.json";

const Portfolios = () => {
    return (
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    {
                        Data.map((item) =>(
                            <Portfolio data={item} />
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Portfolios;