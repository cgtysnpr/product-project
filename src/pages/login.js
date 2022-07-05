import {
  Box,
  Container,
  Card,
  TextField,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
export default function Login() {
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
                <TextField id="username" label="Username" variant="outlined" />
                <TextField
                  type="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                />
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", mb: 2 }}
            >
              <Button variant="contained">Login</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}
