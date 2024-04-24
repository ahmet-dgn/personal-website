export default function Container({ children, style }) {
  return (
    <div className={`mx-auto container px-4 sm:px-6 lg:px-8 ${style}`}>
      {children}
    </div>
  );
}
