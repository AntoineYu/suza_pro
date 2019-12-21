<template>
  <div class="params-info" v-if="itemParams.length !== 0">
      <p>Paramètres de produit</p>
      <div v-for="(item, index) in itemParams" :key="index">
          <table class="tb-info" v-for="(param, key, i) in item" :key="key">
            <tr>
                <th>{{ key }}</th>
            </tr>
            <tr v-for="(infos, indey) in param" :key="indey">
                <div v-for="(info, k, indez) in infos" :key="k">
                    <td class="tb-info-key">{{ k }}</td>
                    <td class="tb-info-value">{{ info }}</td>
                </div>
            </tr>
        </table>
      </div>
  </div>
</template>
<script>
export default {
    name: 'DetailParamsInfo',
    props: {
        itemParams: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>
    .params-info {
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }

    .params-info p {
        font-size: 18px;
        margin-bottom: 10px;
        text-align: center;
    }

    .params-info table {
        width: 100%;
        border-collapse: collapse;
    }

    .params-info table tr {
        height: 50px;
    }

    .params-info table tr th {
        text-align: left;
    }

    .params-info table tr td {
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    }

    .tb-info-key {
        width: 100px;
    }

    .tb-info-value {
        color: #eb4868;
        padding-left: 5px
    }
</style>