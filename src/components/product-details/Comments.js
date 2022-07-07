import { TextField, Button, Box } from "@mui/material";
import CommentCard from "../common/CommentCard";
import Stars from "../common/Stars";
import { motion, AnimatePresence } from "framer-motion";
const Comments = ({ formik, setHoveredStar, hoveredStar, commentData }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="comment"
          rows={3}
          multiline={true}
          label="Comment"
          variant="outlined"
          name="comment"
          error={formik.errors.comment ? true : false}
          onChange={formik.handleChange}
          value={formik.values.comment}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Stars
          setHoveredStar={setHoveredStar}
          action={true}
          hoveredStar={hoveredStar}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
          <Button type="submit" sx={{ mt: 2 }} variant="contained">
            Submit
          </Button>
        </Box>
      </form>

      <Box
        component={motion.div}
        layout
        sx={{ display: "flex", flexDirection: "column-reverse", mb: 2 }}
      >
        <AnimatePresence>
          {commentData.map((data, i) => (
            <CommentCard key={`commentCard${i}`} data={data} />
          ))}
        </AnimatePresence>
      </Box>
    </>
  );
};
export default Comments;
