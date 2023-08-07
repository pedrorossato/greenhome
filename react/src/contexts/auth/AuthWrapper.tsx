import {ReactNode, useContext} from 'react'
import AuthContext from './AuthContext';
import LoginPage from '../../pages/login';
const AuthWrapper = ({children}: {children: ReactNode}) => {
    const auth = useContext(AuthContext);
    if(!auth.user){
        return <LoginPage />
    }
    return (
      <>
          {children}
      </>
    );
}

export default AuthWrapper;