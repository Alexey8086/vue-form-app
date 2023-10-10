<template>

    <div class="progress-bar">
        <div class="progress-bar__line">
            <div :style="{ width: progress }" class="progress-bar__line__width"></div>
        </div>

        <div class="progress-bar__description">
            <span>{{ stepsText }}</span>
            <span>{{ nextStepText }}</span>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'

export default {
    name: '',
    components: {},
    props: ['stepsText', 'nextStepText', 'progress' ],
    emits: [''],

    setup(props) {


        return {
            progress: `${props.progress}%`
        }
    }
}

</script>

<style scoped lang='scss'>
.progress-bar {
    padding: 50px 0 20px 0;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;

    .progress-bar__line {
        width: 100%;
        height: 15px;
        border-radius: 15px;
        background-color: #e9e9e9;

        .progress-bar__line__width {
            background-color: #60bf48;
            border-radius: 15px;
            height: 100%;
        }
    }

    .progress-bar__description {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        span:nth-child(1) {
            font-weight: bold;
        }

        span:nth-child(2) {
            font-size: 1.3rem;
            color: #a8a8a8;
        }
    }
}
</style> 