export default function Wrapper({ children }) {
  return (
    <div className='form-outline row authWrapper-style  '>
      <div className='form-outline auth-inner col-sm-2 col-md-7 col-lg-4 bg-success '>
        {children}
      </div>
    </div>
  );
}
