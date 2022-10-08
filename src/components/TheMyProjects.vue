<template>
    <section>
        <v-container class="my-8">
            <v-expansion-panels>
                <v-expansion-panel  v-for="project in projects" :key="project.id" >
                    <v-expansion-panel-title xpand-icon="mdi-plus" collapse-icon="mdi-minus">
                        {{project.title}}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>

    </section>
</template>

<script>
export default {

    data:()=>({
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
    })

}
</script>

<style>

</style>