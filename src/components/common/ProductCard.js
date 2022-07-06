import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const ProductCard = ({ data }) => {
  const stars = Array(5).fill(null);
  return (
    <>
      <motion.div whileHover={{ scale: 1.02 }}>
        <Card sx={{ maxWidth: 345, cursor: "pointer" }}>
          <CardMedia
            component="img"
            height="140"
            image={data.image}
            alt={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Stack direction="row" sx={{ flexWrap: "wrap" }}>
              {stars.map((star, i) => (
                <>
                  {data.score >= i + 1 ? (
                    <StarIcon sx={{ color: "yellow" }} />
                  ) : (
                    <StarBorderIcon />
                  )}
                </>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};
export default ProductCard;
