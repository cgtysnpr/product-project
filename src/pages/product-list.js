import { Container, Grid } from "@mui/material";
import productList from "../mockups/product-list-data";
import ProductCard from "../components/common/ProductCard";
export default function ProductList() {
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={3}></Grid>
          <Grid item xs={12} md={12} lg={9}>
            <Grid container spacing={2}>
              {productList.map((data, i) => (
                <Grid
                  key={`product-list-card${i}`}
                  item
                  sx={{ display: "flex" }}
                  xs={12}
                  md={6}
                  lg={3}
                >
                  <ProductCard data={data} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
