import { Alert, Snackbar, useMediaQuery } from "@mui/material";

function SnackbarMessage ({isSnackbarOpen, handleCloseSnackbar}) {
    const isSmallScreen = useMediaQuery('(max-width:1024px)');

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isSnackbarOpen}
            autoHideDuration={2000}
            onClose={handleCloseSnackbar}
            sx={{
                width: '25%',
                left: '15%',
                ...(isSmallScreen && { width: '70%' }),
            }}
        >
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }} >
                Product added to cart!
            </Alert>
        </Snackbar>
    )
}

export default SnackbarMessage;