import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Stars from "./Stars";
const ProductCard = ({ data }) => {
  let navigate = useNavigate();
  return (
    <>
      <motion.div whileHover={{ scale: 1.02 }}>
        <Card
          onClick={() => navigate(`/${data.slug}`)}
          sx={{ maxWidth: 345, cursor: "pointer", boxShadow: 10 }}
        >
          <CardMedia
            component="img"
            height="140"
            image={data.image}
            alt={data.name}
          />
          <CardContent>
            <Typography
              className="text-two-clamp"
              gutterBottom
              variant="h6"
              component="div"
            >
              {data.name}
            </Typography>
            <Stars score={data.score} />
            <Typography gutterBottom variant="h6" component="h6">
              {`${data.price} ${data.currency}`}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};
export default ProductCard;
