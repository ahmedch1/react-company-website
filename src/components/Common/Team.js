import React, {Component} from 'react';
import TeamMember from './TeamMember';
import team1 from '../assets/img/team/ahmed.png';
import team2 from '../assets/img/team/amine.jpg';
import team3 from '../assets/img/team/aziz.jpeg';

const members = [{
    name: 'Ahmed Chouihi', role: 'CEO & FOUNDER', image: team1
}, {
    name: 'Amine Mokni', role: 'Js Trainer', image: team2
},
    {
        name: 'Aziz Sridi', role: 'Intern', image: team3
    }
]

class Team extends Component {
    render() {

        return (
            <section className="bg-light" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="img/team/ahmed.png" alt=""/>
                                <h4>Ahmed Chouihi</h4>
                                <p className="text-muted">CEO & FOUNDER</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="img/team/amine.jpg" alt=""/>
                                <h4>Amine Mokni</h4>
                                <p className="text-muted">Js Trainer</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="img/team/aziz.jpeg" alt=""/>
                                <h4>Aziz Sridi</h4>
                                <p className="text-muted">Intern</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aut
                                eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut
                                unde.</p>
                        </div>
                    </div>
                </div>
            </section>
        )

    }
}

export default Team;