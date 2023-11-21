import { Box, Button, Modal, Typography } from "@mui/material";

function ModalWindow ({message, isModalOpen, handleCloseModal}) {
    return (
        <Modal open={isModalOpen} onClose={handleCloseModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box p={3} bgcolor="white" borderRadius={4}>
                <Typography variant="h5" gutterBottom>
                    Order Confirmation
                </Typography>
                <Typography variant="body1">
                    {message}
                </Typography>
                <Button
                    variant="contained"
                    onClick={handleCloseModal}
                    style={{ background: '#393', borderRadius: '5px', marginTop: "25px", width: "100%" }}
                >
                    Close
                </Button>
            </Box>
        </Modal> 
    )
}

export default ModalWindow;