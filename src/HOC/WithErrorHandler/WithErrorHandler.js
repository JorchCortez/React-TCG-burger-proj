import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../AuxComponent'

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component{
        state={
            err: null,
            
        }
        
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({err:null})
                return req;
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, error =>{
                this.setState({err: error})
            })
        }
        
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.request.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({err:null})
        }
        
        render(){
                return(
                    <Aux>
                        <Modal 
                        show={this.state.err}
                        closeModal={this.errorConfirmedHandler}>
                            Whoops!, <br /> we got an error.
                            {this.state.err ? this.state.err.message : null}
                        </Modal>
                        <WrappedComponent {...this.props} />
                    </Aux>
                )
        }
    }
}

export default WithErrorHandler