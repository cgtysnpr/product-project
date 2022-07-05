import { Box } from "@mui/material";
import { motion } from "framer-motion";
const LoadingScreen = () => {
  return (
    <>
      <Box
        sx={{
          right: 0,
          bottom: 0,
          zIndex: 99999,
          width: "100%",
          height: "100%",
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Box
          component={motion.div}
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 0,
            repeat: Infinity,
          }}
          sx={{
            width: 25,
            height: 25,
            borderRadius: "50%",
            backgroundColor: "red",
            position: "relative",
          }}
        />
        <Box
          component={motion.div}
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 0.5,
            repeat: Infinity,
          }}
          sx={{
            width: 25,
            height: 25,
            borderRadius: "50%",
            backgroundColor: "red",
            position: "relative",
          }}
        />
        <Box
          component={motion.div}
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 1,
            repeat: Infinity,
          }}
          sx={{
            width: 25,
            height: 25,
            borderRadius: "50%",
            backgroundColor: "red",
            position: "relative",
          }}
        />
      </Box>
    </>
  );
};
export default LoadingScreen;
