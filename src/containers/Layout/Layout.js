import React from 'react'
import Aux from '../../HOC/AuxComponent'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
class Layout extends React.Component {
     
    state = {
        showSideDrawer: false
    }
 
    MenuClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    MenuOpendHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render(){ 
        return(
            <Aux>
                <Toolbar menuToggle={this.MenuOpendHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.MenuClosedHandler} /> 
                <main className={classes.Content}>
                    {this.props.children}
                </main> 
            </Aux>
        )
    }
}

export default Layout;