<template>
    <div class="ai-content">
        <!-- This content is used to train the HubSpot Customer Agent -->
        <h5>{{ title }}</h5>
        <p v-if="content">{{ content }}</p>
        <slot v-else></slot>
    </div>
</template>

<script>
export default {
    name: 'AiContent',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
    .ai-content {
        display: none;
    }
</style>