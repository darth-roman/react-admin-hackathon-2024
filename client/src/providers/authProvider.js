export const authProvider = {
    async login({ username, password }) {
        if (username !== 'roman@hit' || password !== 'roman123') {
            throw new Error('Login failed');    
        }
        localStorage.setItem('username', username);
    },

    logout: () => {
        localStorage.removeItem("email")
        return Promise.resolve()
    },

    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("username");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem("username")
            ? Promise.resolve()
            : Promise.reject();
    },

    getPermissions: () => Promise.resolve(),
}