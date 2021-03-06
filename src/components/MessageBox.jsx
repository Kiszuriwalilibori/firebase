import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { hideMessage } from "../js/ACTIONS/actions";

const MyAlert = withStyles({
  root: {
    background: "#1A4613",
    color: "#F5F2AA",
    fontSize: "1.25rem",
    border: "1px solid 4d684d",
    boxShadow:
      "inset 0 0 5px #4d684d, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",
  },
})(Alert);

export const UnconnectedMessageBox = (props) => {
  const { open, close, message } = props;

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={close}>
      <MyAlert severity="success" variant="filled">
        {message}
      </MyAlert>
    </Snackbar>
  );
};

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(hideMessage()),
});

const mapStateToProps = (state) => ({
  open: state.isMessage,
  message: state.message,
});

const MessageBox = connect(mapStateToProps, mapDispatchToProps)(UnconnectedMessageBox);

export default MessageBox;
