import { Box, Typography } from "@mui/material";
const tabsData = ["Details", "Comments"];
const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          mt: 2,
          mb: 2,
          cursor: "pointer",
        }}
      >
        {tabsData.map((data, i) => (
          <Box
            onClick={() => setCurrentTab(data.toLocaleLowerCase())}
            sx={{
              ...(currentTab === data.toLocaleLowerCase() && {
                borderBottom: "1px solid #000",
                marginBottom: -0.5,
              }),
            }}
            key={`tabs${i}`}
          >
            <Typography variant="h6" component="h6">
              {data}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default Tabs;
