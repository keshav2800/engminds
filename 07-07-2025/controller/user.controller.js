export const register = async(req, res) =>{
    return res.send("user registered");
}

export const login = async(req,res) => {
    return res.send("user is logged in");
}

export const updateProfile = async(req,res) => {
    return res.send("profile updated");
}

export const logout = async(req,res) => {
    return res.send("user is logged out");
}