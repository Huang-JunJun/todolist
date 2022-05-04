<template>
  <div>
        <v-card>
            <v-responsive :aspect-ratio="16/9">
                <v-card-text>
                    <div
                    class="contextBox"
                    >
                        <div
                        v-for="item in todolist"
                        :key="item.num"
                        class="contextBoxChild"
                        >
                            <v-card
                            elevation="2"
                            width="200px"
                            height="200px"
                            >
                            <v-card-text>
                                {{ item.context }}
                            </v-card-text>
                            </v-card>
                        </div>
                        <v-btn
                        width="200px"
                        height="200px"
                        >
                            +
                        </v-btn>
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
            todolist: [
                {
                    num: 1,
                    context: '晚上去打鸡'
                },
                {
                    num: 1,
                    context: '晚上去打鸡'
                },
                {
                    num: 1,
                    context: '晚上去打鸡'
                },
                {
                    num: 1,
                    context: '晚上去打鸡'
                },
                {
                    num: 1,
                    context: '晚上去打鸡'
                },
                {
                    num: 1,
                    context: '晚上去打鸡'
                },
                {
                    num: 1,
                    context: '晚上去打鸡'
                },
                {
                    num: 2,
                    context: '晚上去打鸡'
                }
            ]
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