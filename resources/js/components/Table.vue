<template>
    <v-container>
        <v-layout justify-center align-center>
            <v-flex xl6 lg6 md6 sm12 xs12>
                <v-data-table :headers="headers" :items="table">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.number }}</td>
                        <td class="text-xs-right">{{ props.item.date.toLocaleString("ru") }}</td>
                        <td class="text-xs-right">{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.summ }}</td>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
        <v-layout justify-center align-center>
            <table class="my-sort-table">
                <thead>
                <tr>
                    <th v-for="(key,index) in Object.keys(filtredArray[0])" :key="index"><v-btn flat @click="ChangeSort(key)">Sort by </v-btn>{{key}}</th>
                </tr>
                </thead>
                    <tr v-for="(object,index) in filtredArray" :key="index">
                        <th>{{object.number}}</th>
                        <th>{{object.date.toLocaleString("ru")}}</th> 
                        <th>{{object.name}}</th>
                        <th>{{object.summ}}</th>  
                    </tr>
                </table>
        </v-layout>
    </v-container>    
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    headers: [
      {
        text: "number",
        align: "center",
        value: "number"
      },
      {
        text: "date",
        align: "center",
        value: "date"
      },
      {
        text: "name",
        align: "center",
        value: "name"
      },
      {
        text: "summ",
        align: "center",
        value: "summ"
      }
    ],
    property: "number"
  }),
  methods: {
    ChangeSort(key) {
      this.property = key;
    }
  },

  computed: {
    ...mapGetters({ table: "table/table" }),
    filtredArray() {
      return this.table.sort((a, b) => {
        var sortOrder = 1;
        if (this.property[0] === "-") {
          sortOrder = -1;
          this.property = this.property.substr(1);
        }
        var result =
          a[this.property] < b[this.property]
            ? -1
            : a[this.property] > b[this.property]
              ? 1
              : 0;
        return result * sortOrder;
      });
    }
  }
};
</script>
<style scoped>
.my-sort-table {
  width: 900px;
}
table tr {
  text-align: center;
}
</style>

