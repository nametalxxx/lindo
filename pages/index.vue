<template>

        <v-container fluid class="pt-0 w1600">
            <v-card variant="flat" height="75vh" rounded="xl" class="mx-auto mb-6">
                <v-img
                    src="/makeup.jpg"
                    height="100%"
                    cover
                ></v-img>
            </v-card>

            <v-container class="pa-0">
                <v-row justify="center" class="py-12 my-12 text-h5">
                    <h2 class="font-weight-light">تامین کنندگان <span class="font-weight-bold text-pink-lighten-2">منتخب</span></h2>
                </v-row>
                <v-row justify="start">
                    <v-col cols="12" lg="3" v-for="b in businesses">
                        <v-card class="cardiB" max-width="460" variant="elevated" elevation="0" rounded="xl" transition="slide-y-transition">
                            <v-img
                                :src="runtimeConfig.apiBase+b.attributes.featuredImage.data.attributes.url"
                                height="200px"
                                cover
                            ></v-img>
                            <NuxtLink :to="'/business/'+b.attributes.Slug">
                                <v-card-title class="text-black"> {{b.attributes.name}} </v-card-title>
                            </NuxtLink>
                            <v-card-subtitle class="mb-2 text-caption">
                                <span>
                                    <v-icon
                                    icon="mdi-map-marker"
                                    size="12"
                                    color="pink"
                                    ></v-icon>
                                    {{b.attributes.city.data.attributes.name}}
                                </span>
                                <span class="mx-1">
                                    <v-icon
                                    icon="mdi-store-marker"
                                    size="14"
                                    color="pink"
                                    ></v-icon>
                                    {{b.attributes.region.data.attributes.name}}
                                </span>
                            </v-card-subtitle>
                            <!-- <v-card-text>
                                {{b.attributes.description}}
                            </v-card-text> -->
                            <v-divider class="mx-5" thickness=".5" color="pink-lighten-5"></v-divider>
                            <v-card-subtitle class="my-2">
                                <v-chip size="x-small" variant="tonal" color="pink" class="ma-1 font-weight-medium" v-for="s in b.attributes.services.data">{{s.attributes.name}}</v-chip>
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>

</template>

<script setup>
    const runtimeConfig = useRuntimeConfig()
    const { data: businesses } = await $fetch (runtimeConfig.apiBase+'/api/businesses?populate=*')

</script>

<style>
@media screen and (min-width: 1904px) {
    .w1600 {
        max-width: 1600px
    }
}

   .cardiB {
    transition: ease 0.3s;
   }
   .cardiB:hover {
    border-bottom: #fa96b7 3px solid;
    transform: translate(0, -10px);
   }
</style>