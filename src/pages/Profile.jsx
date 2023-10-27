import { Avatar, Box, Button, Card, Container, TextField } from "@mui/material";
import React, { useContext } from "react";
import AvatarImg from "../assets/avatar.png";
import "./profile.css";
import { useForm } from "react-hook-form";
import BackButton from "../components/BackButton/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthDelete, AuthUpdate } from "../Auth/AuthSlice";
import { Authenticate } from "../Auth/AuthContext";

const Profile = () => {
  const { IsAuth,setAuth } = useContext(Authenticate);
  const Accounts = useSelector((state) => state.AuthStore.value);
  const Profile = Accounts[IsAuth.user];
  console.log(Accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function AccountDelete(){
      dispatch(AuthDelete(IsAuth.user))
      setAuth({user:0,check:false})
      navigate('/login')
  }
  function AccountUpdate(){
    dispatch(AuthUpdate(IsAuth.user))
  }
  return (
    <Container>
      <BackButton />
      <form action="" method="post" onSubmit={handleSubmit(AccountUpdate)}>
        <Box className="profile">
          <Card className="card" variant="outlined">
            <Avatar alt="Ak" src={AvatarImg} sx={{ width: 80, height: 80 }} />
            <TextField
              {...register("Name")}
              defaultValue={Profile.name || ""}
              type="text"
              label="Name"
              variant="outlined"
            />
            <TextField
              {...register("Email")}
              defaultValue={Profile.email || ""}
              type="email"
              label="Email"
              variant="outlined"
            />
            <TextField
              {...register("City")}
              defaultValue={Profile.City || ""}
              type="text"
              label="City"
              variant="outlined"
            />
            <TextField
              {...register("Pin")}
              defaultValue={Profile.Pin || ""}
              type="number"
              label="Postal"
              variant="outlined"
            />
            <Button variant="contained" color="success" type="submit">
              Update Account
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={AccountDelete}
              type="button"
            >
              Delete Account
            </Button>
          </Card>
        </Box>
      </form>
    </Container>
  );
};

export default Profile;
