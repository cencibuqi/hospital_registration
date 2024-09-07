<template>
    <div class="hospital-region">
        <div class="region-content">
            <div class="left">地区：</div>
            <ul class="specific-area">
                <li class="active">全部</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li v-for="item in 10" :key="item">昌平区</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.hospital-region {
    color: #7f7f7f;
    margin-top: 10px;

    .region-content {
        display: flex;

        .left {
            margin-right: 10px;
            min-width: 48px;
        }

        .specific-area {
            display: flex;
            flex-wrap: wrap;

            li {
                margin-right: 10px;
                margin-bottom: 10px;

                &.active {
                    color: #55a6fe;
                }
            }

            li:hover {
                color: #55a6fe;
            }
        }
    }
}
</style>