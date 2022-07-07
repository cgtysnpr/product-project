import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productDetailsData from "../mockups/product-details-data";
import { Grid, Container } from "@mui/material";
import {
  ProductImage,
  ProductInformation,
  Tabs,
  Comments,
} from "../components/product-details";
import LoadingScreen from "../components/LoadingScreen";
import { useFormik } from "formik";
import commentsData from "../mockups/comment-data";
export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState();
  const [currentTab, setCurrentTab] = useState("details");
  const [commentData, setCommentData] = useState(commentsData);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [totalComment, setTotalComment] = useState();
  const [currentScore, setCurrentScore] = useState();
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    const response = productDetailsData.find((data) => data.slug === id);
    if (response) {
      setProductDetails(response);
      setTotalComment(response.totalComments);
    } else navigate("/");
  }, [id, navigate]);
  const validate = (values) => {
    const errors = {};
    if (!values.comment) {
      errors.comment = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validate,
    onSubmit: (values) => {
      handleComment(values);
    },
  });
  const handleComment = (values) => {
    var data = {
      name: "User Name",
      comment: values.comment,
      score: hoveredStar + 1,
    };
    setCommentData([...commentData, data]);
    setTotalComment((prevTotalComment) => prevTotalComment + 1);
    setHoveredStar(0);
  };
  useEffect(() => {
    const totalScore = Object.keys(commentData).reduce(function (
      previous,
      key
    ) {
      previous += commentData[key].score;
      return previous;
    },
    0);
    setCurrentScore(totalScore / totalComment);
  }, [totalComment, commentData]);
  if (!productDetails) {
    return <LoadingScreen />;
  }
  return (
    <>
      {productDetails ? (
        <>
          <Container maxWidth="lg">
            <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={5} sx={{ mt: 2 }}>
                <ProductImage image={productDetails.image} />
              </Grid>
              <Grid item xs={12} md={6} lg={7} sx={{ mt: 2 }}>
                {currentTab === "details" ? (
                  <ProductInformation
                    data={productDetails}
                    totalComment={totalComment}
                    currentScore={currentScore}
                  />
                ) : (
                  <Comments
                    setHoveredStar={setHoveredStar}
                    hoveredStar={hoveredStar}
                    formik={formik}
                    commentData={commentData}
                  />
                )}
              </Grid>
            </Grid>
          </Container>
        </>
      ) : null}
    </>
  );
}
