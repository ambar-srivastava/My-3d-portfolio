const Button = ({ name, containerClass, isBeam }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className=" relative z-10 fiex h-3 w-3">
          <span className=" btn-ping" />
          <span className=" btn-ping.dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
