import { Box, Button, FormControl, FormGroup, Input, InputLabel, Typography, } from '@mui/material';
import { useState } from 'react';
import { addUser } from '../service/api';

const defaultValue = {
    FullName: "",
    Username: "",
    Email: "",
    Phome: ""
}

const Adduser = () => {

    const [ user, setUser ] = useState(defaultValue);

    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const addUsertDatails = async () => {
        await addUser(user);
    }

  return (
    <Box>
        <Typography variant='h4' sx={{ textAlign:"center", marginTop:"20px" }}>Add User</Typography>
        <FormGroup sx={{ width: "50%", margin: "3% auto 0 auto" }}>
            <FormControl>
                <InputLabel>FullName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="FullName" />
            </FormControl>

            <FormControl sx={{ marginTop:"20px" }}>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Username" />
            </FormControl>

            <FormControl sx={{ marginTop:"20px" }}>
                <InputLabel>E-mail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Email" />
            </FormControl>

            <FormControl sx={{ marginTop:"20px" }}>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Phome" />
            </FormControl>
            <FormControl sx={{ marginTop:"20px" }}>
                <Button variant='contained' onClick={()=> addUsertDatails()} >Add User</Button>
            </FormControl>
        </FormGroup>
    </Box>
  )
}

export default Adduser