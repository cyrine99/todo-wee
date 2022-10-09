<template>
    <v-row>
        <v-list-item class="px-2 justify-center ">
            <v-btn class="bg-green-lighten-2 text-white text-lowercase" @click.stop="dialog = true">
                Add New Project
            </v-btn>
        </v-list-item>

        <v-dialog v-model="dialog" max-width="700" max-height="700" scrollable>
            <v-card>
                <v-card-title class="text-h5">
                    Add New Project
                </v-card-title>

                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field  clearable variant="underlined" prepend-icon="mdi-folder" label="Title">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea  variant="outlined"  prepend-icon="mdi-pencil" label="information">
                                    </v-textarea>

                                </v-col>
                                <v-col cols="12">
                                    <label >Due Date:</label>
                                    <input type="date" value="2022-01-01">
                                </v-col>

                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>

                <v-card-actions justify="center">
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

