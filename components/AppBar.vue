<template>
    <v-app-bar :class="`${scrollPosition > 50 ? 'change_color app-bar' : 'app-bar v-toolbar--flat'}`" color="#e9e4dd">
        <v-container fliud class="w1600">
            <v-row justify="start">
                <v-btn class="text-subtitle-2" color="black">
                    دسته بندی ها
                </v-btn>
                <v-btn class="text-subtitle-2" color="black">
                    دسته بندی ها
                </v-btn>
                <v-btn class="text-subtitle-2" color="black">
                    دسته بندی ها
                </v-btn>
            </v-row>
        </v-container>
      </v-app-bar>
</template>

<script setup>
    const scrollPosition= ref(null)
    const updateScroll = ref(function updateScroll() {
       scrollPosition.value = window.scrollY
    })
    onMounted(() => {
        window.addEventListener('scroll', updateScroll.value);
    });
</script>

<style>
   .change_color {
       backdrop-filter: blur(10px);
       background-color: rgba(255, 255, 255, .4) !important;
       
   }
   .app-bar{
        transition: 0.2s;
   }

   @media screen and (min-width: 1904px) {
    .w1600 {
        max-width: 1600px
    }
}
</style>