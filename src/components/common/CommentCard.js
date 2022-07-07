import { Box, Stack, Typography, Avatar } from "@mui/material";
import Stars from "./Stars";
import { motion } from "framer-motion";
const CommentCard = ({ data }) => {
  return (
    <>
      <Box
        component={motion.div}
        layout
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "linear" }}
        sx={{
          display: "flex",
          width: "90%",
          p: 5,
          backgroundColor: "#dcdcdc",
          borderRadius: 6,
          mt: 1,
          mb: 1,
        }}
      >
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar />
              <Typography variant="h6" component="h6">
                {data.name}
              </Typography>
            </Box>
            <Stars score={data.score} />
          </Box>

          <Typography variant="subtitle1" component="p">
            {data.comment}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};
export default CommentCard;
