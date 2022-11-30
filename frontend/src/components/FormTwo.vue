<template>
  <v-container class="d-flex justify-center">
    <v-form ref="form" v-model="valid">
      <v-card class="pa-10 d-flex flex-column">
        <v-row>
          <v-col>
            <v-text-field
              v-model="firstname"
              label="NOmeeeeeee"
              required
              :rules="rules"
              outlined
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="lastname"
              label="Cognome"
              :rules="rules"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Indirizzo e-mail"
              required
              outlined
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="Usa almeno 8 caratteri"
              outlined
              counter
              @click:append="show1 = !show1"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="controlPassword"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Conferma password"
              hint="Usa almeno 8 caratteri"
              counter
              outlined
              @click:append="show2 = !show2"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="birthPlace"
              outlined
              label="Luogo di nascita"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-menu
              v-model="dataInserita"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="birthDate"
                  label="Data di nascita"
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
                >
                </v-text-field>
              </template>
              <v-date-picker
                v-model="birthDate"
                @input="dataInserita = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="auto">
            <v-text-field
              v-model="cf"
              label="Codice fiscale"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="" @click="back"> Indietro </v-btn>
          </v-col>
          <v-col align-self="end">
            <v-btn class="" @click="submit"> Submit </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>

import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable,
} from "firebase/functions";

import { getApp } from "firebase/app";
import { eventBus } from "@/main";

const app = getApp();

const functions = getFunctions(app);

connectFunctionsEmulator(functions, "localhost", 5001);

const signUp = httpsCallable(functions, "signUp");

export default {

data: () => ({
    show1: true,
    show2: false,
    valid: false,
    dataInserita: false,
    cf: "",
    firstname: "",
    lastname: "",
    password: "",
    controlPassword: "",
    birthPlace: "",
    birthDate: "2000-01-01",

    nameRules: [
      (v) => !!v || "Almeno 8 caratteri",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    rules: [
      (value) => !!value || "Required.",
      (v) => v.length >= 8 || "Min 8 characters",
    ],
  }),

  methods: {
    back: function () {
      eventBus.$emit("nextForm", "pageone")
    },

    submit: function () {
      if (this.$refs.form.validate()) {
        signUp({ name: this.email, password: this.password })
          .then((result) => console.log(result))
          .catch((error) => console.log(error.message));
      } else {
        alert("error");
      }
    },
  },
};
</script>
