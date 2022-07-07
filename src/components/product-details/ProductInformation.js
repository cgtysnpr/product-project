import { Typography, Box } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Stars from "../common/Stars";
const ProductInformation = ({ data, totalComment, currentScore }) => {
  const date = new Date(data.date).toLocaleDateString();
  return (
    <>
      <Typography variant="h5" component="h5">
        {data.name}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <Typography variant="h5" component="h5">
          {`${data.price} ${data.currency}`}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stars score={currentScore} />
          <Typography component="p" variant="subtitle1">
            {`(${totalComment})`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" component="p">
        {data.description}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: 2 }}>
        <LocalShippingIcon />
        <Typography variant="body1" component="p">
          {`Arrival Date : ${date}`}
        </Typography>
      </Box>
    </>
  );
};
export default ProductInformation;
