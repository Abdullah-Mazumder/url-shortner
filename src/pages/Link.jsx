import { useEffect } from "react";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Link = () => {
  const { id } = useParams();
  const theme = useTheme();
  const urlList = useSelector((state) => state.urlList);

  useEffect(() => {
    if (urlList[id]) {
      document.body.style.display = "none";
      window.location.href = urlList[id];
    }
  }, [id, urlList]);

  return (
    <div>
      {!urlList[id] && (
        <h3
          style={{ textAlign: "center", color: theme.palette.secondary[500] }}
        >
          Your Link is invalid
        </h3>
      )}
    </div>
  );
};

export default Link;
