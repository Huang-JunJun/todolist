<template>
    <div>
        <img
        src="https://pic3.zhimg.com/v2-790d6710072e69e90e7a3a6a533a539d_r.jpg?source=1940ef5c"
        class="img"
        >
        <v-card class="loginBox">
            <v-card-title>
            Login
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col
                            cols="12"
                            md="12"
                            >
                            <v-text-field
                                style=""
                                v-model="username"
                                label="Username"
                                :rules="rules.nameRules"
                            ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            md="12"
                            >
                            <v-text-field
                                v-model="password"
                                label="Password"
                                type="password"
                                :rules="rules.passwordRules"
                            ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            md="12"
                            >
                            <v-btn
                            color="primary"
                            class="loginBtn"
                            type="submit"
                            @click="login()"
                            >
                                sign in
                            </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import request from '../../utils/request'

export default {
    data () {
        return {
            username: '',
            password: '',
            snackbar: false,
            alert: false,
            rules: {
                nameRules: [
                    v => !!v || 'Username is required',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                ]
            }
        }
    },
    methods: {
        async login() {
            const params = {
                username: this.username,
                password: this.password
            }
            const res = await request({
                url: '/users/login',
                method: 'POST',
                data: params
            })
            if (res.status === 200) {
                console.log(res);
                console.log(res.token);
                window.sessionStorage.setItem('token', res.token)
                this.$router.push({path: '/'})
            }
        }
    },
    computed: {
        
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}

.img {
    position: fixed;
    width: 100%;
    height: 100%;
}

.loginBox {
    position: absolute;
    background-color: aliceblue;
    width: 300px;
    height: 300px;
    right: 200px;
    bottom: 150px;
}

.loginBtn {
    position: relative;
    float: right;
    bottom: 15px;
    right: 30px;
}

.alertBox {
    display: inline-block;
    position: relative;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
}
</style>