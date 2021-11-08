import { Icon } from '@iconify/react';
import { useState } from 'react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import shareFill from '@iconify/icons-eva/share-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// material
import { styled } from '@mui/material/styles';
import { Box, Tooltip, IconButton, DialogActions, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// @types
import { Invoice } from '../../../../@types/products';
//
import { DialogAnimate } from '../../../animate';
import InvoicePDF from './InvoicePDF';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(5)
}));

// ----------------------------------------------------------------------

type InvoiceToolbarProps = {
  invoice: Invoice;
};

export default function InvoiceToolbar({ invoice, ...other }: InvoiceToolbarProps) {
  const [openPDF, setOpenPDF] = useState(false);

  const handleOpenPreview = () => {
    setOpenPDF(true);
  };

  const handleClosePreview = () => {
    setOpenPDF(false);
  };

  return (
    <RootStyle {...other}>
      <Button color="error" size="small" variant="contained" endIcon={<Icon icon={shareFill} />}>
        Share
      </Button>

      <Button
        color="info"
        size="small"
        variant="contained"
        onClick={handleOpenPreview}
        endIcon={<Icon icon={eyeFill} />}
        sx={{ mx: 1 }}
      >
        Preview
      </Button>

      <PDFDownloadLink
        document={<InvoicePDF invoice={invoice} />}
        fileName={`INVOICE-${invoice.id}`}
        style={{ textDecoration: 'none' }}
      >
        {({ loading }) => (
          <LoadingButton
            size="small"
            loading={loading}
            variant="contained"
            loadingPosition="end"
            endIcon={<Icon icon={downloadFill} />}
          >
            Download
          </LoadingButton>
        )}
      </PDFDownloadLink>

      <DialogAnimate fullScreen open={openPDF}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <DialogActions
            sx={{
              zIndex: 9,
              padding: '12px !important',
              boxShadow: (theme) => theme.customShadows.z8
            }}
          >
            <Tooltip title="Close">
              <IconButton color="inherit" onClick={handleClosePreview}>
                <Icon icon={closeFill} />
              </IconButton>
            </Tooltip>
          </DialogActions>
          <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
            <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
              <InvoicePDF invoice={invoice} />
            </PDFViewer>
          </Box>
        </Box>
      </DialogAnimate>
    </RootStyle>
  );
}
