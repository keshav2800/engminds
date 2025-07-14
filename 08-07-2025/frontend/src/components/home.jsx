import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";


const Home = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log("you are log out");
        navigate('/signin');
    }
    return (
    <div>
        <h1>Hi this is home</h1>
        <Button
            type="submit"
            onClick={handleLogout}
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
        >
            Sign Out
        </Button>
    </div>

    )
}

export default Home