import PropTypes from "prop-types";
function Profiler(user) {
  let a = 20;
  let lname = "Alex";
  return <h1>{`${user.title} i am a ${user.name} ${lname} ${a * 2}`}</h1>;
}
export default Profiler;

Profiler.propTypes = {
  title: PropTypes.string.isRequired,
};

Profiler.defaultProps = {
  title: "Hi",
};
