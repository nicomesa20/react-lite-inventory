import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { reset, getCompanies } from '../features/companies';

export const useCompany = () => {
  const dispatch = useAppDispatch();

  const { companies, isLoading, isSuccess } = useAppSelector(
    (state) => state.company
  );
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);


  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return { companies, isLoading };
};