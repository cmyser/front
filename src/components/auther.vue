<template>
    <div class="wrapper">
        <div class="center">
        <div class="user">
            <h2 class="user__h2">Пожалуйста войдите в Систему</h2>
            <form class="user__from user__from-auther">
                <input v-model="username" type="text" placeholder="Login" class="user__name">
                <input v-model="password" type="password" placeholder="Password" class="user__passwoed">
                <input @click="setAuther" type="submit" value="вход в систему" class="user__btn btn-auther">
            
            </form>
            <a href="#" class="user__btn btn-register">зарегистрироваться</a>
            <a href="#" class="user__forget">забыл пароль</a>
            <p>© 2020</p>
        </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: "Auther",
        data() {
            return {
                username: '',
                password: '',
            };
        },
        mounted() {
                axios({
                    .post("http://127.0.0.1:8000/auth/token/create/"),
                    data: {
                        username: this.username,
                        password: this.password,
                    },
                    success: (responce) => {
                            alert("Thanks!!!")
                      },
                    error: (responce) => {
                        if (responce.status === 400) {
                            alert ("login error!!!!")
                        }
                    }
                });


                    }

            },
        }
    }
</script>