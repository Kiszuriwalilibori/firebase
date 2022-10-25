import React, { useEffect, lazy, Suspense, useContext } from "react";
import { connect } from "react-redux";
import { Fade } from "@material-ui/core";

import createRedirect from "js/functions/createRedirect";
import isOffline from "js/functions/isOffline";
import PersonsTableHeader from "./parts/PersonsTable/Header";
import useMessage from "hooks/useMessage";

import { login, hideError } from "js/redux/actions";
import { loadData as load } from "thunks";
import { FirebaseContext } from "contexts/firebaseContext";
import { PersonsTableContainer, PersonsPageContainer, PersonsTableBody } from "styles/style";

const Loader = lazy(() => import("../ConnectingPage/ConnectingPage"));
const PersonsTableContent = lazy(() => import("./parts/PersonsTable/Body"));
const LoginSection = lazy(() => import("./parts/LoginSection"));
const PersonsTableSortArea = lazy(() => import("./parts/PersonsTable/SortArea"));
const UserInfoCard = lazy(() => import("./parts/UserCard"));

function PersonsPage(props) {
  const { isLoading, user, load, history, isMessage, message, isAlert } = props;
  const firebase = useContext(FirebaseContext);
  const showMessage = useMessage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const redirect = React.useMemo(createRedirect(history), []);

  isOffline() && showMessage.error("W tej chwili nie masz połączenia z interenetem. Popróbuj później");

  isOffline() && redirect.landing();

  isAlert && console.warn("isAlert"); /// isAlert dodane testowo jeżeli nie bedzie wyskakiwało usunąć
  useEffect(() => {
    if (isOffline() && redirect) {
      redirect.landing();
    } else {
      if (redirect && firebase) {
        load(redirect, firebase);
      }
    }
  }, [firebase, redirect, load]);

  useEffect(() => {
    isMessage && showMessage.info(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMessage]);

  return !isOffline() ? (
    <>
      <Suspense fallback={null}>
        {user && <UserInfoCard user={user} />}
        <Loader visible={isLoading} />
        <PersonsPageContainer>
          <LoginSection />
          <Fade in={true} timeout={2000}>
            <PersonsTableContainer>
              <PersonsTableHeader />
              <PersonsTableBody>
                <PersonsTableSortArea />
                <PersonsTableContent />
              </PersonsTableBody>
            </PersonsTableContainer>
          </Fade>
        </PersonsPageContainer>
      </Suspense>
    </>
  ) : null;
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  user: state.user,
  isMessage: state.isMessage,
  message: state.message,
  isAlert: state.isAlert,
});

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(login(data)),
    hideError: () => dispatch(hideError()),
    load: (x, y) => dispatch(load(x, y)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonsPage);

/**
 * todo prawdoopodobnie przeszkadza ten  dziwaczny sposób na loader, to zasysa cały komponent connectingPage
 * todo isAlert dodane testowo jeżeli nie bedzie wyskakiwało usunąć
 * todo po pierwsze load wywołuje sie dwa razy i nie wiem dlaczego.
 */