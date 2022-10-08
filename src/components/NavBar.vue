<template>
    <nav>
        <v-app-bar float>
            <v-app-bar-nav-icon color="pink" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase text-grey">
                <span class="font-weight-light ">TodoList</span>
                <span>Wee</span>
            </v-app-bar-title>

            <v-btn flat color="pink">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer class="bg-pink-lighten-3 text-white" v-model="drawer" absolute temporary permanent>
            <v-list>
                <v-list-item class="px-2 justify-center">
                   
                    <v-avatar size="164">
                        <v-img  src="https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-cute-girl-avatar-is-available-for-commercial-use-png-image_678746.jpg"></v-img>
                    </v-avatar>
                </v-list-item>

                

                <v-list-item link class="justify-center" align="center">
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            Sandra Adams
                        </v-list-item-title>
                        <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>

                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="px-2 justify-center ">
                    <TheNewProject />
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item-group color="primary">
                    <v-list-item link v-for="link in links" :key="link.title" router :to="link.route">
                        <v-list-item-content>
                            <v-list-item-title>
                                <v-list-item-icon>
                                    <v-icon>{{ link.icon }}</v-icon>
                                </v-list-item-icon>
                                {{ link.title }}
                            </v-list-item-title>

                        </v-list-item-content>

                    </v-list-item>
                </v-list-item-group>


            </v-list>
 

        </v-navigation-drawer>
        
    </nav>
</template>
<script>

import TheNewProject from './TheNewProject.vue';

export default {
    data: () => (
        {
            drawer: true,
            links: [
                { title: 'dashboard', icon: 'mdi-view-dashboard-outline', route: '/' },
                { title: 'Projects', icon: 'mdi-folder', route: '/projects' },
                { title: 'Team', icon: 'mdi-account-group-outline', route: '/team' },
            ],
        }

    ),
    components:
    {
   
    TheNewProject
}

}
</script>

<style  scoped>

</style>