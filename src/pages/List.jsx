import {
  Box,
  Container,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EastIcon from "@mui/icons-material/East";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import copyToClipboard from "../utils/copyToClipboard";
import { deleteUrl } from "../redux/features/urlListSlice";
import { useNavigate } from "react-router-dom";

const List = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const largeScreenMatches = useMediaQuery("(min-width:1244px)");
  const smallScreenMatches = useMediaQuery("(min-width:600px)");
  const urlList = useSelector((state) => state.urlList);

  const remove = (id) => {
    if (!window.confirm("Are you sure to delete this?")) {
      return;
    }

    dispatch(deleteUrl({ id }));
  };

  const edit = (id) => {
    navigate(`/edit/${id}`);
  };

  const openlink = (link) => {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Container>
      <Box component="div" mt={5} px={largeScreenMatches ? 0 : 3}>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {Object.keys(urlList).length > 0 ? (
            <>
              {Object.keys(urlList).map((id) => (
                <Box
                  key={shortid.generate()}
                  sx={{ display: "flex", gap: !smallScreenMatches ? 1 : 3 }}
                >
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    <TextField
                      fullWidth
                      color="secondary"
                      size="small"
                      disabled
                      value={urlList[id]}
                    />
                    <IconButton
                      aria-label="copy"
                      color="secondary"
                      onClick={() => copyToClipboard(urlList[id])}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                    <IconButton
                      aria-label="edit"
                      color="secondary"
                      onClick={() => edit(id)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton aria-label="copy" color="secondary" disabled>
                      <EastIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                    <TextField
                      fullWidth
                      color="secondary"
                      size="small"
                      disabled
                      value={window.location.origin + "/" + id}
                    />
                    <IconButton
                      aria-label="copy"
                      color="secondary"
                      onClick={() =>
                        copyToClipboard(window.location.origin + "/" + id)
                      }
                    >
                      <ContentCopyIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      onClick={() =>
                        openlink(window.location.origin + "/" + id)
                      }
                    >
                      <OpenInNewIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      onClick={() => remove(id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </>
          ) : (
            <h3
              style={{
                textAlign: "center",
                color: theme.palette.secondary[500],
              }}
            >
              Your List is Empty!!
            </h3>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default List;
