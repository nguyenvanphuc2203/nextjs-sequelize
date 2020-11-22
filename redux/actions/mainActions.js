//Action Types
export const LOGIN_ACCOUNT = "LOGIN_ACCOUNT";
export const LOGOUT_ACCOUNT = "LOGOUT_ACCOUNT";

//Action Creator
export const loginProfile = (data) => ({
   type: LOGIN_ACCOUNT,
   data: data
});

export const logoutProfile = () => ({
    type: LOGOUT_ACCOUNT
});

const Action = {
    loginProfile,
    logoutProfile
}

export default Action;
