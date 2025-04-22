import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {AppDispatch, RootState} from '../store/stores';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
