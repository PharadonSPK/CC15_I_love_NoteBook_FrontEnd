import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <div>
        <LoginContent />
        <LoginForm />
      </div>
    </div>
  );
}
//หน้านี้login มีtailwind
//หน้านี้มีโลจิกuseState evnet onSubmit เนื้อหา มีtailwind
