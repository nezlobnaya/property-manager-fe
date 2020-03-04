import React, { useState, useEffect, useCallback } from 'react';
import { Link, navigate } from '@reach/router';
// eslint-disable-next-line import/no-unresolved
import { useDispatch } from 'react-redux';
import logo from '../../assets/img/logo.png';
import { auth, getUserInfo } from '../../store/actions';
import { AuthFlip } from '../Auth/AuthFlip';
import { useModal } from '../../hooks/useModal';

const login = auth('/auth/login');
const signup = auth('/auth/register');

export const HorNav = () => {
  const { isShowing, toggle, close } = useModal();

  const dispatch = useDispatch();

  const loginFn = useCallback(
    ({ email, password }) =>
      dispatch(login(email, password))
        .then(() => {
          dispatch(getUserInfo()).then(() => {
            navigate('/dashboard');
          });
        })
        // eslint-disable-next-line no-console
        .catch(err => console.error(err)),
    [dispatch]
  );

  const signupFn = useCallback(
    ({ email, password, userType: type }) =>
      dispatch(signup(email, password, type))
        .then(() => dispatch(getUserInfo()).then(() => navigate('/dashboard')))
        // eslint-disable-next-line no-console
        .catch(err => console.error(err)),
    [dispatch]
  );

  const [navClass, setNavClass] = useState('nav-top');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNavClass(`${navClass} nav-white-bg`);
    });
  }, [navClass]);

  return (
    <>
      <nav className={navClass}>
        <Link className="logo-link" to="/">
          <img className="nav-logo" src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <a href="#spotlight" className="nav-link" alt="Features">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link" alt="Pricing">
              Pricing
            </a>
          </li>
          <li>
            <button className="nav-link" type="button" onClick={() => toggle()}>
              Login
            </button>
          </li>
        </ul>
        <AuthFlip
          loginSubmit={loginFn}
          signupFn={signupFn}
          close={close}
          isShowing={isShowing}
        />
      </nav>
    </>
  );
};

export const VertNav = () => {
  return (
    <nav className="nav-side">
      <ul>
        <li>
          <Link className="profile" to="profile">
            {/* <Avi width={75} height={75} name="avatar" /> */}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/dashboard">
            Overview
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="properties">
            Properties
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HorNav;
