<template>
    <div>
        <h4 class="text-grey">Dashboard</h4>
        <v-container fluid class="my-5 ">
            <div class="text-grey" >
                <v-row >
                    <v-col md="2">
                        <v-btn  flat class="bg-grey-lighten-3 text-grey my-3 " @click="storBy('title')">
                            <v-icon small left>mdi-folder</v-icon>
                            <span  class=" text-lowercase ml-3 " >By Project Name</span>
                        </v-btn>
                    </v-col>
                    <v-col md="2">
                        <v-btn  flat class="bg-grey-lighten-3 text-grey my-3" @click="storBy('person')">
                            <v-icon small left>mdi-account-group-outline</v-icon>
                            <span class=" text-lowercase ml-3">By Person</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
            <div v-for="project in projects" :key="project.id">
                <v-card flat :class="`pa-5 bg-white project ${project.status}`">
                    <v-row wrap justify="center">
                        <v-col md="6">
                            <div class="caption">
                                <p class="text-grey">Project Title</p>
                                <p>{{project.title}}</p>
                            </div>

                        </v-col>

                        <v-col md="2">
                            <div class="caption">
                                <p class="text-grey">Person</p>
                                <p>{{project.person}}</p>
                            </div>

                        </v-col>
                        <v-col md="2">
                            <div class="caption">
                                <p class="text-grey">Due Date</p>
                                <p>{{project.due}}</p>
                            </div>

                        </v-col>

                        <v-col md="2">
                            <div class="caption mt-3 text-white">
                                <v-chip :class="`chip ${project.status}`">{{project.status}}</v-chip>
                            </div>

                        </v-col>

                    </v-row>
                </v-card>
                <v-divider></v-divider>
            </div>



        </v-container>
    </div>

</template>

<script>
export default {

    data: () => ({

        projects:
            [{
                id: "1", title: "Design web", person: "Cyrine ghwela", due: "2022-1-1", status: "completed"
            },
            {
                id: "2", title: "Create Ui", person: "Ali Ahmed", due: "2022-10-1", status: "ongoing"
            }
                ,
            {
                id: "3", title: "Meeting our Customer", person: "Omama Mohammed", due: "2022-11-1", status: "overdue"
            },
            {
                id: "4", title: "Add Colom", person: "Ebtehal", due: "2022-1-1", status: "completed"
            }
            ]
    }),
    methods:
    {
        storBy(props)
        {
            this.projects.sort((a,b) => a[props] < b[props] ? -1:1)
        }
    }


}
</script>

<style  scoped>
.project.completed {
    border-left: 4px solid teal
}

.project.overdue {
    border-left: 4px solid tomato
}

.project.ongoing {
    border-left: 4px solid orange
}

.chip.completed {
    background-color: teal
}

.chip.overdue {
    background-color: tomato
}

.chip.ongoing {
    background-color: orange
}
</style>