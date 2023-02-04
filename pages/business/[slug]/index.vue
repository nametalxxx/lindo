<template>
    <v-container class="pa-0 w1600">

        <!-- <v-row class="ma-0">
            <v-col>
                <v-card rounded="xl" class="mx-auto" max-height="500">
                    <v-row class="ma-0" justify="center">
                        <v-card theme="dark" variant="flat" width="32.4%" rounded="xl"
                            class="ma-0 text-center pa-lg-10 d-flex flex-column justify-center" style="z-index: 2">
                            <v-card-title class="text-h4 justify-center" style="line-height: 3.5rem;"> {{ $route.params.slug }}
                            </v-card-title>
                            <v-card-subtitle>تهران ، شریعتی ، تقاطع میرداماد ، کوچه بهشت آسا ، پلاک 5</v-card-subtitle>
                            <v-card-text class="justify-center flex-grow-0 my-0">یک تست برای توضیحات سالن که بصرت کوتاه نوشته
                                میشود.</v-card-text>
                            <div class="d-flex">
                                <v-btn variant="outlined" size="large" color="pink-lighten-2" block>تماس</v-btn>
                            </div>
                        </v-card>
                        <v-img :aspect-ratio="3 / 4" width="65%" max-height="500" class="rounded-xl ms-n10" src="/makeup.jpg"
                            cover></v-img>
                    </v-row>
                </v-card>
            </v-col>
        </v-row> -->

        <v-row class="ma-0 flex-xs-row-reverse flex-lg-row" justify="start">
            <v-col cols="12" lg="4" class="justify-center pt-0">
                <v-card variant="flat" rounded="xl"
                    class="ma-0 text-center pa-5 pa-lg-10 d-flex flex-column justify-center h-100">
                    <v-card-title class="text-h3 justify-center font-weight-bold" style="line-height: 3.5rem;"> {{ business[0].attributes.name }}
                    </v-card-title>
                    <v-card-subtitle class="my-2">{{ business[0].attributes.address }}</v-card-subtitle>
                    <!-- <v-card-text class="justify-center flex-grow-0 my-0">یک تست برای توضیحات سالن که بصرت کوتاه نوشته
                        میشود.</v-card-text> -->

                    <v-card-actions class="d-flex">
                        <v-btn rounded="lg" variant="elevated" size="large" color="pink-lighten-2" block>تماس</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" lg="8" class="pt-0 order-first order-lg-last">
                <v-carousel
                    :continuous="true"
                    :show-arrows="false"
                    color="white"
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    height="auto"
                    cycle
                    >
                    <v-card color="transparent" flat class="pa-0" rounded="xl">
                        <v-carousel-item>
                            <v-img min-height="360" :aspect-ratio="16 / 9" :src="runtimeConfig.apiBase+business[0].attributes.featuredImage.data.attributes.url" cover></v-img>
                        </v-carousel-item>
                        <v-carousel-item>
                            <v-img min-height="360" :aspect-ratio="16 / 9" src="/makeup.jpg" cover></v-img>
                        </v-carousel-item>
                    </v-card>
                    </v-carousel>
            </v-col>
        </v-row>
        <v-row class="ma-0">
            <v-col class="pt-0 pt-lg-3">
                <v-card variant="flat" width="100%" rounded="xl" class="ma-0 pa-5 pa-lg-10">
                    <v-row>
                        <v-col cols="12" lg="8">
                            <v-card-title class="text-h5">
                                درباره {{ business[0].attributes.name }}
                            </v-card-title>
                            <v-card-text class="my-2 text-justify">
                                {{ business[0].attributes.description }}
                            </v-card-text>
                        </v-col>
                        <v-col cols="12" lg="4">
                            <v-card-title class="text-h5">
                                آدرس
                            </v-card-title>
                            <v-card-text class="my-2 text-justify">
                                {{ business[0].attributes.address }}
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-container fluid color="white" class="mt-0 mt-lg-3 pa-0 bg-white">
    
        <v-container class="w1600">
            <v-card variant="flat" width="100%" rounded="xl" class="ma-0 pa-5 pa-lg-10">
                <v-card-title class="text-h5">
                    خدمات {{ business[0].attributes.name }}
                </v-card-title>
                    <v-row>
                        <v-col cols="12" lg="4">
                            <v-list nav :lines="false" v-model:selected="selected" color="pink-lighten-2" class="mx-5">
                                    <v-list-item
                                        v-for="(s, i) in business[0].attributes.DetailedServices"
                                        :key="i"
                                        :value="i"
                                        :title="s.service.data.attributes.name"
                                        rounded="lg"
                                    ></v-list-item>

                                </v-list>

                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="12" lg="8" class="serv-drawer" v-if="myComputedProxy">

                            <!-- <v-card variant="tonal" class="ma-2">
                                <v-card-title>رنگ مو</v-card-title>
                                <v-card-text class="my-2">
                                    به Balance Massage & Wellness خوش آمدید، مکانی که ماساژ درمانی و ریلکسیشن با هم تلاقی می کنند.
                                    Balance Massage & Wellness یک سالن مدرن است که در نزدیکی خیابان آکسفورد در مرکز لندن واقع شده است.
                                    طیف سفارشی‌شده ما از درمان‌ها و رویکرد سفارشی، شما را برای هر چالشی آماده می‌کند و همچنین احساس
                                    نوازش و مراقبت می‌کند!.نوبت، تغییری در روز خود ایجاد کنید.
                                </v-card-text>
                                </v-card>
                                <v-card variant="outlined" color="grey-lighten-2" class="ma-2 text-black">
                                <v-card-title class="text-black">براشینگ</v-card-title>
                                <v-card-text class="my-2 text-black">
                                    چه به دنبال ماساژ ورزشی، ماساژ بافت عمیق، ماساژ سوئدی، درمان لاغری
                                    باشید یا بخواهید برای ماساژ زوج ها بیایید، بهترین مکان را پیدا کرده اید. بهترین ماساژی که تا به حال
                                    داشته اید را از فیزیوتراپیست های حرفه ای آموزش دیده با سابقه و تجربه بین المللی دریافت کنید. با رزرو
                                    نوبت، تغییری در روز خود ایجاد کنید.
                                </v-card-text>
                            </v-card>
                            <v-card variant="elevated" color="white" class="ma-2 text-black">
                                <v-card-title class="text-black">براشینگ</v-card-title>
                                <v-card-text class="my-2 text-black">
                                    چه به دنبال ماساژ ورزشی، ماساژ بافت عمیق، ماساژ سوئدی، درمان لاغری
                                    باشید یا بخواهید برای ماساژ زوج ها بیایید، بهترین مکان را پیدا کرده اید. بهترین ماساژی که تا به حال
                                    داشته اید را از فیزیوتراپیست های حرفه ای آموزش دیده با سابقه و تجربه بین المللی دریافت کنید. با رزرو
                                    نوبت، تغییری در روز خود ایجاد کنید.
                                </v-card-text>
                            </v-card> -->

                                    <v-card v-for=" serv in business[0].attributes.DetailedServices[selected].serviceDef" variant="outlined" color="grey-lighten-2" class="ma-2 text-black">
                                        <v-card-title class="text-black"> {{serv.title}} </v-card-title>
                                        <v-card-text class="my-2 text-black"> {{serv.description}}
                                        </v-card-text>
                                    </v-card>


                        </v-col>
                    </v-row>
            </v-card>
        </v-container>
    </v-container>
</template>

<style>
@media screen and (min-width: 1904px) {
    .w1600 {
        max-width: 1600px
    }
}
.serv-drawer {
    transition: all 0.3s ease !important;
}
</style>

<script setup>
    const route = useRoute();
    
    const runtimeConfig = useRuntimeConfig()
    const { data: business } = await $fetch (runtimeConfig.apiBase+'/api/businesses?filters[slug][$eq]='+route.params.slug+'&populate[0]=DetailedServices.service&populate[1]=DetailedServices.serviceDef.priceRange&&populate[2]=featuredImage')

const selected = ref(null)

const myComputedProxy = computed(() => selected.value)

</script>