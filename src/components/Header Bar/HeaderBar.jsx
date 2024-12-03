import { styled } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';

const Header = styled(AppBar)`
    z-index:1201;
    background-color:white;
    height:70px;
    
`;

const Title = styled(Typography)`
    color : #5f6368;
    font-size: 24px;
    margin-left: 25px;
`

const HeaderBar = ({ open, handleDrawer }) => {

    return (
        <Header open={open}>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    edge="start"
                    sx={{ marginRight: '20px' }}
                >
                    <MenuIcon />
                </IconButton>
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />
                <Title>
                    Keep
                </Title>
            </Toolbar>
        </Header>
    )
}

export default HeaderBar;