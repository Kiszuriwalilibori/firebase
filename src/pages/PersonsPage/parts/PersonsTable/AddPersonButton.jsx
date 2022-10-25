import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Input } from "styles/style";

const AddPersonButton = props => {
  const { isDisabled } = props;
  return (
    <Input.Btn type="submit" id="SubmitButton" disabled={isDisabled}>
      <span>Submit</span>
    </Input.Btn>
  );
};

const mapStateToProps = state => ({
  isDisabled: state.submitDisabled,
});

export default connect(mapStateToProps, null)(AddPersonButton);

AddPersonButton.propTypes = {
  isDisabled: PropTypes.bool,
};