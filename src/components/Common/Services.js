import React, {Component} from 'react';
import SingleService from "./SingleService";

class Services extends Component {
    render() {
        const services = [
            {
                title: 'E-commerce',
                description: '\n' +
                    'Donec aliquet orci eu arcu dignissim, a convallis lacus congue. Quisque at lacus maximus, ' +
                    'pulvinar massa viverra, pellentesque nibh. Vivamus sed turpis venenatis mi vulputate fringilla ' +
                    'in non sapien. Curabitur a nulla sed mi sodales dapibus. ',
                icon: 'fa-shopping-cart'
            },
            {title: 'Responsive Design', description: '\n' +
                    'Donec aliquet orci eu arcu dignissim, a convallis lacus congue. Quisque at lacus maximus,' +
                    ' pulvinar massa viverra, pellentesque nibh. Vivamus sed turpis venenatis mi vulputate fringilla' +
                    ' in non sapien. Curabitur a nulla sed mi sodales dapibus. ', icon: 'fa-laptop'},
            {title: 'Web Security', description: '\n' +
                    'Donec aliquet orci eu arcu dignissim, a convallis lacus congue. Quisque at lacus maximus,' +
                    ' pulvinar massa viverra, pellentesque nibh. Vivamus sed turpis venenatis mi vulputate fringilla ' +
                    'in non sapien. Curabitur a nulla sed mi sodales dapibus. ', icon: 'fa-lock'}
        ];
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        {services.map((service, index) => {
                            return <SingleService {...service} key={index}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;
