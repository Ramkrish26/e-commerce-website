import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { UserContext } from "../../components/contexts/user.context";

import { signOutUser } from "../../utils/fireBase/firebase.util";

import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOuthandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={signOuthandler}>SIGN OUT</span>) :
                            (<Link className="sign-in-link" to='/auth'>
                                SIGN IN
                            </Link>)
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;