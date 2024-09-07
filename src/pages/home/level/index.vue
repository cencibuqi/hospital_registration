<template>
    <div class="hospital-level">
        <h1>医院</h1>
        <div class="level-content">
            <div class="left">等级：</div>
            <ul class="specific-level">
                <li class="active">全部</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.hospital-level {
    color: #7f7f7f;

    h1 {
        font-weight: 900;
        margin: 10px 0;
    }

    .level-content {
        display: flex;

        .left {
            margin-right: 10px;
        }

        .specific-level {
            display: flex;

            li {
                margin-right: 10px;

                &.active {
                    color: #55a6fe;
                }
            }

            li:hover {
                color: #55a6fe;
                cursor: pointer;
            }
        }
    }
}
</style>