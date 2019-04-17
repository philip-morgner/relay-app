import { css } from "glamor";

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

// App
export const headerStyle = css({
  gridArea: "header / c-start / chat-head / c-end",
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: "green",
  padding: 8
});

export const bodyStyle = css({
  display: "grid",
  gridTemplateRows:
    "[header] 50px [chat-head] 160px [chat-list] 550px [chat-end]",
  gridTemplateColumns: "[c-start] 1fr [c-mid] 2fr [c-end]",
  width: "90%",
  margin: "auto",
  border: "1px solid grey",
  boxShadow: "4px 2px 2px lightgrey"
});

// Logout
export const buttonStyle = css({
  color: "white"
});

// User
export const userContainer = css({
  padding: "8px 8px 8px 16px",
  borderBottom: "1px dashed lightgrey",
  display: "flex",
  alignItems: "flex-start",
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
  gridArea: "chat-head / c-start / chat-list / c-mid",
  textAlign: "center",
  backgroundColor: "#E8FFED",
  borderRight: "1px solid grey"
});

export const listHeaderStyle = css({
  backgroundColor: "white",
  borderBottom: "1px solid grey",
  height: "100%"
});

export const listBodyStyle = css({
  height: 550,
  overflow: "auto"
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

// Chats
export const chatStyle = css({
  gridArea: "chat-head / c-mid / chat-end / c-end",
  display: "grid",
  gridTemplateRows: "[start] 160px [mid] auto [end]",
  gridTemplateColumns: "[start] auto [end]"
});

export const chatHeaderStyle = css({
  gridArea: "start / start / mid / end",
  borderBottom: "1px solid grey",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 16
});

export const chatWindowStyle = css({
  gridArea: "mid / start / end / end",
  backgroundColor: "#E8FFED",
  display: "grid",
  gridTemplateRows: "[chat] auto [input] 50px [end]",
  gridTemplateColumns: "[start] auto [end]",
  alignItems: "end"
});
