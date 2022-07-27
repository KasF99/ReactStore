import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props{
    DarkMode: boolean;
    handleThemeChange: () => void;
}
export default function Header({ DarkMode, handleThemeChange}: Props) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <Switch checked={DarkMode} onChange={handleThemeChange} />
            </Toolbar>
        </AppBar>
    )
}