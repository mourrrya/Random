import { KeyboardArrowRight } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./App.css";
import { ReusableModal } from "./Modal";

enum filters {
  vendor = "Vendor",
  model = "Model",
  ocppVersion = "OCPP Version",
  noConnectors = "No Connectors",
  connectorType = "Connector Type",
  qrCode = "QR Code",
  status = "Status",
  tenant = "Tenant",
}
type FilterType = keyof typeof filters;

function App() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);
  const [selectedField, setSelectedField] = useState<FilterType>("vendor");

  const onClickListItem = (filterType: FilterType) => {
    setSelectedField(filterType);
  };

  const onClickCheckBox = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const renderFilterList = () => (
    <List dense disablePadding sx={{ width: "100%" }}>
      {Object.entries(filters).map(([field, value]) => (
        <ListItemButton
          key={field}
          selected={selectedField === field}
          onClick={() => onClickListItem(field as FilterType)}
        >
          <ListItemText primary={value} />
          <KeyboardArrowRight color="action" />
        </ListItemButton>
      ))}
    </List>
  );

  const renderVendorFilterForm = () => {
    return (
      <Box
        sx={{ bgcolor: "background.paper", height: "100%", overflow: "auto" }}
      >
        <TextField
          placeholder="Search"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: <SearchIcon color="action" />,
          }}
        />

        <List dense sx={{ width: "100%" }}>
          {[
            "Vendor 1",
            "Vendor 2",
            "Vendor 3",
            "Vendor 4",
            "Vendor 5",
            "Vendor 6",
          ].map((value) => {
            return (
              <ListItem key={value} disablePadding>
                <ListItemButton onClick={onClickCheckBox(value)} dense>
                  <ListItemIcon sx={{ minWidth: "initial" }}>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                    />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  };

  const renderFilter = () => {
    switch (selectedField) {
      case "vendor":
        return renderVendorFilterForm();
      case "model":
        return;
      case "ocppVersion":
        return;
      case "noConnectors":
        return;
      case "connectorType":
        return;
      case "qrCode":
        return;
      case "status":
        return;
      case "tenant":
        return;

      default:
        return <></>;
    }
  };

  const renderFooter = () => (
    <Stack
      sx={{ mt: 2 }}
      justifyContent="space-between"
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
    >
      <Button fullWidth size="small" variant="outlined">
        Reset
      </Button>
      <Button fullWidth size="small" variant="contained">
        Apply Filter
      </Button>
    </Stack>
  );

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Learn React</button>
      <ReusableModal
        title="Filter"
        open={open}
        onClose={() => setOpen(false)}
        footer={renderFooter()}
      >
        <Stack
          sx={{
            maxHeight: 288,
            minWidth: 500,
            width: "100%",
          }}
          divider={<Divider />}
          direction="row"
        >
          {renderFilterList()}
          <Box sx={{ width: "100%", p: 1 }}>{renderFilter()}</Box>
        </Stack>
      </ReusableModal>
    </div>
  );
}

export default App;
