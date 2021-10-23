// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { authStateChk } from "../../store/actions/AuthAction";
const withAuth = (WrappedComponent) => {

  return (props) => {
    const [pending, setPending] = useState(true)
    const dispatch = useDispatch();
    const Router = useRouter();
    const accessToken = useSelector(state => state.authReducer.user)
   
    useEffect(async () => {
      dispatch(authStateChk(setPending))
      if (accessToken) {
        Router.push("home");
      }
    }, [accessToken]);

      return <WrappedComponent {...props} />;
   
  };
};

export default withAuth;