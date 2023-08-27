import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IAppDispatch, IState } from "./store";

export const useAppDispatch = () => useDispatch<IAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;