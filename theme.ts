import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            fontWeight: "bold",
            border: `4px solid black`,
            color: "orange"
          }
        }
      ]      
    }
  }
});