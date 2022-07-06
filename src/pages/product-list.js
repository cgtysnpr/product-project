import { Container, Grid } from "@mui/material";
import productList from "../mockups/product-list-data";
import ProductCard from "../components/common/ProductCard";
export default function ProductList() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {productList.map((data, i) => (
            <Grid item sx={{ display: "flex" }} xs={12} md={6} lg={3}>
              <ProductCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
