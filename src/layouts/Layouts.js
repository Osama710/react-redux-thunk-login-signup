import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Root, Auth } from "../routing";
import { asynchronouslyGetFromLocal, setInLocalStorage } from '../utils/helperFunctions';
import { SelectAuth, selectAuthToken, selectIsLoading, selectIsLogin } from './redux/slice';
import { getAuthToken } from './redux/thunk';

const Layouts = () => {

  const dispatch = useAppDispatch();
  const selectLayout = useAppSelector(selectAuthToken);
  const selectLogin = useAppSelector(selectIsLogin);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (selectLayout?.token) {
      const { token } = selectLayout;
      setInLocalStorage("APP_TOKEN", token);
    }
  }, [selectLayout]);

  const checkIsTokenInLocal = async () => {
    let APP_TOKEN = await asynchronouslyGetFromLocal("APP_TOKEN");
    if (APP_TOKEN) {
      return;
    }
    else {
      dispatch(getAuthToken());
    }
  };


  useEffect(() => {
    checkIsTokenInLocal();
  }, []);

  const checkAuth = async () => {
    const user = await asynchronouslyGetFromLocal("USER_ID");
    if (user) {
      dispatch(SelectAuth(user));
    } else {
      dispatch(SelectAuth(null));
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const renderRouting = (isAuth) => {
    console.log(isAuth);
    switch (isAuth) {
      case true:
        return <Root />;
      case false:
        return <Auth />;
      default:
        return <Auth />;
    }
  };

  return (
    <>
      {isLoading !== null && isLoading ? (
        <div className="loading"></div>
      ) : (
        <div>{renderRouting(selectLogin)}</div>
      )}
    </>
  )
}

export default Layouts