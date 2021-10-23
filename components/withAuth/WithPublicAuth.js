// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { authStateChk } from "../../store/actions/AuthAction";
const withPublicAuth = (WrappedComponent) => {
    
  return (props) => {
    const [pending, setPending] = useState(true)
    const dispatch = useDispatch();
    const Router = useRouter();
    const accessToken = useSelector(state => state.authReducer.user)
    console.log('pending', pending);
    useEffect(async () => {
        dispatch(authStateChk(setPending))
      console.log('accessToken in authSet', accessToken);
          if (!accessToken ) {
            Router.push("register");
          }
   
    }, [accessToken]);

      return <WrappedComponent {...props} />;
   
  };
};

export default withPublicAuth;