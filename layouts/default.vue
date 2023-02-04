<template>
    <v-locale-provider rtl locale="fa">
        <v-app class="bgbg2">
                <v-container fluid class="bgbg pa-0">
                    <AppBar />
                    <v-main>
                        <slot />
                    </v-main>
                </v-container>
        </v-app>
        
    </v-locale-provider>

</template>

<style>
*,html {
 font-family: 'vazirmatn';
 letter-spacing: 0;
}

.text-h1, .text-h2, .text-h3, .text-h4, .text-h5, .text-h6 {
    font-family: 'vazirmatn' !important; 
}

.bgbg {
    background-color: #e9e4dd;

   }

.bgbg2 {
    background-color: #e9e4dd;
   }
.v-card-title{
   white-space: normal !important;
   letter-spacing: 0;
}
.v-card-subtitle{
   white-space: normal !important;
   letter-spacing: 0;
}

@media screen and (min-width: 1904px) {
    .w1600 {
        max-width: 1600px
    }
}

a {
    text-decoration: none;
}
</style>