<template>
    <v-container>
        <v-layout justify-center align-center>
            <v-flex xl6 lg6 md6 sm12 xs12>
                {{log}}
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data:()=>({
        log:''
    }),
  beforeCreate() {
      const init = this
    axios.get("/api/seek").then(resp => {
      init.log = resp.data
    });
  }
};
</script>
