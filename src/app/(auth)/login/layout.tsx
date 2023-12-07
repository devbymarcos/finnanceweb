interface Children {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: Children) => {
  return (
    <>
      <h1>Aqui é layout do login</h1>
      {children}
    </>
  );
};
export default LoginLayout;
