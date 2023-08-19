import { Fab, Modal, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Add as AddIcon } from "@mui/icons-material"
// import { useState } from 'react'

const Add = () => {
    // const {open, setOpen} = useState(false);
  return (
    <Box>
        <Tooltip 
        title="New Post" 
        sx={{ position:"fixed", bottom:20, left: { xs:230, md: 30}, }}>
        <Fab color="primary" aria-label="add">
        <AddIcon />
        </Fab>
        </Tooltip>

        <Modal
//   open={open}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={200} bgcolor={"white"} p={3} >
    Hello
  </Box>
</Modal>
    </Box>
  )
}

export default Add