import { useCallback } from 'react';
import { useAppDispatch } from 'src/store/hooks';
import { logout as logoutAction, setUserData, type AuthUser } from 'src/store/AuthSlice';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/AppStore';

export interface AuthSession {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, token, isAuthenticated } = useSelector((state:RootState) => state?.auth);
  const login = useCallback(
    ({ user, accessToken, refreshToken }: AuthSession) => {
      dispatch(setUserData({ user, token: accessToken, refreshToken }));
    },
    [dispatch],
  );

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  return { user, token, isAuthenticated, login, logout };
};
