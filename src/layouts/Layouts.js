import React, { useEffect, useMemo } from 'react'
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

  // useEffect(() => {
  //   if (selectLayout?.token) {
  //     const { token } = selectLayout;
  //     setInLocalStorage("APP_TOKEN", token);
  //   }
  // }, [selectLayout]);

  // const checkIsTokenInLocal = async () => {
  //   let APP_TOKEN = await asynchronouslyGetFromLocal("APP_TOKEN");
  //   if (APP_TOKEN) {
  //     return;
  //   }
  //   else {
  //     dispatch(getAuthToken());
  //   }
  // };


  // useEffect(() => {
  //   checkIsTokenInLocal();
  // }, []);

  // const checkAuth = async () => {
  //   const user = await asynchronouslyGetFromLocal("USER_ID");
  //   if (user) {
  //     dispatch(SelectAuth(user));
  //   } else {
  //     dispatch(SelectAuth(null));
  //   }
  // };

  // useEffect(() => {
  //   checkAuth();
  // }, []);


  useEffect(() => {
    if (selectLayout?.token) {
      setInLocalStorage("APP_TOKEN", selectLayout?.token);
    }
  }, [selectLayout]);

  useEffect(() => {
    
    const checkIsTokenInLocal = async () => {
      let APP_TOKEN = await asynchronouslyGetFromLocal("APP_TOKEN");
      if (!APP_TOKEN) {
        dispatch(getAuthToken());
      }
    };
    
    const checkAuth = async () => {
      const user = await asynchronouslyGetFromLocal("USER_ID");
      dispatch(SelectAuth(user ? user : null));
    };
    
    checkIsTokenInLocal();
    checkAuth();
  }, [dispatch]);

  // const renderRouting = (isAuth) => {
  //   console.log(isAuth);
  //   switch (isAuth) {
  //     case true:
  //       return <Root />;
  //     case false:
  //       return <Auth />;
  //     default:
  //       return <Auth />;
  //   }
  // };

  // return (
  //   <>
  //     {isLoading !== null && isLoading ? (
  //       <div className="loading"></div>
  //     ) : (
  //       <div>{renderRouting(selectLogin)}</div>
  //     )}
  //   </>
  // )

  const renderRouting = useMemo(() => {
    switch (selectLogin) {
      case true:
        return <Root />;
      default:
        return <Auth />;
    }
  }, [selectLogin]);

  return isLoading === null || isLoading ? (
    <div className="loading"></div>
  ) : (
    <div>{renderRouting}</div>
  );
}

export default Layouts