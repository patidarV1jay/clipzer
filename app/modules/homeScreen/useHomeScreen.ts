import { useEffect, useState } from 'react';
import { getUserList, useAppDispatch, useAppSelector } from '../../redux';

const useHomeScreen = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { usersList, isloading, filterUser } = useAppSelector(
    state => state.homeScreen,
  );
  useEffect(() => {
    if (currentPage <= 2 && usersList.length < 12) {
      dispatch(getUserList(currentPage));
    }
  }, [currentPage]);
  return {
    usersList,
    isloading,
    setCurrentPage,
    currentPage,
    filterUser,
  };
};

export default useHomeScreen;
