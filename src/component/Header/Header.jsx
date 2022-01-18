import './Header.css';
import React from 'react';
import { Modal } from '../Modal/Modal';

class Header extends React.Component {

  state = {
    modal: false
  }

  toggleModal = () => {
    this.state.modal ? this.setState({modal: false}) : this.setState({modal: true});
  }

  render() {

    return (
      <nav className="navigate">
        <div className="navigate__wrapper">
          <a href="#" className="navigate__logo">React Shop</a>
          <ul className="navigate__links">
            <li className="navigate__link">
              <div onClick={this.toggleModal} className="navigate__info">info</div>
            </li>
            <li className="navigate__link"><a href="https://github.com/m4k4rov" target="_blank" rel="noreferrer">Repository</a></li>
          </ul>
        </div>
        {this.state.modal ? <Modal toggle={this.toggleModal} /> : ''}
      </nav>
    )
  }
}

export {Header};