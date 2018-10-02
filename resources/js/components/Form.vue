<template>
    <v-container>
        <v-layout justify-center align-center>
            <v-flex xl6 lg6 md6 sm12 xs12>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
                <v-textarea
                outline
                label="Message"
                v-model="message"
                ></v-textarea>
                <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                ></v-checkbox>

                <v-btn
                    :disabled="!valid"
                    @click="submit"
                >
                    submit
                </v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    message: "",
    checkbox: false
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/message", {
          email: this.email,
          message: this.message
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
