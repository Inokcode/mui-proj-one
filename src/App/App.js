import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import SideMenu from "../components/SideMenu";
import logo from "../logo.svg";
import "./App.css";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        // transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    // paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <SideMenu /> */}
        <div className={classes.appMain}>
          <Header />
          <PageHeader
            title="Page Header"
            subTitle="Page Description"
            icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
          />
        </div>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;