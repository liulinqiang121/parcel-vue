<template>
    <div>
        <div>
            <headCM />
        </div>
        <div>
            <router-view />
        </div>
    </div>

</template>

<script>
    import headCM from './header'
    export default {
        name: 'App',
        components: {
            headCM
        }
    }
</script>