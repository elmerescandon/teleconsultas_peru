import Button from "@/components/atoms/Button/Button";

const LoginBar = () => {
  return (
    <div className="flex gap-3">
      <Button content="Login" />
      <Button content="Register" />
    </div>
  );
};

export default LoginBar;
