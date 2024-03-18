import React, {useState} from "react";
import LoginProfilePicture from "../LoginProfilePicture/LoginProfilePicture";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {IState} from "@/redux/store";
import {userLogOut} from "@/redux/action-creators/UserActionCreators";
import {signOut} from "next-auth/react";
import Routes from "@/utils/routes/Routes";
import ProfileArrowIcon from "@/components/Atoms/Icons/ProfileArrowIcon";
import {useRouter} from "next/navigation";
import ButtonProfileBar from "@/components/Atoms/Buttons/ButtonProfileBar/ButtonProfileBar";

const LoginProfileMenu = () => {
  const user: IUserState = useAppSelector((state: IState) => state.user);
  const {userInfo} = user;
  const {name, role} = userInfo;
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  const handleProfileClick = () => {
    setShowMenu(false);
    router.push(
      role === "patient" ? Routes.PATIENT_PROFILE : Routes.DOCTOR_PROFILE
    );
  };

  const handleLogOutClick = () => {
    setShowMenu(false);
    dispatch(userLogOut());
    signOut({
      redirect: true,
      callbackUrl: Routes.HOME,
    });
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="w-full flex items-center gap-2 p-1 cursor-pointer transition-all duration-300 ease-in-out"
        style={{
          borderBottom: showMenu ? "2px solid #288B98" : " 2px solid white",
        }}
      >
        <LoginProfilePicture />
        <p className="text-xl font-medium text-brand-900">{name}</p>
        <ProfileArrowIcon showMenu={showMenu} />
      </button>
      {showMenu && (
        <div className="absolute w-full">
          <ButtonProfileBar
            onClick={handleProfileClick}
            text="Mi Perfil"
            key={1}
          />
          <ButtonProfileBar
            onClick={handleLogOutClick}
            text="Cerrar Sesión"
            key={2}
          />
        </div>
      )}
    </div>
  );
};

export default LoginProfileMenu;
