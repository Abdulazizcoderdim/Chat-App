export const signup = (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body
  } catch (error) {}
}

export const login = (req, res) => {
  console.log('Login user')
}

export const logout = (req, res) => {
  console.log('Logout user')
}
//28:00