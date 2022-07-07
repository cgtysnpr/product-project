import { Stack } from "@mui/material";
import { Fragment } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const Stars = ({ score, action, setHoveredStar, hoveredStar }) => {
  const stars = Array(5).fill(null);

  return (
    <>
      <Stack direction="row">
        {stars.map((star, i) => (
          <Fragment key={`informationStars${i}`}>
            {(!action && score >= i + 1) || (action && hoveredStar >= i) ? (
              <StarIcon
                onMouseEnter={action ? () => setHoveredStar(i) : null}
                sx={{
                  color: "#ffa900",
                  ...(action && {
                    cursor: "pointer",
                  }),
                }}
              />
            ) : (
              <StarBorderIcon
                onMouseEnter={action ? () => setHoveredStar(i) : null}
              />
            )}
          </Fragment>
        ))}
      </Stack>
    </>
  );
};
export default Stars;
