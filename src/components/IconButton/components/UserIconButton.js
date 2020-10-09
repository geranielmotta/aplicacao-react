import React from "react";
import { useSelector } from "react-redux";
import IconButton from "../index";
import Avatar from "@material-ui/core/Avatar";

const UserIconButton = (props) => {

  const activeLoading = useSelector(state => state.loading);

  return (
    <IconButton loading={activeLoading} {...props}>
      <Avatar alt="Remy Sharp" src="https://media.glassdoor.com/sql/682852/meta-it-squarelogo-1561657393875.png"/>
    </IconButton>
  );
};

export default UserIconButton;
