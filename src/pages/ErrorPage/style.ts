import Box from "@material-ui/core/Box";

import { withStyles } from "@material-ui/core/styles";
import { Alert as _Alert } from "@material-ui/lab";

export const Container = withStyles({
    root: {
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba( 255,255,255,0.4)",
    },
})(Box);

export const Alert = withStyles({
    root: {
        background: "#F7EFE2",
        color: "#F70025",
        fontWeight: "bold",
        border: "1px solid #F70025",
        margin: "40px auto",
        maxWidth: "300px",
        minWidth: "200px",
        boxShadow:
            "inset 0 0 2px #c46a62, 0 1px 1px rgba(0,0,0,0.14), 0 2px 2px rgba(0,0,0,0.14),0 0 4px rgba(0,0,0,0.14),0 0 8px rgba(0,0,0,0.14),0 0 10px rgba(0,0,0,0.14)",
    },
})(_Alert);
