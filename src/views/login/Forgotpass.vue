<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
              <div class="col-lg-6 purple">
                <div class="p-5">
                  <div class="text-center text-white">
                    <h1 class="h4 text-white-900 mb-2">Forgot Your Password?</h1>
                    <p
                      class="mb-4"
                    >We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      >
                    </div>
                    <a href="login.html" class="btn btn-primary btn-user btn-block">Reset Password</a>
                  </form>
                  <hr>
                  <div class="text-center">
                    <router-link to="register" class="small text-white">Make a New Account!</router-link>
                  </div>
                  <div class="text-center">
                    <router-link to="/" class="small text-white">Already have an account? Login!</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

// export default {
//     data () {
//         return {
//             username: '',
//             password: '',
//             submitted: false
//         }
//     },
//     computed: {
//         ...mapState('account', ['status'])
//     },
//     created () {
//         // reset login status
//         this.logout();
//     },
//     methods: {
//         ...mapActions('account', ['login', 'logout']),
//         handleSubmit (e) {
//             this.submitted = true;
//             const { username, password } = this;
//             if (username && password) {
//                 this.login({ username, password })
//             }
//         }
//     }
// };
</script>

<style scoped>
.purple {
  background-color: #6153a4;
}
</style>
