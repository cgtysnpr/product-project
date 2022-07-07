import {
  Box,
  Container,
  Card,
  TextField,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useFormik } from "formik";
export default function Login() {
  const { login } = useAuth();
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      login(values);
    },
  });
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card>
            <form onSubmit={formik.handleSubmit}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  <TextField
                    id="username"
                    label="Username"
                    variant="outlined"
                    name="username"
                    error={formik.errors.username ? true : false}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  <TextField
                    type="password"
                    id="password"
                    label="Password"
                    variant="outlined"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </Box>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "center", mb: 2 }}
              >
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </CardActions>
            </form>
          </Card>
        </Box>
      </Container>
    </>
  );
}
