import {
  Box,
  Button,
  Container,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import isValidURL from "../utils/urlValidator";
import errorToast from "../utils/errorToast";
import { editUrl } from "../redux/features/urlListSlice";
import successToast from "../utils/successToast";

const Edit = () => {
  const matches = useMediaQuery("(min-width:700px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const urlList = useSelector((state) => state.urlList);
  const [url, setUrl] = useState(urlList[id]);

  const edit = () => {
    if (!isValidURL(url)) {
      errorToast("Invalid URL");
      return;
    }

    dispatch(editUrl({ id, url }));

    setTimeout(() => {
      navigate("/list");
      successToast("URL Edited successfully!!");
    }, 400);
  };

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
                label="Endit URL"
                id="long_url"
                color="secondary"
                size="small"
                value={url}
                autoFocus={true}
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
                onClick={edit}
              >
                edit url
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Edit;
