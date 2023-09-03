import styled from "@emotion/styled";
import { Box, Typography , Menu , MenuItem} from "@mui/material"
import { useState } from "react";
import PowerSettingNewIcon from '@mui/icons-material/PowerSettingsNew';





const Component = styled(Menu)`
    margin-top : 5px;
`

const Logout = styled(Typography)`
    fontsize : 14px; 
    margin-left : 20px;
`



const Profile = ({account, setAccount }) => {


    const [open , setOpen ] = useState(false);


    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }


    const handleClose = () => {
        setOpen(false);
    }


    const logoutUser = () => {

        setAccount('');
    }

    return (
        <>
        <Box onClick = {handleClick}>
            <Typography style={{ marginTop: 2, cursor : 'pointer' }}>
                {account}
            </Typography>

        </Box>
        <Component
            
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
        >
                <MenuItem onClick= { () => {handleClose(); logoutUser() ; }}>
                    <PowerSettingNewIcon color= "primary" fontSize = "small"/>

                    <Logout>Logout</Logout>
                </MenuItem>

            </Component>
            
        </>
        
    )
}

export default Profile;