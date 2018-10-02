<template>
    <v-container fluid>
        <v-layout justify-center align-center>
                <v-btn :to="{name:'table'}">Sort table</v-btn>
                <v-btn :to="{name:'form'}">Form</v-btn>
                 <v-btn :to="{name:'seek'}">Seek</v-btn>
        </v-layout>
        <v-layout>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </v-layout>
    </v-container>
</template>
