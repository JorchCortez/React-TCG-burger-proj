import React from 'react'
import './Modal.css'
import Aux from '../../../HOC/AuxComponent'
import Backdrop from '../Backdrop/Backdrop'
class Modal extends React.Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !==  this.props.children;
    }

    componentWillUpdate(){
        console.log('[Modal] Will update')
    }

render(){
    const modalStyles = this.props.show ? "Modal show" : "Modal"

    return(
        <Aux>
            <Backdrop show={this.props.show} clicked={this.props.closeModal} />
            <div className={modalStyles}>
                {this.props.children}
            </div>
        </Aux>)
    }   
}

export default Modal;