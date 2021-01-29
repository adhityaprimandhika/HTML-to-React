import PropTypes from "prop-types";

function Lists(props) {
  const className = ["list-reset"];
  className.push(props.className);
  if (props.isTextSmall) className.push("text-xs");

  return (
    <ul className={className.join(" ")}>
      {props.data.map((list, index) => {
        return (
          <li key={index} className={list.isChecked ? "is-checked" : ""}>
            {list.content}
          </li>
        );
      })}
    </ul>
  );
}

Lists.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  isTextSmall: PropTypes.string,
};
export default Lists;
