import { Box, Divider, Modal, Stack, SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC } from "react";

const style: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
};

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export const ReusableModal: FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
}) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Stack divider={<Divider />} direction="column">
            <Typography sx={{ mb: 2 }} variant="h6" component="h4">
              {title}
            </Typography>
            <div>{children}</div>
            <Typography>{footer}</Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
