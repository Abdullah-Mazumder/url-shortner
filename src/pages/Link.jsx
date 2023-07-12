import { Container, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Link = () => {
  const { id } = useParams();
  const theme = useTheme();
  const urlList = useSelector((state) => state.urlList);

  if (urlList[id]) {
    window.location.href = urlList[id];
    return;
  }

  return (
    <Container>
      <h3 style={{ textAlign: "center", color: theme.palette.secondary[500] }}>
        Your Link is invalid
      </h3>
    </Container>
  );
};

export default Link;
