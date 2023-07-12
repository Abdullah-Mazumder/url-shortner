import {
  Box,
  Button,
  Container,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import isValidURL from "../utils/urlValidator";
import errorToast from "../utils/errorToast";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addUrl } from "../redux/features/urlListSlice";
import copyToClipboard from "../utils/copyToClipboard";

const Home = () => {
  const matches = useMediaQuery("(min-width:700px)");
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [short_Url, setShortUrl] = useState(null);

  const shortUrl = () => {
    if (!isValidURL(url)) {
      errorToast("Invalid URL");
      return;
    }

    const id = shortid.generate();
    dispatch(
      addUrl({
        id,
        url,
      })
    );

    setShortUrl(`${window.location.href + id}`);
    setUrl("");
  };

  useEffect(() => {
    if (short_Url) {
      setTimeout(() => {
        setShortUrl(null);
      }, 4000);
    }
  }, [short_Url]);

  return (
    <Container>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Box>
          {short_Url === null ? (
            <Box
              component="div"
              sx={{ display: matches ? "flex" : "block", gap: 4 }}
            >
              <Box
                sx={{
                  width: matches ? 500 : 300,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="Enter Long URL"
                  id="long_url"
                  color="secondary"
                  size="small"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: !matches ? 2 : 0,
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={shortUrl}
                >
                  Short url
                </Button>
              </Box>
            </Box>
          ) : (
            <Box
              component="div"
              sx={{ display: matches ? "flex" : "block", gap: 4 }}
            >
              <Box
                sx={{
                  width: matches ? 500 : 300,
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              >
                <TextField
                  fullWidth
                  color="secondary"
                  size="small"
                  disabled
                  value={short_Url}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: !matches ? 2 : 0,
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => copyToClipboard(short_Url)}
                >
                  Copy
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
