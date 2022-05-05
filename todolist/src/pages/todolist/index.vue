<template>
  <div>
        <v-card>
            <v-responsive :aspect-ratio="16/9">
                <v-card-text>
                    <div
                    class="contextBox"
                    >
                        <div>
                            <v-card
                            v-for="item in todolist"
                            :key="item.num"
                            class="contextBoxChild"
                            elevation="2"
                            width="200px"
                            height="200px"
                            >
                            <v-card-text>
                                <div>
                                    {{ item.todoTime }}
                                </div>
                                {{ item.context }}
                            </v-card-text>
                            </v-card>
                        </div>
                        <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="600px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                width="200px"
                                height="200px"
                                v-bind="attrs"
                                v-on="on"
                                >
                                    +
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                <span class="text-h5">Add to-do</span>
                                </v-card-title>
                                <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="6"
                                        >
                                            <v-menu
                                            v-model="menu"
                                            :close-on-content-click="false"
                                            :nudge-right="40"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="date"
                                                label="To-do Date"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                            </template>
                                            <v-date-picker
                                            v-model="date"
                                            @input="menu = false"
                                            ></v-date-picker>
                                        </v-menu>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="6"
                                        ><v-menu
                                        ref="menu"
                                        v-model="menu2"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="time"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="290px"
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="time"
                                            label="Picker in menu"
                                            prepend-icon="mdi-clock-time-four-outline"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-time-picker
                                        v-if="menu2"
                                        v-model="time"
                                        full-width
                                        @click:minute="$refs.menu.save(time)"
                                        ></v-time-picker>
                                    </v-menu>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="12"
                                        >
                                            <v-textarea
                                            v-model="context"
                                            solo
                                            name="input-7-4"
                                            label="Add items"
                                            ></v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                </v-card-text>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="dialog = false"
                                >
                                    close
                                </v-btn>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="addTodo()"
                                >
                                    comfirm
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-card-text>
            </v-responsive>
        </v-card>
  </div>
</template>

<script>
export default {
    data () {
        return {
            menu: null,
            menu2: null,
            time: null,
            date: null,
            todolist: [],
            dialog: false,
            todoTime: '',
            context: ''
        }
    },
    methods: {
        addTodo () {
            this.dialog = false
            this.todolist.push({
                context: this.context,
                todoTime: `${this.date} ${this.time}`
            })
            this.context = ''
        }
    }
}
</script>

<style>
.contextBox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.contextBoxChild {
    display:inline-block;
}
</style>