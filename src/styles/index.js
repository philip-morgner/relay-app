import { css } from "glamor";

// App
export const headerStyle = css({
  position: "fixed",
  height: 50,
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: "green",
  zIndex: 1,
  padding: 8
});

export const bodyStyle = css({
  paddingTop: 50
});

// Login
export const loginContainer = css({
  width: 300,
  height: 270,
  borderRadius: 10,
  boxShadow: "1px 2px #B2B2B2",
  backgroundColor: "#D4EFFF",
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

export const pageTitle = css({
  margin: 20,
  // bulma css overwrites default
  fontSize: "2em"
});

export const inputStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: 8
});

export const buttonContainerStyle = css({
  width: "inherit",
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 16,
  marginTop: 16
});

// Logout
export const buttonStyle = css({
  color: "white"
});

// User
export const userContainer = css({
  margin: "0 32px",
  padding: 8,
  borderBottom: "1px dashed lightgrey",
  display: "flex",
  alignItems: "flex-start",
  overflow: "hidden",
  backgroundColor: "white"
});

export const personalDataStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 8,
  marginLeft: 16,
  "& div > dd": {
    display: "inline-block",
    width: 100,
    textAlign: "left"
  }
});

export const imageStyle = css({
  borderRadius: 50,
  height: 50,
  width: 50
});

export const italic = css({
  fontStyle: "italic"
});

// UserList
export const listStyle = css({
  width: "33%",
  // vertically just the whole damn page
  height: 1000,
  textAlign: "center",
  backgroundColor: "#E8FFED"
});

export const sectionTitle = css({
  padding: 20,
  // bulma css overwrites default
  fontSize: "2em"
});

export const currUserStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 16,
  margin: "0 32px"
});

export const ellipsisStyle = css({
  "& :hover": {
    cursor: "pointer"
  }
});
