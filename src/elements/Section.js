import PropTypes from "prop-types";

function Section(props) {
  const className = ["section"];
  className.push(props.className);
  if (props.isCenterContent) className.push("center-content");

  return <section className={className.join(" ")}>{props.children}</section>;
}

Section.propTypes = {
  isCenterContent: PropTypes.bool,
  className: PropTypes.string,
};

export default Section;
