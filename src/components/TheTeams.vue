<template>
    <section>
        <v-container fluid class="my-8">
            <v-row>
                <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                    <v-card elevation="10" align="center" class="pt-5">
                        <v-avatar size="90"><v-img :src="person.avatar"></v-img></v-avatar>
                        <v-card-title>{{person.name}}</v-card-title>
                        <v-card-subtitle>{{person.job}}</v-card-subtitle>
                        <v-card-actions>
                            <v-btn flat class="text-grey">
                                <v-icon small left>mdi-chat-outline</v-icon>
                                <span class="text-lowercase ml-1">message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </v-col>

            </v-row>
        </v-container>
    </section>
</template>

<script>
export default
    {
        data:()=>({
            team: [
                { name: 'Cyrine Ghwela', job: 'Web Developer', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEBrviTAPufgd9Teo_UMr6do7uKpCAVxlRQ&usqp=CAU' },
                { name: 'Ali Mohamed', job: 'UI/UX', avatar: 'https://cdn3d.iconscout.com/3d/premium/thumb/cute-boy-avatar-5460344-4544330.png' },
                { name: 'Abdo Ghwela', job: 'App Developer', avatar: 'https://cdn3d.iconscout.com/3d/premium/thumb/young-bussinesman-avatar-5460205-4544331.png' },
                { name: 'Omama Ghwela', job: 'HR', avatar: 'https://us.123rf.com/450wm/molokowall/molokowall2105/molokowall210500007/168737128-jeune-femme-jane-montrant-le-signe-ok-des-%C3%A9motions-positives-avec-des-gestes-illustration-de-personn.jpg?ver=6' },
                { name: 'Ayobe Mohamed', job: 'Net Works', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKVhxZW0HeFZuIciaN3drLVuZ0TDOMMbwycZ31YWWh2qt7ohqZXUoJu-5swXxg7RzwzvE&usqp=CAU' },
                { name: 'Mohammed Ghwela', job: 'CEO', avatar: 'https://cdn3d.iconscout.com/3d/premium/thumb/geek-student-5748695-4800738.png' },
             
            ],
        })

        

    }
</script>

<style>

</style>