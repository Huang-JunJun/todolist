<template>
    <div>
        <img
        src="https://pic3.zhimg.com/v2-790d6710072e69e90e7a3a6a533a539d_r.jpg?source=1940ef5c"
        class="img"
        >
        <v-card class="loginBox">
            <v-card-title>
            账号登录
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
                                label="用户名"
                            ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            md="12"
                            >
                            <v-text-field
                                v-model="password"
                                label="password"
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
                                登录
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
            password: ''
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

            console.log(res);
        }
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
</style>