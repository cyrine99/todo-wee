<template>

    <v-row>
        <v-list-item class="px-2 justify-center ">
            <v-btn class="bg-green-lighten-2 text-white text-lowercase" @click.stop="dialog = true">
                Add New Project
            </v-btn>
        </v-list-item>

        <v-dialog v-model="dialog" max-width="700" max-height="650">
            <v-card width="650">
                <v-card-title class="text-h5">
                    Add New Project
                </v-card-title>

                <v-card-text>
                    <v-form class="dg-red px-3">
                        <v-row>
                            <v-col sm="12" md="12">
                                <v-text-field variant="underlined" append-inner-icon="mdi-folder" label="Title">
                                </v-text-field>
                            </v-col>
                            <v-col sm="12" md="12">
                                <v-textarea variant="underlined" append-inner-icon="mdi-pencil" label="Information">
                                </v-textarea>
                                
                            </v-col>
                            <v-col sm="12" md="6">
                                <v-date-picker  :landscape="landscape" :reactive="reactive"></v-date-picker>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="bg-green-lighten-2 text-white text-lowercase" @click.stop="dialog = false">
                        Add Project
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>

</template>


<script>
export default {

    data: () => ({
        dialog: false,
    })
}
</script>

